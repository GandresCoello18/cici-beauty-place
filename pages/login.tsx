import React from 'react'
import { NextSeo } from 'next-seo'
import Login from '../components/login'

const LoginPage = () => {
  return (
    <>
      <NextSeo
        title="Inicio de sesion - cici beauty place"
        description="Entra y selecciona los productos de tu agrado para lucir bella y atractiva."
      />

      <Login />
    </>
  )
}

export default LoginPage
