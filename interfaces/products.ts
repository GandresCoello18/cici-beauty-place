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
