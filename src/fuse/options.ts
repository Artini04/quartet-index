// TODO: WORK IN PROGRESS

import { watch, type Ref } from 'vue'
import { useStorage } from '@vueuse/core'

interface AppOptions {
  cardOptions: {
    showLinks: boolean
  }
  appTheme: string
}

const app_options = {
  app_theme: useStorage('app-theme', 'light')
}

const appOptions: Ref<AppOptions> = useStorage('app-options', {
  cardOptions: {
    showLinks: true
  },
  appTheme: 'dark'
})

watch(app_options.app_theme, () => {
  console.log(app_options.app_theme)
})

export { appOptions }
