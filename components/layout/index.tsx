/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { ReactNode } from 'react'
import NavBar from '../nav/navBar'
import Footer from './footer'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
