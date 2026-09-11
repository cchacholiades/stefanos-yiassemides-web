export interface Work {
  id: number
  img: string
  name: string
  genre?: string[]
  description: string
  youtube?: string[]
  youtube_channel?: string
  youtube_playlist?: string
  vimeo?: string[]
  platforms?: string[]
  soundcloud_playlist?: string
  imdb?: string
  audible?: string
  audible_trailer?: string
  order: number
}
