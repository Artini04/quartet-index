export const useLookup = () => {
  return { ...storeToRefs(useLookupStore()) }
}
