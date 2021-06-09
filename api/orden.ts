/* eslint-disable @typescript-eslint/camelcase */
import { api } from '.'
import { newOrden } from '../interfaces/orden'

export const NewOrden = async (options: {
  token: string | undefined
  orden: newOrden
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/orden',
    data: {
      ...options.orden,
    },
  })
  return response
}

export const getMyOrden = async (options: {
  token: string | undefined
  status: string
  page: number
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: `/orden/status/${options.status}?page=${options.page}`,
  })
  return response
}

export const getDetailsOrden = async (options: {
  token: string | undefined
  idOrden: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: `/orden/details/${options.idOrden}`,
  })
  return response
}
