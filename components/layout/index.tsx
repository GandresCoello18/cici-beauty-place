/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { ReactNode, useState } from 'react'
import Cookies from 'js-cookie'
import NavBar from '../nav/navBar'
import Footer from './footer'
import NavBarLanding from '../nav/navBarLanding'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const [isSession] = useState<boolean>(!!Cookies.get('access-token'))

  return (
    <>
      {isSession ? <NavBar /> : <NavBarLanding />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
