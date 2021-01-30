/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'

const CartResumne = () => {
  const [subTotal, setSubTotal] = useState<number>(0)
  const [discount, setDiscount] = useState<number>(0)
  const [envio, setEnvio] = useState<number>(0)
  const { Cart } = useSelector((state: RootState) => state.CartReducer)

  const CalculateTotalForProduct = (
    precio: number,
    discount: number
  ): number => {
    const porcent: number = (precio * discount) / 100
    return Number((precio - porcent).toFixed(2))
  }

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

    setSubTotal(sub)
    setEnvio(sub > 40 ? 0 : 4)
    setDiscount(0)
  }, [Cart, CalculateTotalForProduct])

  const CalculateCartTotal = () => {
    let total = 0

    if (subTotal) {
      total = subTotal + envio
    }

    if (discount) {
      const porcent: number = (total * discount) / 100
      return (total - porcent).toFixed(2)
    }

    return total
  }

  return (
    <>
      <div className="p-3">
        <div className="p-1 border-bottom">
          <h3>Resumen</h3>
        </div>
        <div className="p-1 border-bottom">
          <span>Sub total</span>
          <span className="float-right">${subTotal}</span>
        </div>
        <div className="p-1 border-bottom">
          <span>Descuento</span>
          <span className="float-right">-{discount}%</span>
        </div>
        <div className="p-1 border-bottom">
          <span>Envio</span>
          <span className="float-right">${subTotal > 0 ? envio : 0}</span>
        </div>
        <div className="p-1 bg-cici">
          <span>Monto a pagar</span>
          <span className="float-right">${CalculateCartTotal()}</span>
        </div>
      </div>
    </>
  )
}

export default CartResumne
