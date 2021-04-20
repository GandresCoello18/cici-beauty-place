export interface Coupons {
  idCoupon: string
  type: string
  descripcion: string
  status: string
  source: string
}

export interface MyCouponsUser {
  id_user_coupons: string
  expiration_date: string | Date
  created_at: string | Date
  idCoupon: string
  type: string
  descripcion: string
  status: string
  source: string
  userName: string
  avatar: string
}
