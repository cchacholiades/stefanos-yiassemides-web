import type { YoutubeEmbedOptions } from '~/types/youtube-embed'
import { DEFAULT_YOUTUBE_EMBED_OPTIONS } from '~/types/youtube-embed'

export function buildYoutubePlayerVars(
  videoId: string,
  origin: string,
  embedOptions?: YoutubeEmbedOptions,
): Record<string, string | number> {
  const opts = { ...DEFAULT_YOUTUBE_EMBED_OPTIONS, ...embedOptions }

  const playerVars: Record<string, string | number> = {
    autoplay: opts.autoplay ? 1 : 0,
    controls: opts.controls ? 1 : 0,
    rel: opts.relatedVideos ? 1 : 0,
    iv_load_policy: opts.annotations ? 1 : 3,
    playsinline: opts.playsinline ? 1 : 0,
    mute: opts.mute ? 1 : 0,
    enablejsapi: 1,
    origin,
    fs: opts.fullscreen ? 1 : 0,
    disablekb: opts.keyboard ? 0 : 1,
    cc_load_policy: opts.captions ? 1 : 0,
    color: opts.progressBarColor,
  }

  if (opts.loop) {
    playerVars.loop = 1
    playerVars.playlist = videoId
  }

  return playerVars
}
