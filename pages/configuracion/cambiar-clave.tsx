/* eslint-disable no-console */
import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/layout'
import ChangePassword from '../../components/element/changePassword'
import { UseNotSesion } from '../../hooks/useNotSesion'

const CambiarClave = () => {
  UseNotSesion()
  return (
    <>
      <NextSeo
        title="Cambiar clave | Cici beauty place"
        description="Cambia la clave secreta de tu cuenta de cici beauty place."
      />

      <Layout>
        <section className="container mt-md-4 mb-md-4 font-arvo">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 bg-white p-3">
              <ChangePassword />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default CambiarClave
