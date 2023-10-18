import { defineStore } from 'pinia'
import { type Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export const useOptionsStore = defineStore('options', () => {
  const app_theme: Ref<string> = useLocalStorage('app.theme', 'dark')
  const card_show_links: Ref<boolean> = useLocalStorage('app.card.show-links', true)
  const debug_mode: Ref<boolean> = useLocalStorage('debug-mode', false)

  function clearLocalStorage() {
    localStorage.clear()

    if (debug_mode.value) {
      console.log('[DEBUG] Local storage cleared!')
    }
  }

  return { app_theme, card_show_links, debug_mode, clearLocalStorage }
})
