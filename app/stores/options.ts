import { defineStore } from "pinia"

export const useApplicationStore = defineStore(
  "Options",
  () => {
    const appOptions = useLocalStorage(
      "app.options",
      {
        showDictionary: true,
        enlargeJapaneseText: {
          active: false,
          largeSize: 1.2
        },
        enlargeEnglishText: {
          active: false,
          largeSize: 1.2
        }
      },
      {
        deep: true
      }
    )

    const featureFlags = useLocalStorage(
      "app.features",
      {},
      {
        deep: true,
        initOnMounted: true
      }
    )

    return {
      appOptions
    }
  },
  {
    persist: true
  }
)
