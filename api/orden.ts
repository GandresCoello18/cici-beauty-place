/* eslint-disable @typescript-eslint/camelcase */
import { api } from '.'
import { newOrden } from '../interfaces/orden'

export const NewOrden = async (options: {
  token: string | undefined
  orden: newOrden
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/orden',
    data: {
      paymentMethod: options.orden.paymentMethod,
      shipping: options.orden.shipping,
      discount: options.orden.discount,
      totalAmount: options.orden.totalAmount,
      id_user_coupons: options.orden.id_user_coupons,
      paymentId: options.orden.paymentId,
    },
  })
  return response
}
