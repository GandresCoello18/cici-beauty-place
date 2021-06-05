export interface Combo {
  idCombo: string
  name: string
  price: number
  discount: number
  active: boolean | number
  sold: number
  created_at?: Date | string
  isNew: boolean | number
}

export interface ProductsCombo extends Combo {
  photos: { source: string }[]
}
