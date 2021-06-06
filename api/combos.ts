import { api } from '.'

export const GetCombos = async () => {
  const response = await api({
    method: 'GET',
    url: '/combo',
  })
  return response
}
