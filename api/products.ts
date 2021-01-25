import { api } from '.'

export const GetProducts = async () => {
  const response = await api({
    method: 'GET',
    url: '/products',
  })
  return response
}

export const GetProductsOffers = async (options: { limit?: number }) => {
  const response = await api({
    method: 'GET',
    url: options.limit
      ? `/products/offers/${options.limit}`
      : '/products/offers',
  })
  return response
}

export const GetProductsBestRated = async (options: { limit?: number }) => {
  const response = await api({
    method: 'GET',
    url: options.limit
      ? `/products/best-rated/${options.limit}`
      : '/products/best-rated',
  })
  return response
}

export const GetProduct = async (options: { idProduct: string }) => {
  const response = await api({
    method: 'GET',
    url: `/products/${options.idProduct}`,
  })
  return response
}
