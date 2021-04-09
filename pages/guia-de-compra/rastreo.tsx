/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Layout from '../../components/layout'
import FeedbackInformation from '../../components/element/feedbackInformation'

const TrackingGuide = () => {
  return (
    <>
      <NextSeo
        title="Rastreo | Guia de compras | Cici beauty place"
        description="Como puedo rastrear mis pedidos."
        canonical="https://cici.beauty/guia-de-compra/rastreo"
        openGraph={{
          url: 'https://cici.beauty/guia-de-compra/rastreo',
          title: '¿Como puedo rastrear mis pedidos de cici beauty place?',
          description:
            'Cuando realizemos tu envio te notificamos por correo electronico para que puedas ver el numero de guia y el seguimiento de tu paquete.',
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
              <h6 className="p-1">¿Como puedo localizar mis paquete?</h6>
              <p className="p-1">
                Cuando terminamos de entregar los paquetes al servicio de{' '}
                <b>Servi entrega</b> nos proporcionaran una guia con los datos
                del envio, (Quien envia y quien recibe) en dicha guia se
                encuentra el numero unico de rastreo que podras consultar en el
                siguiente panel{' '}
                <a
                  href="https://www.servientrega.com.ec/rastreo/multiple"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  panel de rastreo
                </a>{' '}
                puedes usar hasta un maximo de 10 guias por consulta o tambien
                puedes consultar automaticamente en la seccion de{' '}
                <Link href="/mis-pedidos">mis pedidos</Link>
              </p>
              <img
                width="200"
                src="https://www.servientrega.com.ec/images/logo.png"
                alt="icon - servi entrega"
              />
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

export default TrackingGuide
