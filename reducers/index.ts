import { combineReducers } from 'redux'
import * as app from './app'
import Products, { ProductAction, ProductsState } from './products'
import Cart, { CartAction, CartState } from './cart'

export interface RootState {
  app: app.AppState
  ProductReducer: ProductsState
  CartReducer: CartState
}

export type AllAction = app.AppAction
export type ProductsAction = ProductAction
export type CartsAction = CartAction

export const rootReducer = combineReducers({
  app: app.reducer,
  ProductReducer: Products,
  CartReducer: Cart,
})
