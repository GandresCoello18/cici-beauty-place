import { api } from '.'

export const getCoupons = async () => {
  const response = await api({
    method: 'GET',
    url: `/coupons`,
  })
  return response
}

export const AssignUserCoupons = async (options: {
  token: string | undefined
  idUser: string
  idCoupon?: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/coupons/assign/user',
    data: {
      idUser: options.idUser,
      idCoupon: options.idCoupon,
    },
  })
  return response
}
