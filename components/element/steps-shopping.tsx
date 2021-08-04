/* eslint-disable no-unused-expressions */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-fallthrough */
/* eslint-disable unicorn/explicit-length-check */
/* eslint-disable react/button-has-type */
import { AxiosError } from 'axios'
import { NextSeo } from 'next-seo'
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Step, Stepper } from 'react-form-stepper'
import { FaShoppingCart } from 'react-icons/fa'
import { MdLocalShipping, MdMonetizationOn } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toast'
import { GetRewardUserCoupons } from '../../api/coupons'
import { TokenContext } from '../../context/contextToken'
import { HandleError } from '../../helpers/handleError'
import { Users } from '../../interfaces/users'
import { RootState } from '../../reducers'
import { setCart } from '../../reducers/cart'
import CartContainer from '../cart'
import { UsersRewar } from '../invitacion/userRewar'
import Payment from '../payment'
import AdressPayment from '../payment/addres-payment'
import ModalElement from './modal'

interface StepItem {
  complete: boolean
}

export interface StepperItem {
  item: number
  carrito: StepItem
  pagos: StepItem
}

interface Props {
  setFinishShopping: Dispatch<SetStateAction<boolean>>
}

const StepsShopping = ({ setFinishShopping }: Props) => {
  const dispatch = useDispatch()
  const { token } = useContext(TokenContext)
  const { Cart } = useSelector((state: RootState) => state.CartReducer)
  const { Addresses } = useSelector((state: RootState) => state.AddressReducer)
  const [idCoupon, setIdCoupon] = useState<string>('')
  const [Modal, setModal] = useState<boolean>(false)
  const [IsPaid, setIsPaid] = useState<boolean>(false)
  const [RewarUser, setRewarUser] = useState<Users[]>([])
  const [itemStep, setItemStep] = useState<StepperItem>({
    item: 0,
    carrito: {
      complete: false,
    },
    pagos: {
      complete: false,
    },
  })

  const next = () => {
    switch (itemStep.item) {
      case 0:
        if (Cart.length) {
          setItemStep({
            item: itemStep.item + 1,
            carrito: {
              complete: true,
            },
            pagos: {
              complete: false,
            },
          })
          break
        }
      case 2:
        if (Addresses.length === 0) {
          toast.warn(
            'No tienes direcciones registradas, por favor agrega donde quieres recibir tus productos'
          )
        } else {
          setFinishShopping(true)
          dispatch(setCart([]))
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    const FetchCouponPending = async () => {
      try {
        const { CouponsRewarAssing } = await (
          await GetRewardUserCoupons({ token })
        ).data

        setRewarUser(CouponsRewarAssing)

        if (CouponsRewarAssing.length) {
          setModal(true)
        }
      } catch (error) {
        toast.error(HandleError(error as AxiosError))
      }
    }

    token && IsPaid && FetchCouponPending()
  }, [token, IsPaid])

  return (
    <>
      {itemStep.item === 0 && (
        <NextSeo
          title="Carrito de compras | Cici beauty place"
          description="Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razon quieres mas detalles escribenos en contacto o en nuestras redes."
        />
      )}

      {itemStep.item === 1 && (
        <NextSeo
          title="Pagos de compras | Cici beauty place"
          description="Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razon quieres mas detalles escribenos en contacto o en nuestras redes."
        />
      )}

      {itemStep.item === 2 && (
        <NextSeo
          title="Envio de compras | Cici beauty place"
          description="Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razon quieres mas detalles escribenos en contacto o en nuestras redes."
        />
      )}

      <Stepper
        className="font-arvo"
        activeStep={itemStep.item}
        connectorStateColors
        styleConfig={{
          activeBgColor: '#f097ac',
          activeTextColor: 'fff',
          completedBgColor: '#232f3e',
          completedTextColor: 'fff',
          inactiveBgColor: '#e0e0e0',
          inactiveTextColor: 'fff',
          size: '2em',
          circleFontSize: '1em',
          labelFontSize: '0.875rem',
          borderRadius: '50%',
          fontWeight: 500,
        }}
        connectorStyleConfig={{
          disabledColor: '#bdbdbd',
          activeColor: '#f097ac',
          completedColor: '#232f3e',
          size: 1,
          stepSize: '2em',
          style: 'solid',
        }}
      >
        <Step
          label="Carrito"
          completed={itemStep.carrito.complete}
          className="step"
        >
          <FaShoppingCart size={19} color="#fff" />
        </Step>
        <Step
          label="Pagos"
          completed={itemStep.pagos.complete}
          className="step"
        >
          <MdMonetizationOn size={19} color="#fff" />
        </Step>
        <Step label="Envio" className="step">
          <MdLocalShipping size={19} color="#fff" />
        </Step>
      </Stepper>

      <div className="mt-3">
        {itemStep.item === 0 && <CartContainer setIdCoupon={setIdCoupon} />}

        {itemStep.item === 1 && (
          <Payment
            setItemStep={setItemStep}
            idCoupon={idCoupon}
            setIsPaid={setIsPaid}
          />
        )}

        {itemStep.item === 2 && <AdressPayment isModal={false} />}

        <ModalElement
          title="Asignar cupón"
          visible={Modal}
          setVisible={setModal}
        >
          <p>
            Por cada compra mayor o igual <strong>$40</strong> recibira un cupón
            a la persona que te invito.
          </p>

          <UsersRewar RewarUser={RewarUser} setModal={setModal} />
        </ModalElement>

        <br />

        {(Cart.length && itemStep.item === 0) || itemStep.item === 2 ? (
          <button
            className="btn bg-cici text-dark float-right mb-2"
            onClick={next}
          >
            Siguiente
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default StepsShopping
