import { Store } from 'redux'
import React from 'react'
import { NextSeo } from 'next-seo'
import { AllAction, RootState } from '../../reducers'
import { setTitle } from '../../reducers/app'
import Layout from '../../components/layout'

const PaymentGuide = () => {
  return (
    <>
      <NextSeo
        title="Metodos de pagos | Guia de compras | Cici beauty place"
        description="Como o con que puedo pagar en la tienda de cici beauty place."
      />

      <Layout>
        <section className="container mt-md-4 mb-md-4 font-arvo">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 bg-white p-3">
              <h6 className="p-1">
                ¿Que metodos de pagos aceptan en{' '}
                <b className="text-cici">Cici beauty place</b>?
              </h6>
              <p className="p-1">
                Utilizamos plataformas de pagos como{' '}
                <a
                  href="https://www.paypal.com/ec/home"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  paypal
                </a>
                ,{' '}
                <a
                  href="https://stripe.com/es-us"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  strape
                </a>{' '}
                o tambien puedes hacer un deposito o trasferencia bancaria,
                luego envia tu recibo al nuestra linea telefonica o whatsapp
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

PaymentGuide.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering - PaymentGuide'))
}

export default PaymentGuide
