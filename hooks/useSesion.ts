import Router from 'next/router'
import { useContext, useEffect } from 'react'
import { TokenContext } from '../context/contextToken'

export const UseSesion = () => {
  const { token } = useContext(TokenContext)

  useEffect(() => {
    if (token) {
      Router.push(`/home`)
    }
  }, [token])
}
