import { api } from '.'

export const GetProvinces = async () => {
  const response = await api({
    method: 'GET',
    url: '/provinces',
  })
  return response
}
