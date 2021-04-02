import { Cart } from './products'

export interface MisShipping {
  idShipping: string
  idOrder: string
  created_at: string | Date
  update_at: string | Date
  status: string
  guide: string
  method: string
  titleProduct: string
  sourcesProduct: string
  products: number
}

export interface DetailsOrdenAndShipping {
  idShipping: string
  enviado_el: string | Date
  entregado_el: string | Date
  status: string
  guide: string
  method: string
  idCart: string
  ordenado_el: string | Date
  shipping: number
  discount: number
  totalAmount: number
  products: Cart[]
}
