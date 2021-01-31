import { api } from '.'

export const createLikeProduct = async (options: {
  idProduct: string
  token: string | undefined
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/favorite',
    data: {
      idProduct: options.idProduct,
    },
  })
  return response
}

export const deleteLikeProduct = async (options: {
  idProduct: string
  token: string | undefined
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'DELETE',
    url: `/favorite/${options.idProduct}`,
  })
  return response
}

export const getLikeProduct = async (options: {
  idProduct: string
  token: string | undefined
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: `/favorite/${options.idProduct}`,
  })
  return response
}

export const getLikeProductCount = async (options: { idProduct: string }) => {
  const response = await api({
    method: 'GET',
    url: `/favorite/count/${options.idProduct}`,
  })
  return response
}
