/* eslint-disable no-console */
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import Cookies from 'js-cookie'
import {
  GetProducts,
  GetProductsBestRated,
  GetProductsOffers,
} from '../api/products'
import {
  setProducts,
  setProductsBestRated,
  setProductsOffers,
} from '../reducers/products'
import { RootState, rootReducer } from '../reducers'
import { getProductCart } from '../api/cart'
import { setCart } from '../reducers/cart'

export const configureStore = (initialState: RootState) => {
  const store = createStore(rootReducer, initialState, devToolsEnhancer({}))

  GetProducts()
    .then((response) => {
      store.dispatch(setProducts(response.data.products))
    })
    .catch((error) => console.log(error.message))

  GetProductsOffers({ limit: 6 })
    .then((response) => {
      store.dispatch(setProductsOffers(response.data.products))
    })
    .catch((error) => console.log(error.message))

  GetProductsBestRated({ limit: 8 })
    .then((response) => {
      store.dispatch(setProductsBestRated(response.data.products))
    })
    .catch((error) => console.log(error.message))

  if (Cookies.get('access-token')) {
    getProductCart({ token: Cookies.get('access-token') })
      .then((response) => {
        store.dispatch(setCart(response.data.products))
      })
      .catch((error) => console.log(error.message))
  }

  return store
}
