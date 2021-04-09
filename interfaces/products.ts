export interface Product {
  idProducts: string
  title: string
  source: string
  price: number
  status: string
  description: string
  available: number
  sold: number
  stars: number
  brand: string
  size: string
  model: string
  related_sources: SourcesProduct[]
  created_at: Date | string
  discount: number
  starsPeople: number
  colors?: string
}

export interface Colors {
  hex: string
  disabled: boolean
}

export interface SourcesProduct {
  idSourceProduct: string
  source: string
  kind: 'IMAGEN' | 'VIDEO'
  idProduct: string
}

export interface Cart {
  idProducts: string
  title: string
  source: string
  price: number
  status: string
  available: number
  created_at: Date | string
  discount: number
  quantity: number
}

export interface ResumenCart {
  subTotal: number
  discount: number
  envio: number
  total: number
  text?: string
}

export interface ParamsFilter {
  min?: number
  max?: number
  isPromo?: boolean
  starNumber?: boolean
  order?: 'Asc' | 'Desc' | undefined
  orderPrice?: boolean
  orderStar?: boolean
}

export interface ProductReview {
  idProductReviews: string
  commentary: string
  stars: number
  created_at: Date | string
  userName: string
  avatar: string
}
