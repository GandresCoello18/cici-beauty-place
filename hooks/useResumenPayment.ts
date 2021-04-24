/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { trunc } from '../helpers/trunc'
import { ResumenCart } from '../interfaces/products'
import { RootState } from '../reducers'

export const ResumenPaymen = () => {
  const { Cart } = useSelector((state: RootState) => state.CartReducer)
  const { Coupon } = useSelector((state: RootState) => state.CouponReducer)

  const CalculateCartTotal = useCallback(
    (subTotal: number, envio: number, discount: number) => {
      let total = 0

      if (subTotal) {
        total = subTotal + envio
      }

      if (discount) {
        const porcent: number = (total * discount) / 100
        return Number((total - porcent).toFixed(2))
      }

      return total
    },
    []
  )

  const CalculateTotalForProduct = useCallback(
    (precio: number, discount: number) => {
      const porcent: number = (precio * discount) / 100
      return Number((precio - porcent).toFixed(2))
    },
    []
  )

  let sub: number = Cart.reduce((product, sumProduct) => {
    if (sumProduct.discount) {
      return (
        (product +
          CalculateTotalForProduct(sumProduct.price, sumProduct.discount)) *
        sumProduct.quantity
      )
    }
    return (product + sumProduct.price) * sumProduct.quantity
  }, 0)

  sub = trunc(sub, 2)

  let envio = sub > 40 ? 0 : 4

  if (!sub) {
    envio = 0
  }

  const data: ResumenCart = {
    subTotal: sub,
    envio,
    discount: 0,
    total: CalculateCartTotal(sub, envio, 0),
    text: '',
  }

  if (Coupon) {
    switch (Coupon.type) {
      case 'Envio gratis':
        data.text = 'Gratis'
        break
      case '15% Descuento':
        data.discount = 15
        data.total = CalculateCartTotal(sub, envio, 15)
        break
      default:
        break
    }
  }

  return data
}
