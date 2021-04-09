/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/layout'
import FeedbackInformation from '../../components/element/feedbackInformation'

const ShippingGuide = () => {
  return (
    <>
      <NextSeo
        title="Metodos de envio | Guia de compras | Cici beauty place"
        description="Como son los metodo de envio para mis pedidos."
        canonical="https://cici.beauty/guia-de-compra/envios"
        openGraph={{
          url: 'https://cici.beauty/guia-de-compra/envios',
          title: '¿Como enviamos tus pedidos a su lugar de destino?',
          description:
            'Para enviar tus productos usamos los servicos de ServiEntrega u otras empresas.',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 700,
              height: 500,
              alt: 'logo de cici',
            },
          ],
          site_name: 'Cici beauty place',
        }}
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
              <p>
                Se envian todo los productos de las ordenes antes de las{' '}
                <b>15:00 PM</b>, toda orden despues de esa hora sera enviado al
                dia siguiente.
              </p>
            </div>
            <div className="col-12 col-md-8 border-bottom border-top bg-white p-2">
              <FeedbackInformation />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default ShippingGuide
