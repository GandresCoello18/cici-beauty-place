/* eslint-disable @typescript-eslint/class-name-casing */
import { Product } from '../../interfaces/products'

const SET_PRODUCTS = 'SET_PRODUCTS'

export const setProducts = (products: Product[]) => ({
  type: SET_PRODUCTS as typeof SET_PRODUCTS,
  payload: products,
})

export type ProductAction = ReturnType<typeof setProducts>

interface initialStateINT {
  Products: Product[]
}

export const initialState: initialStateINT = {
  Products: [],
}

export type ProductsState = typeof initialState

export default function reducer(state = initialState, action: ProductAction) {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, Products: action.payload }
    default:
      return state
  }
}
