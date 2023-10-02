import { type Ref } from 'vue'
import { useStorage } from '@vueuse/core'

interface AppOptions {
  cardOptions: {
    showLinks: boolean
  }
  appTheme: string
}

const appOptions: Ref<AppOptions> = useStorage('app-options', {
  cardOptions: {
    showLinks: true
  },
  appTheme: 'dark'
})

export { appOptions }
