import { useSearchStore } from '@/stores'
import { storeToRefs } from 'pinia'

function useLookup() {
  const searchStore = useSearchStore()
  const { search_query, fuse } = storeToRefs(searchStore)

  return { search_query, fuse }
}

export {
  useLookup
}
