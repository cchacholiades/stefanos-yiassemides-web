import type { Work } from '~/types/work'

export function useSlideshowWorks() {
  const works = ref<Work[] | null>(null)
  const pending = ref(true)
  const error = ref<Error | null>(null)

  async function loadWorks() {
    pending.value = true
    error.value = null
    try {
      const data = await $fetch<Work[]>('/works.json')
      works.value = Array.isArray(data)
        ? [...data].sort((a, b) => a.order - b.order)
        : []
    } catch (e) {
      error.value = e instanceof Error ? e : new Error('Failed to load works')
      works.value = []
    } finally {
      pending.value = false
    }
  }

  onMounted(() => {
    loadWorks()
  })

  return { works, pending, error, loadWorks }
}
