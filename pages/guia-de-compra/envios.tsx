/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/layout'
import FeedbackInformation from '../../components/element/feedbackInformation'

const ShippingGuide = () => {
  return (
    <>
      <NextSeo
        title="Métodos de envió | Guia de compras | Cici beauty place"
        description="Como son los método de envió para mis pedidos."
        canonical="https://cici.beauty/guia-de-compra/envios"
        openGraph={{
          url: 'https://cici.beauty/guia-de-compra/envios',
          title: '¿Como enviamos tus pedidos a su lugar de destino?',
          description:
            'Para enviar tus productos usamos los servicios de ServiEntrega u otras empresas.',
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
                ¿Que métodos de envió admiten en{' '}
                <b className="text-cici">Cici beauty place</b>?
              </h6>
              <p className="p-1">
                Hacemos envíos a todo el Ecuador con los servicios de{' '}
                <a
                  href="http://servientrega.com.ec/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Servi entrega
                </a>{' '}
                y dependiendo del destino tardara de 2 a 4 días. Tenga en cuenta
                que la logística y metodología de entrega no esta de nuestra
                parte si no del mismo servicio de <b>ServiEntrega</b>.
              </p>
              <p>
                Se envían todo los productos de las ordenes antes de las{' '}
                <b>15:00 PM</b>, toda orden después de esa hora sera enviado al
                día siguiente.
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
