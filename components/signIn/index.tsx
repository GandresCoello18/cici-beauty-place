/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import Link from 'next/link'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const SignIn = () => {
  return (
    <div className="container-sign-in font-arvo">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 border-round p-2 bg-white">
            <div className="row justify-content-end">
              <div className="col-6">
                <Link href="/login">
                  <a
                    href="/login"
                    className="p-3 float-right font-weight-bold cursor-pointer font-arvo"
                    style={{ color: '#fac5d0' }}
                  >
                    Iniciar Sesiòn
                  </a>
                </Link>
              </div>
            </div>
            <div className="center-container">
              <figure>
                <img src="img/logo.jpg" alt="logotipo" />
              </figure>
            </div>

            <h3 className="font-weight-bold text-center font-arvo">Registro</h3>
            <br />

            <Form>
              <FormGroup>
                <Label for="exampleEmail">User name:</Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Nombre de usuario"
                  style={{
                    borderColor: 'transparent',
                    borderBottomColor: '#cdcdcd',
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email:</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Direccion de correo electronico"
                  style={{
                    borderColor: 'transparent',
                    borderBottomColor: '#cdcdcd',
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Password:</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Clave secreta"
                  style={{
                    borderColor: 'transparent',
                    borderBottomColor: '#cdcdcd',
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Confirmar Password:</Label>
                <Input
                  type="password"
                  name="confir-password"
                  placeholder="Vuelva ha escribir la clave secreta"
                  style={{
                    borderColor: 'transparent',
                    borderBottomColor: '#cdcdcd',
                  }}
                />
              </FormGroup>
              <Button style={{ backgroundColor: '#efccd3' }} block>
                Registrarme
              </Button>
            </Form>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
