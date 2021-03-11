/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/class-name-casing */
import { MyCouponsUser } from '../interfaces/coupons'

const SET_COUPONS = 'SET_COUPONS'

export const SetCoupon = (coupon: MyCouponsUser | undefined) => ({
  type: SET_COUPONS as typeof SET_COUPONS,
  payload: coupon,
})

export type CoupontAction = ReturnType<typeof SetCoupon>

interface initialStateINT {
  Coupon: MyCouponsUser | undefined
}

export const initialState: initialStateINT = {
  Coupon: {
    id_user_coupons: '',
    expiration_date: '',
    created_at: '',
    idCoupon: '',
    type: '',
    descripcion: '',
    status: '',
    userName: '',
    avatar: '',
  },
}

export type CouponState = typeof initialState

export default function reducer(state = initialState, action: CoupontAction) {
  switch (action.type) {
    case SET_COUPONS:
      return { ...state, Coupon: action.payload }
    default:
      return state
  }
}
