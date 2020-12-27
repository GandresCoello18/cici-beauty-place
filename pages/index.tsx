import { Store } from 'redux'
import React from 'react'
import { NextSeo } from 'next-seo'
import { AllAction, RootState } from '../reducers'
import { setTitle } from '../reducers/app'
import Home from '../components/home'
import Layout from '../components/layout'

const Index = () => {
  return (
    <>
      <NextSeo
        title="Inicio - Cici beauty place"
        description="Encuentra todo sobre cosmeticos y belleza."
      />

      <Layout>
        <Home />
      </Layout>
    </>
  )
}

Index.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering'))
}

export default Index
