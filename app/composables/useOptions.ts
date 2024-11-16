export const useOptionsStore = defineStore("options", () => {
  const appOptions = useLocalStorage("app", {
    wordShowDict: true
  })

  return {
    appOptions
  }
})

export function useOptions() {
  const { appOptions } = storeToRefs(useOptionsStore())
  return { appOptions }
}
