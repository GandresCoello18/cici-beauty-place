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
  SetProducts,
  setProductsBestRated,
  setProductsOffers,
} from '../reducers/products'
import { RootState, rootReducer } from '../reducers'
import { getProductCart } from '../api/cart'
import { setCart } from '../reducers/cart'
import { GetMeUser } from '../api/users'
import { setUser } from '../reducers/user'
import { GetMyAddress } from '../api/addresses'
import { setAddress } from '../reducers/address'
import { GetCombos } from '../api/combos'
import { setCombo } from '../reducers/combo'

export const configureStore = (initialState: RootState) => {
  const store = createStore(
    rootReducer,
    initialState,
    process.env.NODE_ENV === 'development' ? devToolsEnhancer({}) : undefined
  )

  GetProducts({})
    .then((response) => {
      store.dispatch(SetProducts(response.data.products))
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

  GetCombos()
    .then((response) => {
      store.dispatch(setCombo(response.data.combos))
    })
    .catch((error) => console.log(error.message))

  const token: string | undefined = Cookies.get('access-token')

  if (token) {
    getProductCart({ token })
      .then((response) => {
        store.dispatch(setCart(response.data.products))
      })
      .catch((error) => console.log(error.message))

    GetMeUser({ token })
      .then((response) => {
        store.dispatch(setUser(response.data.me))
      })
      .catch((error) => console.log(error.message))

    GetMyAddress({ token })
      .then((response) => {
        store.dispatch(setAddress(response.data.address))
      })
      .catch((error) => console.log(error.message))
  }

  return store
}
