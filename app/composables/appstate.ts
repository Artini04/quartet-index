import Dictionary from "~/data/dictionary.json"

export function useAppState() {
	return {
		dict: Dictionary,
	}
}
