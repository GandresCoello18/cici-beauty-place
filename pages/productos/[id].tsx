import { Store } from 'redux'
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import Router from 'next/router'
import { AllAction, RootState } from '../../reducers'
import { setTitle } from '../../reducers/app'
import Layout from '../../components/layout'
import ProductDetails from '../../components/productDetails'

const ProductId = () => {
  const [productId, setProductId] = useState<string>('')

  useEffect(() => {
    if (!Router.query.id) {
      Router.push('/')
    }

    setProductId(Router.query.id as string)
    console.log('desde efect de product ID')
  }, [])

  return (
    <>
      <NextSeo
        title={`${productId} - Cici beauty place`}
        description="Encuentra todo sobre cosmeticos y belleza."
      />

      <Layout>
        <ProductDetails />
      </Layout>
    </>
  )
}

ProductId.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering - ProductId'))
}

export default ProductId
