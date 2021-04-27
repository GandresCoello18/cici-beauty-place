import Router from 'next/router'
import { useContext, useEffect } from 'react'
import { TokenContext } from '../context/contextToken'

export const UseNotSesion = () => {
  const { token } = useContext(TokenContext)

  useEffect(() => {
    if (!token) {
      Router.push(`/login`)
    }
  }, [token])
}
