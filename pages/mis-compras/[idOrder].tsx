import { Store } from 'redux'
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import Router from 'next/router'
import { AllAction, RootState } from '../../reducers'
import { setTitle } from '../../reducers/app'
import Layout from '../../components/layout'

const DetailsCompra = () => {
  const [OrderId, setOrderId] = useState<string>('')

  useEffect(() => {
    if (!Router.query.idOrder) {
      Router.push('/')
    }

    setOrderId(Router.query.idOrder as string)
    console.log('desde efect de product ID')
  }, [])

  return (
    <>
      <NextSeo
        title="Detalle de Compras | Cici beauty place"
        description="Los detalles de mi compra."
      />

      <Layout>
        <section className="container font-arvo mt-md-3 p-md-2 p-md-5">
          <div className="row justify-content-center bg-white">
            <div className="col-12 border-bottom p-3">{OrderId}</div>
          </div>
        </section>
      </Layout>
    </>
  )
}

DetailsCompra.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering DetailsCompra'))
}

export default DetailsCompra
