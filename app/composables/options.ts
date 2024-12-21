export const useApplication = () => {
  return { ...storeToRefs(useApplicationStore()) }
}
