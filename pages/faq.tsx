/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { FAQPageJsonLd, NextSeo } from 'next-seo'
import Layout from '../components/layout'

const Faq = () => {
  return (
    <>
      <NextSeo
        title="Preguntas frecuentes | Cici beauty place"
        description="Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razon quieres mas detalles escribenos en contacto o en nuestras redes."
        canonical="https://cici.beauty/faq"
        openGraph={{
          url: 'https://cici.beauty/faq',
          title: 'Preguntas frecuentes | Cici beauty place',
          description:
            'Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razon quieres mas detalles escribenos en contacto o en nuestras redes.',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 800,
              height: 600,
              alt: 'logo de cici beauty place',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'How long is the delivery time?',
            acceptedAnswerText: '3-5 business days.',
          },
          {
            questionName: 'Where can I find information about product recalls?',
            acceptedAnswerText: 'Read more on under information.',
          },
        ]}
      />

      <Layout>
        <section className="container font-arvo mt-3 p-2 p-md-5 faq">
          <div className="row justify-content-center bg-white border-round">
            <div className="col-12 p-4">
              <h2 className="text-center">
                <u className="p-1">Preguntas frecuentes</u>
              </h2>
            </div>
            {[0, 1, 2, 3, 4].map((item) => (
              <div
                className="col-12 col-md-8 mb-4 border-bottom"
                id={`${item}`}
                key={item}
              >
                <h5 className="p-2">
                  Pregunta freceuente aqui, puede ser corta o larga
                </h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quas facilis at accusamus iusto enim mollitia quia.
                  Possimus consequuntur atque magni omnis quos maxime laudantium
                  veniam nulla exercitationem, harum animi?
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Faq
