/* eslint-disable react/display-name */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import ValidateEmail from 'email-validator'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { Controller, useForm } from 'react-hook-form'
import {
  Alert,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap'
import Redirect from '../../lib/redirect'
import { RegisterUser } from '../../api/users'
import { UserRegister } from '../../interfaces/users'
import SpinnerLoader from '../element/spinner-cici'

interface FormSignIn {
  username: string
  email: string
  password: string
  confirPassword: string
}

const SignIn = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const methods = useForm<FormSignIn>()
  const [feedback, setFeedback] = useState<{
    content: string
    type: string
  }>({
    content: '',
    type: '',
  })
  const { handleSubmit, control, reset, errors } = methods

  useEffect(() => {
    if (Cookies.get('access-token')) {
      Redirect('/home')
    }
  }, [])

  const send = async (data: FormSignIn): Promise<void> => {
    setFeedback({
      content: '',
      type: '',
    })

    try {
      setLoading(true)
      const { username, email, password, confirPassword } = data

      if (!ValidateEmail.validate(email)) {
        setFeedback({
          content: 'Asegurate de escribir un correo electronico valido.',
          type: 'danger',
        })
        return
      }

      if (confirPassword === password) {
        const userRegister: UserRegister = {
          userName: username,
          email,
          password,
          avatar: undefined,
          provider: 'cici',
        }

        if (confirPassword.length >= 7 && password.length >= 7) {
          await RegisterUser({ token: undefined, user: userRegister })
          reset()

          setFeedback({
            content: 'Cuenta creada con exito, ya puedes iniciar sesiòn',
            type: 'success',
          })
        } else {
          setFeedback({
            content: 'Las claves deben de tener 7 o mas caracteres.',
            type: 'danger',
          })
        }
      } else {
        setFeedback({
          content: 'Las claves no son identicas, revise e intentelo de nuevo.',
          type: 'danger',
        })
      }
      setLoading(false)
    } catch (error) {
      console.log(error.code)
      setFeedback({
        content: error.message,
        type: 'danger',
      })
    }
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
                    className="p-3 float-right font-weight-bold font-arvo text-cici"
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
                      placeholder="Nombre de usuario"
                      style={{
                        borderColor: 'transparent',
                        borderBottomColor: '#cdcdcd',
                      }}
                    />
                  }
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

            {loading && <SpinnerLoader />}

            {feedback.content && (
              <div className="p-2">
                <Alert color={feedback.type}>{feedback.content}</Alert>
              </div>
            )}
            {feedback.type === 'success' && (
              <Link href="/login">
                <a
                  href="/login"
                  className="p-1 font-weight-bold font-arvo text-cici"
                >
                  Inicia sesiòn aqui..!
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
