import { api } from '.'

export const newProductCart = async (options: {
  idProduct: string
  quantity: number
  token: string | undefined
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/cart',
    data: {
      idProduct: options.idProduct,
      quantity: options.quantity,
    },
  })
  return response
}

export const getProductCart = async (options: {
  token: string | undefined
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: '/cart',
  })
  return response
}

export const deleteProductCart = async (options: {
  token: string | undefined
  idProduct: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'DELETE',
    url: `/cart/${options.idProduct}`,
  })
  return response
}
