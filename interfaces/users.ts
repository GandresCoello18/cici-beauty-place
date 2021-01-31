export interface Users {
  idUser: string
  userName: string
  email: string
  created_at: Date | string
  isAdmin: boolean
  avatar: string
  provider: string
}

export interface UserRegister {
  userName: string
  email: string
  password: string
  avatar: string | undefined
  provider: string | undefined
}
