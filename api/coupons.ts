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
  idCoupon: string
  idGuestUser?: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/coupons/assign/user',
    data: {
      idUser: options.idUser,
      idCoupon: options.idCoupon,
      idGuestUser: options.idGuestUser,
    },
  })
  return response
}

export const GetAssignUserCoupons = async (options: {
  token: string | undefined
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: '/coupons/assign/user',
  })
  return response
}
