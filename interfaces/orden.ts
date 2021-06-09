/* eslint-disable @typescript-eslint/class-name-casing */
export interface newOrden {
  paymentMethod?: string | null
  shipping: number
  discount: number
  subTotal: number
  totalAmount: number
  id_user_coupons?: string
  paymentId: string
  idCombo?: string
}

export interface OrdenProduct {
  idOrder: string
  created_at: string | Date
  status: string
  paymentMethod: string
  subTotal: number
  paymentId: string
  discount: number
  shipping: number
  totalAmount: number
  numberOfOrder: number
  product: productOrden[]
}

export interface productOrden {
  source: string
  title: string
  colour?: string
  idProducts: string
  price: number
  quantity: number
}
