/* eslint-disable no-fallthrough */
/* eslint-disable unicorn/explicit-length-check */
/* eslint-disable react/button-has-type */
import { NextSeo } from 'next-seo'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Step, Stepper } from 'react-form-stepper'
import { FaShoppingCart } from 'react-icons/fa'
import { MdLocalShipping, MdMonetizationOn } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import { setCart } from '../../reducers/cart'
import CartContainer from '../cart'
import Payment from '../payment'
import AdressPayment from '../payment/addres-payment'

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
  const { Cart } = useSelector((state: RootState) => state.CartReducer)
  const [idCoupon, setIdCoupon] = useState<string>('')
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
        setFinishShopping(true)
        dispatch(setCart([]))
        break
      default:
        break
    }
  }

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
          <Payment setItemStep={setItemStep} idCoupon={idCoupon} />
        )}
        {itemStep.item === 2 && <AdressPayment />}

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
