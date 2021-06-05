import { api } from '.'

export const GetCombos = async (option: { token: string | undefined }) => {
  api.defaults.headers['access-token'] = option.token
  const response = await api({
    method: 'GET',
    url: '/combo',
  })
  return response
}
