/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/camelcase */
import { nanoid } from 'nanoid'
import React, { useContext, useEffect, useState } from 'react'
import { OnCaptureData } from 'react-paypal-button'
import { toast } from 'react-toast'
import { NewOrden } from '../../api/orden'
import { TokenContext } from '../../context/contextToken'
import { newOrden } from '../../interfaces/orden'
import { ResumenCart } from '../../interfaces/products'
import SpinnerLoader from '../element/spinner-cici'
import { AccionPayment } from '../payment/accion-payment'

interface Props {
  resumen: ResumenCart
  idCoupon: string
  idCombo: string
}

export const PaymentCombo = ({ resumen, idCoupon, idCombo }: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [PaymentIdPaypal, setPaymentIdPaypal] = useState<string>('')
  const { token } = useContext(TokenContext)

  const createOrden = async (paymentId: string, paymentMethod: string) => {
    setLoading(true)

    try {
      const orden: newOrden = {
        paymentMethod,
        subTotal: resumen.subTotal,
        shipping: resumen.envio,
        discount: resumen.discount,
        totalAmount: resumen.total,
        paymentId,
        id_user_coupons: idCoupon,
        idCombo,
      }

      await NewOrden({ token, orden })
      setLoading(false)

      toast.success('Su orden fue registrada con éxito')
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (!token) {
      window.location.href = '/login'
      toast.info('Necesitas iniciar sesión para procesar el pago')
    }

    try {
      const ValidatePaymentPaypal = async () => {
        await createOrden(PaymentIdPaypal, 'Paypal')
      }

      PaymentIdPaypal && ValidatePaymentPaypal()
    } catch (error) {
      toast.error(error.message)
    }
  }, [token, PaymentIdPaypal])

  const PaymentPaypal = async (response: OnCaptureData) => {
    const purchase_unit = response.purchase_units[0] as any
    const capture = purchase_unit.payments.captures[0]
    const paymentId = capture.id
    setPaymentIdPaypal(paymentId)
  }

  const PaymentBank = async () => {
    const paymentId = nanoid()
    await createOrden(paymentId, 'Bank')
  }

  return (
    <>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <AccionPayment
          amount={resumen.total}
          PaymentPaypal={PaymentPaypal}
          PaymentBank={PaymentBank}
        />
      )}
    </>
  )
}
