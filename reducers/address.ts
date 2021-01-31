/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/class-name-casing */
import { Addresses } from '../interfaces/address'

const SET_ADDRESS = 'SET_ADDRESS'

export const setAddress = (address: Addresses[]) => ({
  type: SET_ADDRESS as typeof SET_ADDRESS,
  payload: address,
})

export type AddressAction = ReturnType<typeof setAddress>

interface initialStateINT {
  Addresses: Addresses[]
}

export const initialState: initialStateINT = {
  Addresses: [],
}

export type AddressState = typeof initialState

export default function reducer(state = initialState, action: AddressAction) {
  switch (action.type) {
    case SET_ADDRESS:
      return { ...state, Addresses: action.payload }
    default:
      return state
  }
}
