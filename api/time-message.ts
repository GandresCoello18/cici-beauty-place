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
