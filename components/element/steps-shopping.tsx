/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable unicorn/consistent-function-scoping */
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { useSelector } from 'react-redux'
import StepProgressBar from 'react-step-progress'
import { RootState } from '../../reducers'
import CartContainer from '../cart'
import Payment from '../payment'
import AdressPayment from '../payment/addres-payment'

interface Props {
  startingStep: number
  setItemStep: Dispatch<SetStateAction<number>>
  setFinishShopping: Dispatch<SetStateAction<boolean>>
}

const StepsShopping = ({
  startingStep,
  setItemStep,
  setFinishShopping,
}: Props) => {
  const { Cart } = useSelector((state: RootState) => state.CartReducer)

  const validarPagos = () => {
    setItemStep(2)
    return true
  }
  const validarEnvio = () => {
    return true
  }
  const onFormSubmit = () => {
    setFinishShopping(true)
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

  useEffect(() => {
    if (Cart.length === 0) {
      const btnNext: any = document.querySelector('.primaryBtnStep')
      console.log((btnNext.style.display = 'none'))
    }
  }, [Cart])

  return (
    <>
      <StepProgressBar
        startingStep={startingStep}
        previousBtnName="Anterior"
        nextBtnName="Siguiente"
        submitBtnName="Finalizar"
        progressClass="wrapperStep"
        buttonWrapperClass="buttonWrapperStep"
        primaryBtnClass="primaryBtnStep"
        secondaryBtnClass="secondaryBtnStep"
        onSubmit={onFormSubmit}
        steps={[
          {
            label: 'Carrito',
            subtitle: '10%',
            name: 'Carrito',
            content: (
              <div className="mt-5">
                <CartContainer ProductsCart={Cart} />
              </div>
            ),
          },
          {
            label: 'Pagos',
            subtitle: '50%',
            name: 'Pagos',
            content: (
              <div className="mt-5">
                <Payment />
              </div>
            ),
            validator: validarPagos,
          },
          {
            label: 'Envio',
            subtitle: '100%',
            name: 'Envio',
            content: (
              <div className="mt-5">
                <AdressPayment />
              </div>
            ),
            validator: validarEnvio,
          },
        ]}
      />
    </>
  )
}

export default StepsShopping
