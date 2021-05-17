/* eslint-disable @typescript-eslint/camelcase */
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

export const UpdateAssignUserCoupons = async (options: {
  token: string | undefined
  id_user_coupons: string
  idCoupon: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'PUT',
    url: '/coupons/assign/user',
    data: {
      id_user_coupons: options.id_user_coupons,
      idCoupon: options.idCoupon,
    },
  })
  return response
}

export const GetAssignUserCoupons = async (options: {
  token: string | undefined
  status: string
  page: number
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: `/coupons/assign/user/${options.status}?page=${options.page}`,
  })
  return response
}
