import * as axios from 'axios'

export const DEFAULT_AVATAR = 'avatar-default.svg'
const apiDev = 'http://localhost:9000'
// const apiProd = 'https://';

export const BASE_API = apiDev

export const api: axios.AxiosInstance = axios.default.create({
  baseURL: `${BASE_API}/api`,
})
/*
api.defaults.headers.post['Content-Type'] = 'application/json'
api.defaults.headers.delete['Content-Type'] = 'application/json'
api.defaults.headers.put['Content-Type'] = 'application/json'
api.defaults.withCredentials = true */
