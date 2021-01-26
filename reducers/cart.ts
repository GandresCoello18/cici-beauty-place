/* eslint-disable @typescript-eslint/class-name-casing */
import { Product } from '../interfaces/products'

const SET_CART = 'SET_CART'

export const setCart = (products: Product[]) => ({
  type: SET_CART as typeof SET_CART,
  payload: products,
})

export type CartAction = ReturnType<typeof setCart>

interface initialStateINT {
  Cart: Product[]
}

export const initialState: initialStateINT = {
  Cart: [],
}

export type CartState = typeof initialState

export default function reducer(state = initialState, action: CartAction) {
  switch (action.type) {
    case SET_CART:
      return { ...state, Cart: action.payload }
    default:
      return state
  }
}
