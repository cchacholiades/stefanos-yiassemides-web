<script setup lang="ts">
import Player from '@vimeo/player'

const props = defineProps<{
  videoId: string
  playerIndex: number
}>()

const emit = defineEmits<{
  ready: [player: Player, index: number]
  destroy: [index: number]
}>()

const container = ref<HTMLDivElement | null>(null)
let playerInstance: Player | null = null

onMounted(async () => {
  if (!container.value) return

  playerInstance = new Player(container.value, {
    id: props.videoId,
    autoplay: false,
    controls: false,
    responsive: true,
    dnt: true,
    background: false,
    playsinline: true,
    muted: false,
    loop: true,
  })

  await playerInstance.ready()
  emit('ready', playerInstance, props.playerIndex)
})

onBeforeUnmount(() => {
  emit('destroy', props.playerIndex)
  void playerInstance?.destroy().catch(() => {})
  playerInstance = null
})
</script>

<template>
  <div ref="container" class="vimeo-player"></div>
</template>
