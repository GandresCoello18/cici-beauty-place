import { api } from '.'
import { CreateAddresses } from '../interfaces/address'

export const newAdrees = async (options: { address: CreateAddresses }) => {
  const response = await api({
    method: 'POST',
    url: '/addresses',
    data: options.address,
  })
  return response
}

export const GetMyAddress = async (options: { token: string | undefined }) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: '/addresses',
  })
  return response
}

export const DeleteMyAddress = async (options: {
  token: string | undefined
  title: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'DELETE',
    url: `/addresses/${options.title}`,
  })
  return response
}

export const SelectedMyAddress = async (options: {
  token: string | undefined
  title: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'PUT',
    url: `/addresses/selected/${options.title}`,
  })
  return response
}
