import type { Ref } from 'vue'
import type { Work } from '~/types/work'

export function useSlideVideo(
  works: Ref<Work[] | null>,
  currentIndex: Ref<number>,
) {
  const youtubePlayers = ref<(YT.Player | null)[]>([])
  const isPreviewPlaying = ref(false)
  const activeVideoIndex = ref(0)
  let playbackRetryTimeout: ReturnType<typeof setTimeout> | null = null
  const isPlaybackPaused = ref(false)
  const isHovered = ref(true)

  const origin = computed(() =>
    import.meta.client ? window.location.origin : '',
  )

  function hasVideo(work: Work) {
    return Boolean(work.youtube && work.youtube.length > 0)
  }

  function registerYoutubePlayer(index: number, player: YT.Player) {
    while (youtubePlayers.value.length <= index) {
      youtubePlayers.value.push(null)
    }
    youtubePlayers.value[index] = player
    // On mobile the player mounts after playPreview() fires, so play it now if still active.
    if (isPreviewPlaying.value && index === currentIndex.value) {
      playCurrentVideo()
    }
  }

  function stopAllVideos() {
    if (playbackRetryTimeout !== null) {
      clearTimeout(playbackRetryTimeout)
      playbackRetryTimeout = null
    }
    youtubePlayers.value.forEach((player) => {
      try {
        player?.pauseVideo()
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
    const videoId =
      currentWork.youtube?.[activeVideoIndex.value] ?? currentWork.youtube?.[0]
    if (videoId && yt) {
      try {
        yt.unMute()
        if (activeVideoIndex.value > 0) {
          yt.loadVideoById(videoId)
        } else {
          yt.playVideo()
        }
        if (playbackRetryTimeout !== null) clearTimeout(playbackRetryTimeout)
        playbackRetryTimeout = setTimeout(() => {
          playbackRetryTimeout = null
          if (!isPreviewPlaying.value) return
          if (yt.getPlayerState() !== 1) {
            yt.unMute()
            yt.playVideo()
          }
        }, 1000)
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
  }

  function togglePlayback() {
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
    }
  }

  function playPreview(videoIndex = 0) {
    const list = works.value
    if (!list) return
    const currentWork = list[currentIndex.value]
    if (!currentWork) return

    if (hasVideo(currentWork)) {
      activeVideoIndex.value = videoIndex
      isPreviewPlaying.value = true
      isPlaybackPaused.value = false
      isHovered.value = false
      playCurrentVideo()
    }
  }

  function stopPreview() {
    isPreviewPlaying.value = false
    isPlaybackPaused.value = false
    isHovered.value = true
    stopAllVideos()
    if (activeVideoIndex.value > 0) {
      const list = works.value
      const work = list?.[currentIndex.value]
      const yt = youtubePlayers.value[currentIndex.value]
      if (work?.youtube?.[0] && yt) {
        try {
          yt.cueVideoById(work.youtube[0])
        } catch {
          /* ignore */
        }
      }
    }
    activeVideoIndex.value = 0
  }

  function onPlayerEnded(index: number) {
    if (!isPreviewPlaying.value) return
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

  function handlePageHide() {
    stopAllVideos()
    isHovered.value = true
  }

  function handlePageShow(event: PageTransitionEvent) {
    if (event.persisted) {
      isPreviewPlaying.value = false
      isPlaybackPaused.value = false
      isHovered.value = true
    }
  }

  function onNavigate() {
    stopAllVideos()
    isPreviewPlaying.value = false
    isPlaybackPaused.value = false
    activeVideoIndex.value = 0
  }

  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('pagehide', handlePageHide)
    window.addEventListener('pageshow', handlePageShow)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    window.removeEventListener('pagehide', handlePageHide)
    window.removeEventListener('pageshow', handlePageShow)
  })

  return {
    youtubePlayers,
    isPreviewPlaying,
    activeVideoIndex,
    isPlaybackPaused,
    isHovered,
    origin,
    hasVideo,
    registerYoutubePlayer,
    stopAllVideos,
    playCurrentVideo,
    rewindVideo,
    playPreview,
    togglePlayback,
    stopPreview,
    onPlayerEnded,
    onNavigate,
  }
}
