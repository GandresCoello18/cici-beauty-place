import { api } from '.'

export const getProductShipping = async (options: {
  token: string | undefined
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: '/shipping',
  })
  return response
}
