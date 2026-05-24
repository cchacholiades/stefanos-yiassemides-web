import type Player from '@vimeo/player'
import type { Ref } from 'vue'
import type { Work } from '~/types/work'

export function useSlideVideo(
  works: Ref<Work[] | null>,
  currentIndex: Ref<number>,
) {
  const youtubePlayers = ref<(YT.Player | null)[]>([])
  const vimeoPlayers = ref<(Player | null)[]>([])
  const isPreviewPlaying = ref(false)
  const isPlaybackPaused = ref(false)
  const isHovered = ref(true)
  const isIOS = ref(false)
  const hasUserInteracted = ref(false)
  const pendingVimeoPlayIndex = ref<number | null>(null)

  const origin = computed(() =>
    import.meta.client ? window.location.origin : '',
  )

  function hasVideo(work: Work) {
    return Boolean(
      (work.youtube && work.youtube.length > 0) ||
      (work.vimeo && work.vimeo.length > 0),
    )
  }

  function registerYoutubePlayer(index: number, player: YT.Player) {
    while (youtubePlayers.value.length <= index) {
      youtubePlayers.value.push(null)
    }
    youtubePlayers.value[index] = player
  }

  function registerVimeoPlayer(index: number, player: Player) {
    while (vimeoPlayers.value.length <= index) {
      vimeoPlayers.value.push(null)
    }
    vimeoPlayers.value[index] = player

    if (pendingVimeoPlayIndex.value === index && isPreviewPlaying.value) {
      pendingVimeoPlayIndex.value = null
      playVimeo(player)
    }
  }

  function unregisterVimeoPlayer(index: number) {
    if (index < vimeoPlayers.value.length) {
      vimeoPlayers.value[index] = null
    }
  }

  /** Fire-and-forget — matches original sync setVolume/play; catches async rejections */
  function playVimeo(player: Player) {
    void player.setVolume(1).catch(() => {})
    void player.play().catch(() => {})
  }

  function pauseVimeo(player: Player | null | undefined) {
    if (!player) return
    void player.pause().catch(() => {})
  }

  async function runVimeoAsync<T>(
    player: Player | null | undefined,
    action: (p: Player) => Promise<T>,
  ): Promise<T | undefined> {
    if (!player) return undefined
    try {
      return await action(player)
    } catch {
      return undefined
    }
  }

  function pauseCurrentVideo() {
    const list = works.value
    if (!list) return

    const currentWork = list[currentIndex.value]
    if (!currentWork) return

    const yt = youtubePlayers.value[currentIndex.value]
    if (currentWork.youtube?.[0] && yt) {
      try {
        yt.pauseVideo()
      } catch {
        /* ignore */
      }
      return
    }

    pauseVimeo(vimeoPlayers.value[currentIndex.value])
  }

  function stopAllVideos() {
    youtubePlayers.value.forEach((player) => {
      try {
        player?.pauseVideo()
      } catch {
        /* player not ready */
      }
    })
    vimeoPlayers.value.forEach((player) => {
      pauseVimeo(player)
    })
  }

  function playCurrentVideo() {
    stopAllVideos()

    const list = works.value
    if (!list) return

    const currentWork = list[currentIndex.value]
    if (!currentWork) return

    const yt = youtubePlayers.value[currentIndex.value]
    if (currentWork.youtube?.[0] && yt) {
      try {
        yt.unMute()
        yt.playVideo()
        setTimeout(() => {
          if (yt.getPlayerState() !== 1) {
            yt.unMute()
            yt.playVideo()
          }
        }, 1000)
      } catch {
        /* ignore */
      }
    }

    const index = currentIndex.value
    const vimeo = vimeoPlayers.value[index]
    if (currentWork.vimeo?.[0]) {
      if (vimeo) {
        pendingVimeoPlayIndex.value = null
        playVimeo(vimeo)
      } else {
        pendingVimeoPlayIndex.value = index
      }
    }
  }

  function rewindVideo() {
    const list = works.value
    if (!list) return

    const currentWork = list[currentIndex.value]
    if (!currentWork) return

    isPlaybackPaused.value = false

    const yt = youtubePlayers.value[currentIndex.value]
    if (currentWork.youtube?.[0] && yt) {
      try {
        yt.seekTo(0)
        yt.playVideo()
      } catch {
        /* ignore */
      }
    }

    const vimeo = vimeoPlayers.value[currentIndex.value]
    if (currentWork.vimeo?.[0] && vimeo) {
      void vimeo.setCurrentTime(0).catch(() => {})
      void vimeo.play().catch(() => {})
    }
  }

  async function togglePlayback() {
    if (!isPreviewPlaying.value) return

    const list = works.value
    if (!list) return

    const currentWork = list[currentIndex.value]
    if (!currentWork) return

    const yt = youtubePlayers.value[currentIndex.value]
    if (currentWork.youtube?.[0] && yt) {
      try {
        const state = yt.getPlayerState()
        if (
          state === YT.PlayerState.PLAYING ||
          state === YT.PlayerState.BUFFERING
        ) {
          yt.pauseVideo()
          isPlaybackPaused.value = true
        } else {
          yt.playVideo()
          isPlaybackPaused.value = false
        }
      } catch {
        /* player not ready */
      }
      return
    }

    const vimeo = vimeoPlayers.value[currentIndex.value]
    if (currentWork.vimeo?.[0] && vimeo) {
      const paused = await runVimeoAsync(vimeo, (p) => p.getPaused())
      if (paused === undefined) return
      if (paused) {
        await runVimeoAsync(vimeo, (p) => p.play())
        isPlaybackPaused.value = false
      } else {
        await runVimeoAsync(vimeo, (p) => p.pause())
        isPlaybackPaused.value = true
      }
    }
  }

  function playPreview() {
    const list = works.value
    if (!list) return
    const currentWork = list[currentIndex.value]
    if (!currentWork) return

    if (hasVideo(currentWork)) {
      hasUserInteracted.value = true
      isPreviewPlaying.value = true
      isPlaybackPaused.value = false
      isHovered.value = false
      playCurrentVideo()
    }
  }

  function stopPreview() {
    isPreviewPlaying.value = false
    isPlaybackPaused.value = false
    pendingVimeoPlayIndex.value = null
    isHovered.value = true
    stopAllVideos()
  }

  function onPlayerEnded(index: number) {
    const yt = youtubePlayers.value[index]
    if (yt) {
      yt.seekTo(0)
      yt.playVideo()
    }
  }

  function handleVisibilityChange() {
    if (document.hidden) {
      stopAllVideos()
      isHovered.value = true
    }
  }

  function onNavigate() {
    stopAllVideos()
    isPreviewPlaying.value = false
    isPlaybackPaused.value = false
    pendingVimeoPlayIndex.value = null
  }

  onMounted(() => {
    isIOS.value =
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !(window as Window & { MSStream?: unknown }).MSStream
    document.addEventListener('visibilitychange', handleVisibilityChange)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
  })

  return {
    youtubePlayers,
    vimeoPlayers,
    isPreviewPlaying,
    isPlaybackPaused,
    isHovered,
    isIOS,
    hasUserInteracted,
    origin,
    hasVideo,
    registerYoutubePlayer,
    registerVimeoPlayer,
    unregisterVimeoPlayer,
    stopAllVideos,
    pauseCurrentVideo,
    playCurrentVideo,
    rewindVideo,
    playPreview,
    togglePlayback,
    stopPreview,
    onPlayerEnded,
    onNavigate,
  }
}
