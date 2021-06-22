import { api } from '.'

export const getTimeOffert = async (options: {
  token: string | undefined
  idTimeOffer: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: `/offerTime/${options.idTimeOffer}`,
  })
  return response
}
