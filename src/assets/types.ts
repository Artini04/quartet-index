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

type NewWord = {
	id: number
	en: string
	'en-add': string | null
	'ja-h': string
	'ja-h-add': string | null
	'ja-h-suru': string | null
	'ja-kk': string | null
	'ja-letter-loc': string
	lesson: number
	reading: number
	kanji: number
	'special-case': string
}

type Word_Scored = {
	score: number
	object: NewWord
}

type Gram_Result = {
	gram: string
	count: number
}

const selector = [
	'あ',
	'い',
	'う',
	'え',
	'お',
	'か',
	'き',
	'く',
	'け',
	'こ',
	'さ',
	'し',
	'す',
	'せ',
	'そ',
	'た',
	'ち',
	'つ',
	'て',
	'と',
	'な',
	'に',
	'ぬ',
	'ね',
	'の',
	'は',
	'ひ',
	'ふ',
	'へ',
	'ほ',
	'ま',
	'み',
	'む',
	'め',
	'も',
	'や',
	'ゆ',
	'よ',
	'ら',
	'り',
	'れ',
	'ろ',
	'わ',
]

export type { Word, NewWord, Word_Scored, Gram_Result }
export { selector }
