import { ref, type Ref } from 'vue'
import { useStorage } from '@vueuse/core'

type AppOptions = {
  showLinks: boolean
  theme: string
}

const appOptions: Ref<AppOptions> = ref({
  showLinks: useStorage('show-link', true),
  theme: useStorage('app-theme', 'dark')
})

export { appOptions }
