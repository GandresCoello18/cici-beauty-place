import { combineReducers } from 'redux'
import * as app from './app'
import Products, { ProductAction, ProductsState } from './products'

export interface RootState {
  app: app.AppState
  ProductReducer: ProductsState
}

export type AllAction = app.AppAction
export type ProductsAction = ProductAction

export const rootReducer = combineReducers({
  app: app.reducer,
  ProductReducer: Products,
})
