import { api } from '.'
import { UserRegister } from '../interfaces/users'

export const GetMeUser = async (options: { token: string | undefined }) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: '/users/me',
  })
  return response
}

export const GetInviteUser = async (options: { username: string }) => {
  const response = await api({
    method: 'GET',
    url: `/users/invite/${options.username}`,
  })
  return response
}

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

export const UpdateUser = async (options: {
  token: string | undefined
  email: string
  userName: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'PUT',
    url: '/users',
    data: {
      email: options.email,
      userName: options.userName,
    },
  })
  return response
}

export const UpdatePasswordUser = async (options: {
  token: string | undefined
  currentKey: string
  newKey: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'PUT',
    url: '/users/password',
    data: {
      newKey: options.newKey,
      currentKey: options.currentKey,
    },
  })
  return response
}
