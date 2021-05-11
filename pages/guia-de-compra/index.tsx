/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Layout from '../../components/layout'

const CreateAccount = () => {
  return (
    <>
      <NextSeo
        title="Crear cuenta | Guía de compras | Cici beauty place"
        description="Que se necesita para crear una cuenta en la tienda de cici beauty place."
        canonical="https://cici.beauty/guia-de-compra"
        openGraph={{
          url: 'https://cici.beauty/guia-de-compra',
          title:
            '¿Que se necesita para crear una cuenta en la tienda de cici beauty place?',
          description:
            'Registrarse en cici es muy fácil, solo tomara 2 minutos.',
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
                ¿Como puedo crear una cuenta en{' '}
                <b className="text-cici">Cici beauty place</b>?
              </h6>
              <p className="p-1">
                Crearte una cuenta puede traer muchos beneficios para ti y nos
                permite saber con mas claridad quien eres para así recomendarte
                productos a tu gusto. Puedes completar el formulario de{' '}
                <Link href="/registro">
                  <a className="text-cici" href="/registro">
                    registro
                  </a>
                </Link>
                &nbsp; o puedes utilizar un acceso rápido con <b>Google</b> o{' '}
                <b>Facebook</b>, estas aplicaciones nos darán datos generales de
                ti como nombre de usuario, dirección de correo y foto de perfil.
              </p>
              <p className="p-1">
                Luego de crear tu cuenta ya puedes pasar a{' '}
                <Link href="/login">
                  <a className="text-cici" href="/login">
                    Iniciar Sesión
                  </a>
                </Link>
                &nbsp; llena el formulario con tu email y clave secreta (esta
                parte es valida si completaste el formulario de{' '}
                <Link href="/registro">
                  <a className="text-cici" href="/registro">
                    registro
                  </a>
                </Link>
                )
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default CreateAccount
