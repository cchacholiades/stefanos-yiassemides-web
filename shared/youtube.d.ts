declare namespace YT {
  enum PlayerState {
    UNSTARTED = -1,
    ENDED = 0,
    PLAYING = 1,
    PAUSED = 2,
    BUFFERING = 3,
    CUED = 5,
  }

  interface PlayerVars {
    autoplay?: 0 | 1
    controls?: 0 | 1
    modestbranding?: 0 | 1
    rel?: 0 | 1
    iv_load_policy?: 1 | 3
    playsinline?: 0 | 1
    mute?: 0 | 1
    enablejsapi?: 0 | 1
    origin?: string
    fs?: 0 | 1
    disablekb?: 0 | 1
    cc_load_policy?: 0 | 1
    color?: 'red' | 'white'
    loop?: 0 | 1
    playlist?: string
  }

  interface PlayerOptions {
    videoId?: string
    playerVars?: PlayerVars
    events?: {
      onReady?: (event: { target: Player }) => void
      onStateChange?: (event: OnStateChangeEvent) => void
    }
  }

  interface OnStateChangeEvent {
    data: PlayerState
    target: Player
  }

  interface Player {
    playVideo: () => void
    pauseVideo: () => void
    seekTo: (seconds: number, allowSeekAhead?: boolean) => void
    getPlayerState: () => number
    mute: () => void
    unMute: () => void
    destroy: () => void
  }

  function ready(callback: () => void): void

  const Player: new (
    element: HTMLElement | string,
    options: PlayerOptions,
  ) => Player
}

interface Window {
  YT?: typeof YT
  onYouTubeIframeAPIReady?: () => void
}
