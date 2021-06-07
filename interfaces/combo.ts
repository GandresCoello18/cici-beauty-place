import { Product } from './products'

export interface Combo {
  idCombo: string
  name: string
  price: number
  available: number
  status: string
  discount: number
  active: boolean | number
  sold: number
  created_at?: Date | string
  isNew: boolean | number
}

export interface ProductsCombo extends Combo {
  photos: { source: string }[]
  products: Product[]
}
