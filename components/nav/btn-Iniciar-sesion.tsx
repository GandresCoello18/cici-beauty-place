/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import React from 'react'
import { Button } from 'reactstrap'

export const BtnIniciarSesion = () => {
  return (
    <Link href="/login">
      <a className="mr-3">
        <Button outline color="secondary" size="sm">
          Iniciar Sesión
        </Button>
      </a>
    </Link>
  )
}
