declare namespace YT {
  enum PlayerState {
    UNSTARTED = -1,
    ENDED = 0,
    PLAYING = 1,
    PAUSED = 2,
    BUFFERING = 3,
    CUED = 5,
  }

  interface PlayerOptions {
    videoId?: string
    playerVars?: Record<string, string | number>
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
