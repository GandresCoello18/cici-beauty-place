/* eslint-disable @typescript-eslint/class-name-casing */
export interface newOrden {
  paymentMethod?: string | null
  shipping: number
  discount: number
  totalAmount: number
  id_user_coupons?: string
  paymentId: string
}

export interface OrdenProduct {
  idOrder: string
  created_at: string | Date
  status: string
  paymentMethod: string
  paymentId: string
  product: productOrden[]
}

export interface productOrden {
  source: string
  title: string
}
