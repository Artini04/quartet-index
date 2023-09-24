import { ref, type Ref } from 'vue'
import { useStorage } from '@vueuse/core'

type AppOptions = {
  cardPadding: string
  showLinks: boolean
}

const appOptions: Ref<AppOptions> = ref({
  cardPadding: '1rem',
  showLinks: useStorage('show-link', false)
})

export { appOptions }
