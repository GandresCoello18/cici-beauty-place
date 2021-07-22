import { api } from '.'

export const newTimeMessage = async (options: {
  token: string | undefined
  destination: string
  subject: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/timeMessage',
    data: {
      destination: options.destination,
      subject: options.subject,
    },
  })
  return response
}

export const resendTimeMessage = async (options: {
  token?: string
  idTimeMessage: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/timeMessage/resend',
    data: {
      idTimeMessage: options.idTimeMessage,
    },
  })
  return response
}

export const getTimeMessage = async (options: {
  token: string | undefined
  idMessage: string
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'GET',
    url: `/timeMessage/${options.idMessage}`,
  })
  return response
}
