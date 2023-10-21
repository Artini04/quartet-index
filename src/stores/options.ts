import { defineStore } from 'pinia'
import { shallowRef, type Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export const useOptionsStore = defineStore('options', () => {
  const app_theme: Ref<string> = useLocalStorage('app.theme', 'dark')
  const card_show_links: Ref<boolean> = useLocalStorage('app.card.show-links', true)
  const debug_mode: Ref<boolean> = useLocalStorage('debug-mode', false)

  const html_console: Ref<string> = shallowRef('')
  const show_console: Ref<boolean> = useLocalStorage('show-console', false)

  function showDebugMessage(show: boolean, message: string) {
    if (show) {
      console.log(message)
      html_console.value += message + '<br>'
    }
  }

  function clearLocalStorage() {
    localStorage.clear()
    showDebugMessage(debug_mode.value, '[DEBUG] Local storage cleared!')
  }

  function testConsole() {
    showDebugMessage(debug_mode.value, '[DEBUG] OK!')
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
