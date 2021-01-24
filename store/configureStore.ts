import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { GetProducts } from '../api/products'
import { setProducts } from '../reducers/products'
import { RootState, rootReducer } from '../reducers'

export const configureStore = (initialState: RootState) => {
  const store = createStore(rootReducer, initialState, devToolsEnhancer({}))

  GetProducts()
    .then((products) => {
      store.dispatch(setProducts(products.data.products))
    })
    .catch((error) => console.log(error.message))

  return store
}
