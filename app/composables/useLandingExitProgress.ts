import type { Ref } from 'vue'

/** 0 = landing fully visible, 1 = scrolled into works (one viewport). */
export function useLandingExitProgress(scrollRoot: Ref<HTMLElement | null>) {
  const exitProgress = ref(0)
  const worksEnterProgress = ref(0)

  function update() {
    const root = scrollRoot.value
    if (!root) return

    const viewport = root.clientHeight || 1
    const scroll = root.scrollTop

    exitProgress.value = Math.min(1, Math.max(0, scroll / viewport))
    worksEnterProgress.value = Math.min(
      1,
      Math.max(0, (scroll - viewport * 0.35) / (viewport * 0.55)),
    )
  }

  watchEffect((onCleanup) => {
    const root = scrollRoot.value
    if (!root) return

    root.addEventListener('scroll', update, { passive: true })
    update()

    onCleanup(() => root.removeEventListener('scroll', update))
  })

  return { exitProgress, worksEnterProgress }
}
