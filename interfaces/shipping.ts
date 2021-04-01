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
