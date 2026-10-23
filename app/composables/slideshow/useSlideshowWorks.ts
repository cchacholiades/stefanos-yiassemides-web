import type { Work } from '~/types/work'

export function useSlideshowWorks() {
  const works = ref<Work[] | null>(null)
  const pending = ref(true)
  const error = ref<Error | null>(null)
  let abortController: AbortController | null = null

  async function loadWorks() {
    abortController?.abort()
    abortController = new AbortController()
    pending.value = true
    error.value = null
    try {
      const data = await $fetch<Work[]>('/works.json', {
        signal: abortController.signal,
      })
      works.value = Array.isArray(data)
        ? [...data].sort((a, b) => a.order - b.order)
        : []
    } catch (e) {
      if (e instanceof Error && e.name === 'AbortError') return
      error.value = e instanceof Error ? e : new Error('Failed to load works')
      works.value = []
    } finally {
      pending.value = false
    }
  }

  onMounted(() => {
    loadWorks()
  })

  onBeforeUnmount(() => {
    abortController?.abort()
  })

  return { works, pending, error, loadWorks }
}
