/* eslint-disable @typescript-eslint/class-name-casing */
import { Cart } from '../interfaces/products'

const SET_CART = 'SET_CART'

export const setCart = (products: Cart[]) => ({
  type: SET_CART as typeof SET_CART,
  payload: products,
})

export type CartAction = ReturnType<typeof setCart>

interface initialStateINT {
  Cart: Cart[]
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
