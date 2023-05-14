type Word = {
	id: number
	'ja-h': string | null
	'ja-kk': string | null
	en: string | null
	'ja-h-add': string | null
	'en-add': string | null
	lesson: number
	reading: number
	kanji: number | null
	'ja-letter-loc': string | null
	'special-case': string | null
}

type Word_Scored = {
	score: number
	object: Word
}

type Gram_Result = {
	gram: string
	count: number
}

export type { Word, Word_Scored, Gram_Result }
