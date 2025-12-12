import { defineStore } from "pinia"

export const useTableStore = defineStore("TableStore", () => {
	const { dict } = useAppState()
	const tableResult = ref()

	function generateTable(key: "lesson" | "letter" = "lesson") {
		tableResult.value = Object.groupBy(dict, (item) => {
			switch (key) {
				case "lesson":
					return item.info.lesson
				case "letter":
					return item.info.letter_location
				default:
					return item.info.lesson
			}
		})
	}

	watchEffect(() => {
		console.log(tableResult.value)
	})

	return {
		tableResult,
		generateTable,
	}
})
