import { Store } from 'redux'
import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import { AllAction, RootState } from '../reducers'
import { setTitle } from '../reducers/app'
import Layout from '../components/layout'
import StepsShopping from '../components/element/steps-shopping'

const Compra = () => {
  const [itemStep] = useState<number>(0)

  return (
    <>
      {itemStep === 0 && (
        <NextSeo
          title="Carrito de compras | Cici beauty place"
          description="Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razon quieres mas detalles escribenos en contacto o en nuestras redes."
        />
      )}

      {itemStep === 1 && (
        <NextSeo
          title="Pagos de compras | Cici beauty place"
          description="Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razon quieres mas detalles escribenos en contacto o en nuestras redes."
        />
      )}

      {itemStep === 2 && (
        <NextSeo
          title="Envio de compras | Cici beauty place"
          description="Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razon quieres mas detalles escribenos en contacto o en nuestras redes."
        />
      )}

      <Layout>
        <section className="container font-arvo p-md-5">
          <div className="row justify-between">
            <div className="col-12 bg-white">
              <StepsShopping startingStep={itemStep} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

Compra.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering Compra'))
}

export default Compra
