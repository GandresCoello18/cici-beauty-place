import { api } from '.'
import { FormCalifica } from '../components/payment/qualifyOrder'
import { ParamsFilter } from '../interfaces/products'

export const GetProducts = async (filter?: { params: ParamsFilter }) => {
  const response = await api({
    method: 'GET',
    url: !filter
      ? '/products'
      : `/products?priceMin=${filter.params.min}&priceMax=${filter.params.max}&isPromo=${filter.params.isPromo}&order=${filter.params.order}&orderPrice=${filter.params.orderPrice}&orderStar=${filter.params.orderStar}`,
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

export const GetProductsCategory = async (options: { category: string }) => {
  const response = await api({
    method: 'GET',
    url: `/products/category/${options.category}`,
  })
  return response
}
