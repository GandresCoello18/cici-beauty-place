/* eslint-disable @typescript-eslint/class-name-casing */
import { Product } from '../interfaces/products'

const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_PRODUCTS_OFFERS = 'SET_PRODUCTS_OFFERS'
const SET_PRODUCTS_BEST_RATED = 'SET_PRODUCTS_BEST_RATED'

export const setProducts = (products: Product[]) => ({
  type: SET_PRODUCTS as typeof SET_PRODUCTS,
  payload: products,
})

export const setProductsOffers = (products: Product[]) => ({
  type: SET_PRODUCTS_OFFERS as typeof SET_PRODUCTS_OFFERS,
  payload: products,
})

export const setProductsBestRated = (products: Product[]) => ({
  type: SET_PRODUCTS_BEST_RATED as typeof SET_PRODUCTS_BEST_RATED,
  payload: products,
})

export type ProductAction = ReturnType<
  typeof setProducts | typeof setProductsOffers | typeof setProductsBestRated
>

interface initialStateINT {
  Products: Product[]
  ProductsOffers: Product[]
  ProductsBestRated: Product[]
}

export const initialState: initialStateINT = {
  Products: [],
  ProductsOffers: [],
  ProductsBestRated: [],
}

export type ProductsState = typeof initialState

export default function reducer(state = initialState, action: ProductAction) {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, Products: action.payload }
    case SET_PRODUCTS_OFFERS:
      return { ...state, ProductsOffers: action.payload }
    case SET_PRODUCTS_BEST_RATED:
      return { ...state, ProductsBestRated: action.payload }
    default:
      return state
  }
}
