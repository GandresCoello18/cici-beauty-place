/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import Link from 'next/link'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiOutlineTwitter,
} from 'react-icons/ai'

const Login = () => {
  return (
    <div className="container-sign-in">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 border-round p-2 bg-white">
            <div className="row justify-content-end">
              <div className="col-4">
                <Link href="/signin">
                  <a
                    href="/signin"
                    className="p-3 float-right font-weight-bold cursor-pointer"
                    style={{ color: '#fac5d0' }}
                  >
                    Registrarme
                  </a>
                </Link>
              </div>
            </div>
            <div className="center-container">
              <figure>
                <img src="img/logo.jpg" alt="logotipo" />
              </figure>
            </div>

            <h3 className="font-weight-bold text-center">Iniciar Sesiòn</h3>
            <br />

            <Form>
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
              <Button style={{ backgroundColor: '#efccd3' }} block>
                Entrar
              </Button>
              <div className="row justify-content-between mt-3">
                <div className="col-6">
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" /> Recordar credenciales
                    </Label>
                  </FormGroup>
                </div>
                <div className="col-6">
                  <p className="text-right cursor-pointer">
                    ¿Olvidastes tu contraseña?
                  </p>
                </div>
              </div>
            </Form>
            <br />

            <h5 className="text-center" style={{ color: '#999' }}>
              Acceso ràpido con
            </h5>
            <div className="row justify-content-center">
              <div className="col-2">
                <AiFillFacebook
                  size={40}
                  color="#3b5998"
                  className="cursor-pointer"
                />
              </div>
              <div className="col-2">
                <AiFillGoogleCircle size={40} className="cursor-pointer" />
              </div>
              <div className="col-2">
                <AiOutlineTwitter
                  size={40}
                  color="#00acee"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
