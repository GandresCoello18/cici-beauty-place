/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/class-name-casing */
import { Users } from '../interfaces/users'

const SET_USER = 'SET_USER'

export const setUser = (user: Users) => ({
  type: SET_USER as typeof SET_USER,
  payload: user,
})

export type UserAction = ReturnType<typeof setUser>

interface initialStateINT {
  User: Users
}

export const initialState: initialStateINT = {
  User: {
    idUser: '',
    isAdmin: false,
    userName: '',
    email: '',
    created_at: '',
    avatar: '',
    provider: '',
  },
}

export type UserState = typeof initialState

export default function reducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case SET_USER:
      return { ...state, User: action.payload }
    default:
      return state
  }
}
