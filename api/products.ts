import { api } from '.'

export const GetProducts = async () => {
  const response = await api({
    method: 'GET',
    url: '/products',
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
