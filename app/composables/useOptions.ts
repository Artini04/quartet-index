const useOptionsStore = defineStore("preferences", () => {
  const app = useLocalStorage("app.preferences", {
    wordShowDicts: true,
    wordLinkDecor: false
  })

  return {
    app
  }
})

export function useOptions() {
  const { app: appOptions } = storeToRefs(useOptionsStore())

  return {
    appOptions
  }
}
