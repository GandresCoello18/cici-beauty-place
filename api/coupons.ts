import { api } from '.'

export const getCoupons = async () => {
  const response = await api({
    method: 'GET',
    url: `/coupons`,
  })
  return response
}
