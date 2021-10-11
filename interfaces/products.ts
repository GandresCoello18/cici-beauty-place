export interface Product {
  idProducts: string
  title: string
  source: string
  price: number
  status: string
  description: string
  available: number
  sold: number
  isNew?: number
  stars: number
  brand: string
  size: string
  model: string
  related_sources: SourcesProduct[]
  categorys?: ResProductCategory[]
  created_at: Date | string
  updated_at: Date | string
  discount: number
  starsPeople: number
  colors?: string
  offer_expires_date: string | Date
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
  isDescription: number
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
  colour?: string | undefined
}

export interface ResumenCart {
  subTotal: number
  discount: number
  envio: number
  total: number
  text?: string
}

export interface ParamsFilter {
  min: number
  max: number
  isPromo?: boolean
  starNumber?: boolean
  order: 'Asc' | 'Desc' | undefined
  orderPrice: boolean
  orderStar: boolean
}

export interface ProductReview {
  idProductReviews: string
  commentary: string
  stars: number
  created_at: Date | string
  userName: string
  avatar: string
  source: string | null
}

export interface SeoProductReview {
  author: {
    type: string
    name: string
  }
  datePublished: string
  reviewBody: string
  name: string
  reviewRating: {
    bestRating: string
    ratingValue: string
  }
}

export interface BestSellersProduct {
  categoria: string
  products: Product[]
}

export interface ResProductCategory {
  id_product_category: number
  titleCategory: string
}
