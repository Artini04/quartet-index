export type Word = {
  id: number
  data: Data
  info: Info
}

export type Data = {
  ja_kana_kanji?: string | null
  ja_hiragana: string
  ja_particle?: string | null
  ja_suru?: string | null
  en_meaning: string[]
  en_verb_type?: string | null
}

export type Info = {
  letter_location: string
  lesson: number
  reading: number
  kanji: string
}
