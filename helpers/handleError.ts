import { AxiosError } from 'axios'

export const HandleError = (error: AxiosError) => {
  if (error.request.response) {
    return JSON.parse(error.request.response).status
  }
  return error.message
}
