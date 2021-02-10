/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers'

interface Resumen {
  subTotal: number
  discount: number
  envio: number
  total: number
}

export const ResumenPaymen = () => {
  const [resumen, setResumen] = useState<Resumen>({
    subTotal: 0,
    discount: 0,
    envio: 0,
    total: 0,
  })

  const { Cart } = useSelector((state: RootState) => state.CartReducer)

  useEffect(() => {
    const sub: number = Cart.reduce((product, sumProduct) => {
      if (sumProduct.discount) {
        return (
          product +
          CalculateTotalForProduct(sumProduct.price, sumProduct.discount)
        )
      }
      return product + sumProduct.price
    }, 0)

    const envio = sub > 40 ? 0 : 4

    setResumen({
      subTotal: sub,
      envio,
      discount: 0,
      total: CalculateCartTotal(sub, envio, 0),
    })
  }, [Cart])

  const CalculateCartTotal = (
    subTotal: number,
    envio: number,
    discount: number
  ) => {
    let total = 0

    if (subTotal) {
      total = subTotal + envio
    }

    if (discount) {
      const porcent: number = (total * discount) / 100
      return Number((total - porcent).toFixed(2))
    }

    return total
  }

  const CalculateTotalForProduct = (
    precio: number,
    discount: number
  ): number => {
    const porcent: number = (precio * discount) / 100
    return Number((precio - porcent).toFixed(2))
  }

  return resumen
}
