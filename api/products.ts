import { api } from '.'
import { FormCalifica } from '../components/payment/qualifyOrder'

export const GetProducts = async (options: { lastIdProduct?: string }) => {
  const response = await api({
    method: 'GET',
    url: !options.lastIdProduct
      ? '/products'
      : `/products?lastIdProduct=${options.lastIdProduct}`,
  })
  return response
}

export const GetProductsOffers = async (options: { limit?: number }) => {
  const response = await api({
    method: 'GET',
    url: options.limit
      ? `/products/offers/${options.limit}`
      : '/products/offers/0',
  })
  return response
}

export const GetProductsBestSellers = async () => {
  const response = await api({
    method: 'GET',
    url: '/products/best-sellers-by-category',
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

export const GetSearchProducts = async (options: { key: string }) => {
  const response = await api({
    method: 'GET',
    url: `/products/search/${options.key}`,
  })
  return response
}

export const NewProductReviews = async (options: {
  token: string | undefined
  data: FormCalifica
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/products/review',
    data: {
      ...options.data,
    },
  })
  return response
}

export const GetProductReviews = async (options: { idProduct: string }) => {
  const response = await api({
    method: 'GET',
    url: `/products/review/${options.idProduct}`,
  })
  return response
}

export const GetProductsCategory = async (options: {
  category: string
  limit?: number
}) => {
  const response = await api({
    method: 'GET',
    url: options.limit
      ? `/products/category/${options.category}?limit=${options.limit}`
      : `/products/category/${options.category}`,
  })
  return response
}
