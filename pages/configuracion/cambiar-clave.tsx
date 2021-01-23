/* eslint-disable no-console */
import { Store } from 'redux'
import React from 'react'
import { NextSeo } from 'next-seo'
import { AllAction, RootState } from '../../reducers'
import { setTitle } from '../../reducers/app'
import Layout from '../../components/layout'
import ChangePassword from '../../components/element/changePassword'

const CambiarClave = () => {
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

CambiarClave.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering CambiarClave'))
}

export default CambiarClave
