import { Store } from 'redux'
import React from 'react'
import { NextSeo } from 'next-seo'
import { AllAction, RootState } from '../../reducers'
import { setTitle } from '../../reducers/app'
import Layout from '../../components/layout'

const ShippingGuide = () => {
  return (
    <>
      <NextSeo
        title="Metodos de envio | Guia de compras | Cici beauty place"
        description="Como son los metodo de envio para mis pedidos."
      />

      <Layout>
        <section className="container mt-md-4 mb-md-4 font-arvo">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 bg-white p-3">
              <h6 className="p-1">
                ¿Que metodos de envio admiten en{' '}
                <b className="text-cici">Cici beauty place</b>?
              </h6>
              <p className="p-1">
                Hacemos envios a todo el Ecuador con los servicios de{' '}
                <a
                  href="http://servientrega.com.ec/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Servi entrega
                </a>{' '}
                y dependiendo del destino tardara de 2 a 4 dias. Tenga en cuenta
                que la logistica y metodologia de entrega no esta de nuestra
                parte si no del mismo servicio de <b>Servi entrega</b>.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

ShippingGuide.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering - ShippingGuide'))
}

export default ShippingGuide
