/* eslint-disable unicorn/consistent-function-scoping */
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useDispatch } from 'react-redux'
import StepProgressBar from 'react-step-progress'
import { setCart } from '../../reducers/cart'
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
  const [isOrden, setIsOrden] = useState<boolean>(false)
  const dispatch = useDispatch()
  const validarPagos = () => {
    setItemStep(2)
    return isOrden || false
  }
  const validarEnvio = () => {
    return true
  }
  const onFormSubmit = () => {
    dispatch(setCart([]))
    setFinishShopping(true)
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

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
                <CartContainer />
              </div>
            ),
          },
          {
            label: 'Pagos',
            subtitle: '50%',
            name: 'Pagos',
            content: (
              <div className="mt-5">
                <Payment setIsOrden={setIsOrden} />
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
