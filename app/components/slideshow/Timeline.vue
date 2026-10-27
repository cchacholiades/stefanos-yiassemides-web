<template>
  <div class="slideshow-timeline" @pointerdown="onPointerDown">
    <div class="slideshow-timeline__track">
      <div
        class="slideshow-timeline__fill"
        :style="{ width: `${progress * 100}%` }"
      ></div>
      <div
        class="slideshow-timeline__thumb"
        :style="{ left: `${progress * 100}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentTime: number
  duration: number
}>()

const emit = defineEmits<{
  seek: [seconds: number]
}>()

const progress = computed(() =>
  props.duration > 0 ? Math.min(props.currentTime / props.duration, 1) : 0,
)

function seekFromPointer(event: PointerEvent) {
  const track = (event.currentTarget as HTMLElement).querySelector(
    '.slideshow-timeline__track',
  ) as HTMLElement | null
  if (!track || props.duration <= 0) return
  const rect = track.getBoundingClientRect()
  const fraction = Math.max(
    0,
    Math.min((event.clientX - rect.left) / rect.width, 1),
  )
  emit('seek', fraction * props.duration)
}

function onPointerDown(event: PointerEvent) {
  seekFromPointer(event)
  ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
  ;(event.currentTarget as HTMLElement).addEventListener(
    'pointermove',
    onPointerMove,
  )
  ;(event.currentTarget as HTMLElement).addEventListener(
    'pointerup',
    onPointerUp,
    { once: true },
  )
}

function onPointerMove(event: PointerEvent) {
  seekFromPointer(event)
}

function onPointerUp(event: PointerEvent) {
  ;(event.currentTarget as HTMLElement).removeEventListener(
    'pointermove',
    onPointerMove,
  )
}
</script>

<style scoped>
.slideshow-timeline {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 160;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  touch-action: none;
}

.slideshow-timeline::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  pointer-events: none;
}

.slideshow-timeline__track {
  position: relative;
  height: 3px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 9999px;
  transition: height 0.15s ease;
}

.slideshow-timeline:hover .slideshow-timeline__track {
  height: 4px;
}

.slideshow-timeline__fill {
  position: absolute;
  inset-block: 0;
  left: 0;
  background: #fff;
  border-radius: 9999px;
  pointer-events: none;
}

.slideshow-timeline__thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 9999px;
  pointer-events: none;
  transition: transform 0.15s ease;
}

.slideshow-timeline:hover .slideshow-timeline__thumb {
  transform: translate(-50%, -50%) scale(1);
}
</style>
