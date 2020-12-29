import { Store } from 'redux'
import React from 'react'
import { NextSeo } from 'next-seo'
import { AllAction, RootState } from '../../reducers'
import { setTitle } from '../../reducers/app'
import Layout from '../../components/layout'
import Productos from '../../components/producto'

const Producto = () => {
  return (
    <>
      <NextSeo
        title="Productos - Cici beauty place"
        description="Encuentra todo sobre cosmeticos y belleza."
      />

      <Layout>
        <Productos />
      </Layout>
    </>
  )
}

Producto.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering - Producto'))
}

export default Producto
