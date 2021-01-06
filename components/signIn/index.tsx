/* eslint-disable no-console */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'

interface FormSignIn {
  username: string
  email: string
  password: string
  confirPassword: string
}

const SignIn = () => {
  const methods = useForm<FormSignIn>()
  const { handleSubmit, control, reset, errors } = methods

  const send = (data: FormSignIn) => {
    console.log(data)
    reset()
  }

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

            <Form onSubmit={handleSubmit(send)}>
              <FormGroup>
                <Label for="exampleEmail">User name:</Label>
                <Controller
                  as={
                    <Input
                      invalid={errors.username && true}
                      type="text"
                      name="username"
                      placeholder="Nombre de usuario"
                      style={{
                        borderColor: 'transparent',
                        borderBottomColor: '#cdcdcd',
                      }}
                    />
                  }
                  type="text"
                  name="username"
                  control={control}
                  rules={{ required: true }}
                />
                <FormFeedback invalid={errors.username && true}>
                  {errors.username && 'Escribe el nombre de usuario'}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email:</Label>
                <Controller
                  as={
                    <Input
                      invalid={errors.email && true}
                      type="email"
                      name="email"
                      placeholder="Direccion de correo electronico"
                      style={{
                        borderColor: 'transparent',
                        borderBottomColor: '#cdcdcd',
                      }}
                    />
                  }
                  type="email"
                  name="email"
                  control={control}
                  rules={{ required: true }}
                />
                <FormFeedback invalid={errors.email && true}>
                  {errors.email && 'Escribe la direccion de correo'}
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
                      placeholder="Clave secreta"
                      style={{
                        borderColor: 'transparent',
                        borderBottomColor: '#cdcdcd',
                      }}
                    />
                  }
                  type="password"
                  name="password"
                  control={control}
                  rules={{ required: true }}
                />
                <FormFeedback invalid={errors.password && true}>
                  {errors.password && 'Escribe la clave secreta'}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Confirmar Password:</Label>
                <Controller
                  as={
                    <Input
                      invalid={errors.confirPassword && true}
                      type="password"
                      name="confirPassword"
                      placeholder="Vuelva ha escribir la clave secreta"
                      style={{
                        borderColor: 'transparent',
                        borderBottomColor: '#cdcdcd',
                      }}
                    />
                  }
                  type="password"
                  name="confirPassword"
                  control={control}
                  rules={{ required: true }}
                />
                <FormFeedback invalid={errors.confirPassword && true}>
                  {errors.confirPassword &&
                    'Vuelve ah escribir la clave secreta'}
                </FormFeedback>
              </FormGroup>
              <Button
                type="submit"
                style={{ backgroundColor: '#efccd3' }}
                block
              >
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
