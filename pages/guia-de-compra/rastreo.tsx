import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/layout'
import FeedbackInformation from '../../components/element/feedbackInformation'

const TrackingGuide = () => {
  return (
    <>
      <NextSeo
        title="Rastreo | Guia de compras | Cici beauty place"
        description="Como son los reastreos para mis pedidos."
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
                encuentra el numero de unico de rastreo que podras consultar en
                el siguiente panel{' '}
                <a
                  href="https://www.servientrega.com.ec/rastreo/multiple"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  panel de rastreo
                </a>{' '}
                puedes usar hasta un maximo de 10 guias por consulta.
              </p>
              <img
                width="100"
                src="https://www.servientrega.com.ec/assets/frontend/images/tracking/icono.gif"
                alt="icon panel de rastreo - servi entrega"
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
