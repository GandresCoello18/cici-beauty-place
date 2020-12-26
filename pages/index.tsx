import { Store } from 'redux'
import React from 'react'
import { AllAction, RootState } from '../reducers'
import { setTitle } from '../reducers/app'

const Index = () => <p>edsfefd</p>

Index.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering'))
}

export default Index
