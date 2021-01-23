import * as axios from 'axios'

const apiDev = 'http://localhost:9000/api'
// const apiProd = 'https://';

export const BASE_API = apiDev

export const api: axios.AxiosInstance = axios.default.create({
  baseURL: BASE_API,
})
/*
api.defaults.headers.post['Content-Type'] = 'application/json'
api.defaults.headers.delete['Content-Type'] = 'application/json'
api.defaults.headers.put['Content-Type'] = 'application/json'
api.defaults.withCredentials = true */
