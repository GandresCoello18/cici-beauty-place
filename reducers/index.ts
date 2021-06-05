import { combineReducers } from 'redux'
import Products, { ProductAction, ProductsState } from './products'
import Cart, { CartAction, CartState } from './cart'
import User, { UserAction, UserState } from './user'
import Addrerss, { AddressAction, AddressState } from './address'
import Coupon, { CouponState, CoupontAction } from './coupon'
import Combo, { ComboState, CombotAction } from './combo'

export interface RootState {
  ProductReducer: ProductsState
  CartReducer: CartState
  UserReducer: UserState
  AddressReducer: AddressState
  CouponReducer: CouponState
  ComboReducer: ComboState
}

export type ProductsAction = ProductAction
export type CartsAction = CartAction
export type UsersAction = UserAction
export type AddresAction = AddressAction
export type CouponAction = CoupontAction
export type ComboAction = CombotAction

export const rootReducer = combineReducers({
  ProductReducer: Products,
  CartReducer: Cart,
  UserReducer: User,
  AddressReducer: Addrerss,
  CouponReducer: Coupon,
  ComboReducer: Combo,
})
