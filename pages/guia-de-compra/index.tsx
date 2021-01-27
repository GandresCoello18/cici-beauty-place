import React from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Layout from '../../components/layout'
import FeedbackInformation from '../../components/element/feedbackInformation'

const CreateAccount = () => {
  return (
    <>
      <NextSeo
        title="Crear cuenta | Guia de compras | Cici beauty place"
        description="Que se necesita para crear una cuenta en la tienda de cici beauty place."
      />

      <Layout>
        <section className="container mt-md-4 mb-md-4 font-arvo">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 bg-white p-3">
              <h6 className="p-1">
                ¿Como puedo crear una cuenta en{' '}
                <b className="text-cici">Cici beauty place</b>?
              </h6>
              <p className="p-1">
                Crearte una cuenta puede traer muchos benefecios para ti y nos
                permite saber con mas claridad quien eres para asi recomendarte
                productos a tu gusto. Puedes completar el formulario de{' '}
                <Link href="/signin">
                  <a className="text-cici" href="/signIn">
                    registro
                  </a>
                </Link>
                &nbsp; o puedes utilizar un acceso rapido con <b>Google</b> o{' '}
                <b>Facebook</b>, estas aplicaciones nos daran datos generales de
                ti como nombre de usuario, email y foto de perfil.
              </p>
              <p className="p-1">
                Luego de crear tu cuenta ya puedes pasar a{' '}
                <Link href="/login">
                  <a className="text-cici" href="/login">
                    Iniciar Sesion
                  </a>
                </Link>
                &nbsp; llena el formulario con tu email y clave secreta (esta
                parte es valida si completastes el formulario de{' '}
                <Link href="/signin">
                  <a className="text-cici" href="/signin">
                    registro
                  </a>
                </Link>
                )
              </p>
              <p className="p-1">
                Ten encuenta que no es necesario crearte una cuenta para comprar
                en <b className="text-cici">Cici beauty place</b>.
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

export default CreateAccount
