import type Player from '@vimeo/player'
import type { Ref } from 'vue'
import type { Work } from './types'

export function useVideoPlayers(
  works: Ref<Work[] | null>,
  currentIndex: Ref<number>,
) {
  const youtubePlayers = ref<(YT.Player | null)[]>([])
  const vimeoPlayers = ref<(Player | null)[]>([])
  const isPreviewPlaying = ref(false)
  const isHovered = ref(true)
  const isIOS = ref(false)
  const hasUserInteracted = ref(false)

  const origin = computed(() =>
    import.meta.client ? window.location.origin : '',
  )

  function hasVideo(work: Work) {
    return (
      (work.youtube && work.youtube.length > 0) ||
      (work.vimeo && work.vimeo.length > 0)
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
      try {
        player?.pause()
      } catch {
        /* player not ready */
      }
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
        if (isIOS.value && !hasUserInteracted.value) yt.mute()
        else if (isIOS.value && hasUserInteracted.value) yt.unMute()
        yt.playVideo()
        setTimeout(() => {
          if (yt.getPlayerState() !== 1) {
            if (isIOS.value && !hasUserInteracted.value) yt.mute()
            else if (isIOS.value && hasUserInteracted.value) yt.unMute()
            yt.playVideo()
          }
        }, 1000)
      } catch {
        /* ignore */
      }
    }

    const vimeo = vimeoPlayers.value[currentIndex.value]
    if (currentWork.vimeo?.[0] && vimeo) {
      try {
        if (isIOS.value && !hasUserInteracted.value) {
          vimeo.setVolume(0)
        } else if (isIOS.value && hasUserInteracted.value) {
          vimeo.setVolume(1)
        }
        vimeo.play()
      } catch {
        /* ignore */
      }
    }
  }

  function rewindVideo() {
    const list = works.value
    if (!list) return

    const currentWork = list[currentIndex.value]
    if (!currentWork) return

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
      try {
        vimeo.setCurrentTime(0)
        vimeo.play()
      } catch {
        /* ignore */
      }
    }
  }

  function playPreview() {
    const list = works.value
    if (!list) return
    const currentWork = list[currentIndex.value]
    if (!currentWork) return

    if (hasVideo(currentWork)) {
      isPreviewPlaying.value = true
      isHovered.value = false
      playCurrentVideo()
    }
  }

  function stopPreview() {
    isPreviewPlaying.value = false
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
    isHovered,
    isIOS,
    hasUserInteracted,
    origin,
    hasVideo,
    registerYoutubePlayer,
    registerVimeoPlayer,
    stopAllVideos,
    playCurrentVideo,
    rewindVideo,
    playPreview,
    stopPreview,
    onPlayerEnded,
    onNavigate,
  }
}
