export interface Word {
	id: number
	data: Data
	info: Info
}

export interface Data {
	ja_kana_kanji: string | null
	ja_hiragana: string
	ja_particle: string | null
	ja_suru: string | null
	en_meaning: string[]
	en_verb_type: string | null
}

export interface Info {
	letter_location: string
	lesson: number
	reading: number
	kanji: string
}
