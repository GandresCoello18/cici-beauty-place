/* eslint-disable no-param-reassign */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import Link from 'next/link'
import {
  Alert,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap'
import { FcGoogle } from 'react-icons/fc'
import { Controller, useForm } from 'react-hook-form'
import { AiFillFacebook } from 'react-icons/ai'
import { loginWithFacebook, loginWithGoogle } from '../../firebase/firebase'

interface FormLogin {
  email: string
  password: string
  check: boolean
}

const Login = () => {
  const [loading, setLoading] = useState<boolean>()
  const [remember, setRemember] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const methods = useForm<FormLogin>()
  const { handleSubmit, control, reset, errors } = methods

  const send = (data: FormLogin) => {
    data.check = remember
    console.log(data)
    reset()
  }

  const loginGoogle = () => {
    setLoading(true)

    try {
      loginWithGoogle()
        .then(async (user: any) => console.log(user))
        .catch((error_: any) => {
          setError(error_.message)
        })
    } catch (error_) {
      setError(error_.message)
    }
    setLoading(false)
  }

  const loginFacebook = () => {
    setLoading(true)

    try {
      loginWithFacebook()
        .then(async (user: any) => console.log(user))
        .catch((error_: any) => {
          setError(error_.message)
        })
    } catch (error_) {
      setError(error_.message)
    }
    setLoading(false)
  }

  return (
    <div className="container-sign-in font-arvo">
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

            <Form onSubmit={handleSubmit(send)}>
              <FormGroup>
                <Label for="exampleEmail">Email:</Label>
                <Controller
                  as={
                    <Input
                      invalid={errors.email && true}
                      type="email"
                      name="email"
                      disabled={loading}
                      placeholder="Direccion de correo electronico"
                      style={{
                        borderColor: 'transparent',
                        borderBottomColor: '#cdcdcd',
                      }}
                    />
                  }
                  type="text"
                  name="nombres"
                  min={0}
                  control={control}
                  rules={{ required: true }}
                  placeholder="Ingresa tus nombres"
                />
                <FormFeedback invalid={errors.email && true}>
                  {errors.email && 'Escribe tu direccion de correo electronico'}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Password:</Label>
                <Controller
                  as={
                    <Input
                      invalid={errors.password && true}
                      type="password"
                      name="password"
                      disabled={loading}
                      placeholder="Clave secreta"
                      style={{
                        borderColor: 'transparent',
                        borderBottomColor: '#cdcdcd',
                      }}
                    />
                  }
                  name="password"
                  control={control}
                  rules={{ required: true }}
                />
                <FormFeedback invalid={errors.password && true}>
                  {errors.password && 'Escribe tu clave secreta'}
                </FormFeedback>
              </FormGroup>
              <Button
                type="submit"
                disabled={loading}
                style={{ backgroundColor: '#efccd3', color: '#000' }}
                block
              >
                Entrar
              </Button>

              {loading && (
                <div
                  className="p-2"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}
                >
                  <div className="spiner-cici" />
                </div>
              )}

              {error && (
                <div className="p-2">
                  <Alert color="danger">{error}</Alert>
                </div>
              )}

              <div className="row justify-content-between mt-3">
                <div className="col-6">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        checked={remember}
                        disabled={loading}
                        onChange={(e) => setRemember(e.target.checked)}
                      />{' '}
                      Recordar credenciales
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

            <h5 className="text-center font-arvo" style={{ color: '#999' }}>
              Acceso ràpido con
            </h5>
            <div className="row justify-content-center text-center">
              <div className="col-2">
                <AiFillFacebook
                  size={40}
                  color="#3b5998"
                  className="cursor-pointer"
                  onClick={loginFacebook}
                />
              </div>
              <div className="col-2">
                <FcGoogle
                  size={40}
                  className="cursor-pointer"
                  onClick={loginGoogle}
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
