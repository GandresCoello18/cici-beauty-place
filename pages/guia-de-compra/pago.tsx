/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/layout'

const PaymentGuide = () => {
  return (
    <>
      <NextSeo
        title="Métodos de pagos | Guía de compras | Cici beauty place"
        description="Como o con que puedo pagar en la tienda de cici beauty place."
        canonical="https://cici.beauty/guia-de-compra/pago"
        openGraph={{
          url: 'https://cici.beauty/guia-de-compra/pago',
          title:
            '¿Como o con que puedo pagar en la tienda de cici beauty place?',
          description:
            'Usamos servicios como Paypal para realizar tus pagos o también mediante código QR para transferencias bancarios.',
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
                ¿Que métodos de pagos aceptan en{' '}
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
                  href="https://deuna.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Deuna
                </a>{' '}
                o también puedes hacer un deposito o trasferencia bancaria y
                luego enviá tu recibo al nuestra linea telefónica o whatsapp
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default PaymentGuide
