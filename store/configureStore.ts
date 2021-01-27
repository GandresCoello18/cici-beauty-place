/* eslint-disable no-console */
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
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

export const configureStore = (initialState: RootState) => {
  const store = createStore(rootReducer, initialState, devToolsEnhancer({}))

  GetProducts()
    .then((products) => {
      store.dispatch(setProducts(products.data.products))
    })
    .catch((error) => console.log(error.message))

  GetProductsOffers({ limit: 6 })
    .then((products) => {
      store.dispatch(setProductsOffers(products.data.products))
    })
    .catch((error) => console.log(error.message))

  GetProductsBestRated({ limit: 6 })
    .then((products) => {
      store.dispatch(setProductsBestRated(products.data.products))
    })
    .catch((error) => console.log(error.message))

  return store
}
