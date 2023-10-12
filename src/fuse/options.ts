import { type Ref } from 'vue'
import { useStorage } from '@vueuse/core'

const app_theme: Ref<string> = useStorage('app-theme', 'dark')
const card_show_links: Ref<boolean> = useStorage('card-show-links', true)

export { app_theme, card_show_links }
