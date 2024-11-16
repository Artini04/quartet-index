const useOptionsStore = defineStore("preferences", () => {
  const app = useLocalStorage("app.preferences", {
    wordShowDicts: true,
    wordBiggerJpText: false,
    wordBiggerEnText: false,
    otherLinkDecor: false
  })

  return {
    app
  }
})

export function useOptions() {
  const { app: appOptions } = storeToRefs(useOptionsStore())

  const wordJpTextSize = computed(() =>
    appOptions.value.wordBiggerJpText ? "1.4em" : "1em"
  )
  const wordEnTextSize = computed(() =>
    appOptions.value.wordBiggerEnText ? "1.4em" : "1em"
  )

  const otherLinkTextDecor = computed(() =>
    appOptions.value.otherLinkDecor ? "underline" : "none"
  )

  return {
    appOptions,
    wordJpTextSize,
    wordEnTextSize,
    otherLinkTextDecor
  }
}
