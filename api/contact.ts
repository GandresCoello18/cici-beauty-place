import { api } from '.'
import { Contact } from '../interfaces/contact'

export const CreateContact = async (options: { contact: Contact }) => {
  const response = await api({
    method: 'POST',
    url: '/messages',
    data: {
      name: options.contact.name,
      email: options.contact.email,
      message: options.contact.message,
      subject: options.contact.subject,
    },
  })
  return response
}
