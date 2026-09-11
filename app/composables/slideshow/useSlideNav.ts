import type { Ref } from 'vue'
import type { Work } from '~/types/work'

export function useSlideNav(works: Ref<Work[] | null>) {
  const currentIndex = ref(0)
  const previewIndex = ref<number | null>(null)
  const hoveredIndicatorIndex = ref<number | null>(null)
  const isNavigatingWithArrows = ref(false)
  const isNavHovered = ref(false)
  let arrowAnimTimeout: ReturnType<typeof setTimeout> | null = null

  const activeIndexForBackground = computed(() =>
    previewIndex.value !== null ? previewIndex.value : currentIndex.value,
  )

  function goToSlide(index: number) {
    currentIndex.value = index
    previewIndex.value = null
    hoveredIndicatorIndex.value = null
  }

  function clearArrowAnim() {
    if (arrowAnimTimeout !== null) {
      clearTimeout(arrowAnimTimeout)
      arrowAnimTimeout = null
    }
  }

  function setArrowAnim() {
    clearArrowAnim()
    isNavigatingWithArrows.value = true
    arrowAnimTimeout = setTimeout(() => {
      isNavigatingWithArrows.value = false
      arrowAnimTimeout = null
    }, 600)
  }

  function nextSlide(onNavigate?: () => void) {
    if (!works.value?.length) return
    onNavigate?.()
    setArrowAnim()
    currentIndex.value = (currentIndex.value + 1) % works.value.length
  }

  function prevSlide(onNavigate?: () => void) {
    if (!works.value?.length) return
    onNavigate?.()
    setArrowAnim()
    currentIndex.value =
      (currentIndex.value - 1 + works.value.length) % works.value.length
  }

  function handleKeyDown(
    event: KeyboardEvent,
    options?: {
      onNavigate?: () => void
      onEscapePreview?: () => void
      onTogglePlayback?: () => void
      isPreviewPlaying?: Ref<boolean>
    },
  ) {
    if (event.key === 'Escape') {
      if (options?.isPreviewPlaying?.value && options.onEscapePreview) {
        event.preventDefault()
        options.onEscapePreview()
      }
      return
    }

    if (options?.isPreviewPlaying?.value) {
      if (event.code === 'Space' && options.onTogglePlayback) {
        event.preventDefault()
        options.onTogglePlayback()
      }
      return
    }

    if (event.key === 'ArrowLeft') {
      prevSlide(options.onNavigate)
    } else if (event.key === 'ArrowRight') {
      nextSlide(options.onNavigate)
    }
  }

  function showPreview(index: number) {
    previewIndex.value = index
    hoveredIndicatorIndex.value = index
  }

  function handleIndicatorsEnter() {
    if (hoveredIndicatorIndex.value !== null) {
      previewIndex.value = hoveredIndicatorIndex.value
    }
  }

  function handleIndicatorsLeave() {
    previewIndex.value = null
    hoveredIndicatorIndex.value = null
  }

  function setHoveredIndicator(index: number) {
    hoveredIndicatorIndex.value = index
  }

  function handleIndicatorClick(index: number, onNavigate?: () => void) {
    onNavigate?.()
    goToSlide(index)
  }

  function handleNavHover(isHovered: boolean) {
    isNavHovered.value = isHovered
  }

  function setupKeyboardListener(options?: {
    onNavigate?: () => void
    onEscapePreview?: () => void
    onTogglePlayback?: () => void
    isPreviewPlaying?: Ref<boolean>
  }) {
    const handler = (e: KeyboardEvent) => handleKeyDown(e, options)
    onMounted(() => window.addEventListener('keydown', handler))
    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handler)
      clearArrowAnim()
    })
  }

  return {
    currentIndex,
    previewIndex,
    hoveredIndicatorIndex,
    isNavigatingWithArrows,
    isNavHovered,
    activeIndexForBackground,
    goToSlide,
    nextSlide,
    prevSlide,
    showPreview,
    handleIndicatorsEnter,
    handleIndicatorsLeave,
    setHoveredIndicator,
    handleIndicatorClick,
    handleNavHover,
    setupKeyboardListener,
  }
}
