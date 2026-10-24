<script setup lang="ts">
import type { YoutubeEmbedOptions } from '~/types/youtube-embed'
import { buildYoutubePlayerVars } from '~/utils/youtubeEmbed'

const props = defineProps<{
  videoId: string
  playerIndex: number
  origin: string
  embedOptions?: YoutubeEmbedOptions
}>()

const emit = defineEmits<{
  ready: [player: YT.Player, index: number]
  ended: [index: number]
}>()

const container = ref<HTMLDivElement | null>(null)
let playerInstance: YT.Player | null = null

function loadYoutubeApi(): Promise<typeof YT> {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && window.YT?.Player) {
      resolve(window.YT)
      return
    }
    const existing = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]',
    )
    if (!existing) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
    }
    const previousReady = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.()
      resolve(window.YT!)
    }
  })
}

onMounted(async () => {
  const YT = await loadYoutubeApi()
  await new Promise<void>((resolve) => {
    if (typeof YT.Player !== 'undefined') resolve()
    else YT.ready(() => resolve())
  })
  if (!container.value) return

  playerInstance = new YT.Player(container.value, {
    videoId: props.videoId,
    playerVars: buildYoutubePlayerVars(
      props.videoId,
      props.origin,
      props.embedOptions,
    ),
    events: {
      onReady: () => {
        if (playerInstance) {
          playerInstance.unloadModule('captions')
          emit('ready', playerInstance, props.playerIndex)
        }
      },
      onStateChange: (event: YT.OnStateChangeEvent) => {
        if (event.data === YT.PlayerState.ENDED) {
          emit('ended', props.playerIndex)
        }
      },
    },
  })
})

onBeforeUnmount(() => {
  playerInstance?.destroy()
})
</script>

<template>
  <div ref="container" class="youtube-player"></div>
</template>
