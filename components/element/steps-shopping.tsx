/* eslint-disable unicorn/consistent-function-scoping */
import React from 'react'
import StepProgressBar from 'react-step-progress'
import Payment from '../payment'

interface Props {
  startingStep: number
}

const StepsShopping = ({ startingStep }: Props) => {
  const validarPagos = () => true
  const validarEnvio = () => true
  const onFormSubmit = () => {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

  return (
    <StepProgressBar
      startingStep={startingStep}
      previousBtnName="Anterior"
      nextBtnName="Siguiente"
      primaryBtnClass="primaryBtnStep"
      secondaryBtnClass="secondaryBtnStep"
      onSubmit={onFormSubmit}
      steps={[
        {
          label: 'Carrito',
          subtitle: '10%',
          name: 'Carrito',
          content: <div className="p-2">Carrito</div>,
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
          content: <div className="p-2">Envio</div>,
          validator: validarEnvio,
        },
      ]}
    />
  )
}

export default StepsShopping
