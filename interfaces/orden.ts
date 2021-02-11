/* eslint-disable @typescript-eslint/class-name-casing */
export interface newOrden {
  paymentMethod?: string | null
  shipping: number
  discount: number
  totalAmount: number
  id_user_coupons?: string
  paymentId: string
}
