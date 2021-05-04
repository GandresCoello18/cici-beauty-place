import { api } from '.'

export const NewHistory = async (options: {
  token: string | undefined
  idProduct: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/products-history',
    data: {
      idProduct: options.idProduct,
    },
  })
  return response
}

export const GetMyHistorty = async (options: {
  token: string | undefined
  limit?: number
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: options.limit
      ? `/products-history/${options.limit}`
      : '/products-history',
  })
  return response
}

export const ClearMyHistorty = async (options: {
  token: string | undefined
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'DELETE',
    url: '/products-history/clear',
  })
  return response
}
