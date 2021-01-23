import { api } from '.'
import { UserRegister } from '../interfaces/users'

export const RegisterUser = async (options: {
  token: string | undefined
  user: UserRegister
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/users',
    data: {
      userName: options.user.userName,
      email: options.user.email,
      password: options.user.password,
      avatar: options.user.avatar,
      provider: options.user.provider,
    },
  })
  return response
}

export const LoginUser = async (options: {
  token: string | undefined
  user: {
    email: string
    password: string | undefined
    provider: string
    userName: string | undefined
    avatar: string | undefined
  }
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/users/login',
    data: {
      email: options.user.email,
      password: options.user.password,
      provider: options.user.provider,
      userName: options.user.userName,
      avatar: options.user.avatar,
    },
  })
  return response
}
