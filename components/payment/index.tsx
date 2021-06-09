/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-console */
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { OnCaptureData } from 'react-paypal-button'
import { toast } from 'react-toast'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { ResumenPaymen } from '../../hooks/useResumenPayment'
import CartResumne from '../cart/cart-resumen'
import { TokenContext } from '../../context/contextToken'
import { NewOrden } from '../../api/orden'
import { newOrden } from '../../interfaces/orden'
import SpinnerLoader from '../element/spinner-cici'
import { setCart } from '../../reducers/cart'
import { StepperItem } from '../element/steps-shopping'
import { AccionPayment } from './accion-payment'

interface Props {
  setItemStep: Dispatch<SetStateAction<StepperItem>>
  setIsPaid: Dispatch<SetStateAction<boolean>>
  idCoupon: string
}

const Payment = ({ setItemStep, setIsPaid, idCoupon }: Props) => {
  const resumen = ResumenPaymen()

  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [PaymentIdPaypal, setPaymentIdPaypal] = useState<string>('')
  const { token } = useContext(TokenContext)

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
      }

      await NewOrden({ token, orden })
      setLoading(false)

      setIsPaid(paymentMethod === 'Paypal' && orden.totalAmount >= 40)

      toast.success('Su orden fue registrada con éxito')
      dispatch(setCart([]))

      setItemStep({
        item: 2,
        carrito: {
          complete: true,
        },
        pagos: {
          complete: true,
        },
      })
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-8">
          {loading ? (
            <SpinnerLoader />
          ) : (
            <AccionPayment
              amount={resumen.total}
              PaymentPaypal={PaymentPaypal}
              PaymentBank={PaymentBank}
            />
          )}
        </div>
        <div className="col-12 col-lg-4">
          <CartResumne
            subTotal={resumen.subTotal}
            envio={resumen.envio}
            text={resumen.text || ''}
            total={resumen.total}
            discount={resumen.discount}
          />
        </div>
      </div>
    </>
  )
}

export default Payment
