import { Store } from 'redux'
import React from 'react'
import { NextSeo } from 'next-seo'
import { AllAction, RootState } from '../reducers'
import { setTitle } from '../reducers/app'
import Layout from '../components/layout'

const Faq = () => {
  return (
    <>
      <NextSeo
        title="Preguntas frecuentes | Cici beauty place"
        description="Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razon quieres mas detalles escribenos en contacto o en nuestras redes."
      />

      <Layout>
        <section className="container font-arvo mt-3 p-2 p-md-5 faq">
          <div className="row justify-between">
            <div className="col-12 p-4">
              <h4 className="text-center">
                <u className="p-1">Preguntas frecuentes</u>
              </h4>
            </div>
            <div className="col-12 col-md-6">
              <ul>
                <li>
                  <span>Pregunta freceuente aqui, puede ser corta o larga</span>
                </li>
                <li>
                  <span>Pregunta freceuente aqui, puede ser corta o larga</span>
                </li>
                <li>
                  <span>Pregunta freceuente aqui, puede ser corta o larga</span>
                </li>
                <li>
                  <span>Pregunta freceuente aqui, puede ser corta o larga</span>
                </li>
                <li>
                  <span>Pregunta freceuente aqui, puede ser corta o larga</span>
                </li>
                <li>
                  <span>Pregunta freceuente aqui, puede ser corta o larga</span>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul>
                <li>
                  <span>Pregunta freceuente aqui, puede ser corta o larga</span>
                </li>
                <li>
                  <span>Pregunta freceuente aqui, puede ser corta o larga</span>
                </li>
                <li>
                  <span>Pregunta freceuente aqui, puede ser corta o larga</span>
                </li>
                <li>
                  <span>Pregunta freceuente aqui, puede ser corta o larga</span>
                </li>
                <li>
                  <span>Pregunta freceuente aqui, puede ser corta o larga</span>
                </li>
                <li>
                  <span>Pregunta freceuente aqui, puede ser corta o larga</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
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

Faq.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering Faq'))
}

export default Faq
