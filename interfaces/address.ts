export interface Addresses {
  idAddresses: string
  title: string
  phone: number
  city: string
  postalCode: number
  address: string
  idUser: string | null
  created_at: Date | string
  selected: boolean
  province: string
}

export interface CreateAddresses {
  title: string
  phone: number
  city: string
  postalCode: number
  address: string
  idUser: string | null | undefined
  province: string
}
