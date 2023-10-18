import { defineStore } from 'pinia'
import { shallowRef, type Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export const useOptionsStore = defineStore('options', () => {
  const app_theme: Ref<string> = useLocalStorage('app.theme', 'dark')
  const card_show_links: Ref<boolean> = useLocalStorage('app.card.show-links', true)
  const debug_mode: Ref<boolean> = useLocalStorage('debug-mode', false)

  const html_console: Ref<string> = shallowRef('')
  const show_console: Ref<boolean> = useLocalStorage('show-console', false)

  function clearLocalStorage() {
    localStorage.clear()

    if (debug_mode.value) {
      console.log('[DEBUG] Local storage cleared!')
      html_console.value += '[DEBUG] Local storage cleared! Options and caches reset.<br>'
    }
  }

  function testConsole() {
    if (debug_mode.value) {
      html_console.value += '[DEBUG] OK!<br>'
    }
  }

  return {
    app_theme,
    card_show_links,
    debug_mode,
    html_console,
    show_console,
    clearLocalStorage,
    testConsole
  }
})
