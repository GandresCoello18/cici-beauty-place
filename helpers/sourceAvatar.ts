import { BASE_API_IMAGES_CLOUDINNARY } from '../api'

export const SourceAvatar = (source: string) => {
  if (source) {
    if (source.includes('https://')) {
      return source
    }

    return `${BASE_API_IMAGES_CLOUDINNARY}/${source}`
  }

  return ''
}
