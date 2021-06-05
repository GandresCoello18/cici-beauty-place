/* eslint-disable @typescript-eslint/class-name-casing */
import { ProductsCombo } from '../interfaces/combo'

const SET_COMBO = 'SET_COMBO'

export const setCombo = (collage: ProductsCombo[]) => ({
  type: SET_COMBO as typeof SET_COMBO,
  payload: collage,
})

export type CombotAction = ReturnType<typeof setCombo>

interface initialStateINT {
  Combo: ProductsCombo[]
}

export const initialState: initialStateINT = {
  Combo: [],
}

export type ComboState = typeof initialState

export default function reducer(state = initialState, action: CombotAction) {
  switch (action.type) {
    case SET_COMBO:
      return { ...state, Combo: action.payload }
    default:
      return state
  }
}
