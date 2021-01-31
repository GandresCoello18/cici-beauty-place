import { combineReducers } from 'redux'
import * as app from './app'
import Products, { ProductAction, ProductsState } from './products'
import Cart, { CartAction, CartState } from './cart'
import User, { UserAction, UserState } from './user'
import Addrerss, { AddressAction, AddressState } from './address'

export interface RootState {
  app: app.AppState
  ProductReducer: ProductsState
  CartReducer: CartState
  UserReducer: UserState
  AddressReducer: AddressState
}

export type AllAction = app.AppAction
export type ProductsAction = ProductAction
export type CartsAction = CartAction
export type UsersAction = UserAction
export type AddresAction = AddressAction

export const rootReducer = combineReducers({
  app: app.reducer,
  ProductReducer: Products,
  CartReducer: Cart,
  UserReducer: User,
  AddressReducer: Addrerss,
})
