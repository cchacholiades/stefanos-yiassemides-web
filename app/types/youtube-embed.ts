export interface YoutubeEmbedOptions {
  /** Native player controls (play, volume, timeline). */
  controls?: boolean
  /**
   * Related videos from other channels on pause/end.
   * When false, YouTube may still show same-channel suggestions.
   */
  relatedVideos?: boolean
  /** In-video annotations and info cards. */
  annotations?: boolean
  /** Fullscreen button. */
  fullscreen?: boolean
  /** Keyboard shortcuts (space, arrows, etc.). */
  keyboard?: boolean
  /** Closed captions when available. */
  captions?: boolean
  autoplay?: boolean
  mute?: boolean
  playsinline?: boolean
  /** Loop playback (reduces end-screen prominence). */
  loop?: boolean
  progressBarColor?: 'red' | 'white'
}

export const DEFAULT_YOUTUBE_EMBED_OPTIONS = {
  controls: false,
  relatedVideos: false,
  annotations: false,
  fullscreen: false,
  keyboard: false,
  captions: false,
  autoplay: false,
  mute: true,
  playsinline: true,
  loop: false,
  progressBarColor: 'white',
} as const satisfies YoutubeEmbedOptions
