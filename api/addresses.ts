import { api } from '.'
import { CreateAddresses } from '../interfaces/address'

export const newAdrees = async (options: { address: CreateAddresses }) => {
  const response = await api({
    method: 'POST',
    url: '/addresses',
    data: {
      title: options.address.title,
      phone: options.address.phone,
      city: options.address.city,
      postalCode: options.address.postalCode,
      address: options.address.address,
      idUser: options.address.idUser,
    },
  })
  return response
}

export const getMyAddress = async (options: { token: string | undefined }) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: '/addresses',
  })
  return response
}
