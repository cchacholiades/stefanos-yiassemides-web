import type { InjectionKey, Ref } from 'vue'

export const homeScrollRootKey: InjectionKey<Ref<HTMLElement | null>> =
  Symbol('homeScrollRoot')

export const homeScrollToLandingKey: InjectionKey<() => void> = Symbol(
  'homeScrollToLanding',
)

export function useHomeScrollProvide(
  scrollRoot: Ref<HTMLElement | null>,
  scrollToLanding: () => void,
) {
  provide(homeScrollRootKey, scrollRoot)
  provide(homeScrollToLandingKey, scrollToLanding)
}

export function useHomeScrollRoot() {
  return inject(homeScrollRootKey, ref<HTMLElement | null>(null))
}

export function useScrollToLanding() {
  return inject(homeScrollToLandingKey, () => {})
}
