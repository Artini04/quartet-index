interface Word {
  id: number
  data: {
    ja_kana_kanji?: string | null
    ja_furigana: string
    ja_particle?: string | null
    ja_suru?: string | null
    en_meaning: string[]
    en_verb_type?: string | null
  }
  info: {
    ja_letter_loc: string
    lesson: number
    reading: number
    kanji: string
  }
}

export type { Word }
