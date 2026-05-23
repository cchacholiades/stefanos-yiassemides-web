import type { Ref } from 'vue'
import type { Work } from '~/types/work'

export function useSlideNav(works: Ref<Work[] | null>) {
  const currentIndex = ref(0)
  const previewIndex = ref<number | null>(null)
  const hoveredIndicatorIndex = ref<number | null>(null)
  const isNavigatingWithArrows = ref(false)
  const isNavHovered = ref(false)

  const activeIndexForBackground = computed(() =>
    previewIndex.value !== null ? previewIndex.value : currentIndex.value,
  )

  function goToSlide(index: number) {
    currentIndex.value = index
    previewIndex.value = null
    hoveredIndicatorIndex.value = null
  }

  function nextSlide(onNavigate?: () => void) {
    if (!works.value?.length) return
    onNavigate?.()
    isNavigatingWithArrows.value = true
    currentIndex.value = (currentIndex.value + 1) % works.value.length
    setTimeout(() => {
      isNavigatingWithArrows.value = false
    }, 600)
  }

  function prevSlide(onNavigate?: () => void) {
    if (!works.value?.length) return
    onNavigate?.()
    isNavigatingWithArrows.value = true
    currentIndex.value =
      (currentIndex.value - 1 + works.value.length) % works.value.length
    setTimeout(() => {
      isNavigatingWithArrows.value = false
    }, 600)
  }

  function handleKeyDown(event: KeyboardEvent, onNavigate?: () => void) {
    if (event.key === 'ArrowLeft') {
      prevSlide(onNavigate)
    } else if (event.key === 'ArrowRight') {
      nextSlide(onNavigate)
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

  function setupKeyboardListener(onNavigate?: () => void) {
    const handler = (e: KeyboardEvent) => handleKeyDown(e, onNavigate)
    onMounted(() => window.addEventListener('keydown', handler))
    onBeforeUnmount(() => window.removeEventListener('keydown', handler))
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
