export interface Work {
  id: number
  img: string
  name: string
  genre?: string[]
  description: string
  youtube?: string[]
  youtube_channel?: string
  vimeo?: string[]
  platforms?: string[]
  order: number
}
