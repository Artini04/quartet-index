import { defineStore } from 'pinia'
import { type Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export const useOptionsStore = defineStore('options', () => {
  const app_theme: Ref<string> = useLocalStorage('app.theme', 'dark')
  const card_show_links: Ref<boolean> = useLocalStorage('app.card.show-links', true)

  return { app_theme, card_show_links }
})
