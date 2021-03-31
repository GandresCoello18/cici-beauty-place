import { api } from '.'

export const SendInvite = async (options: {
  name: string
  email: string
  token: string | undefined
}) => {
  api.defaults.headers['access-token'] = options.token
  const response = await api({
    method: 'POST',
    url: '/invite',
    data: {
      name: options.name,
      email: options.email,
    },
  })
  return response
}
