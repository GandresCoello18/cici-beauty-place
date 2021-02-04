/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
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
import Cookies from 'js-cookie'
import { FcGoogle } from 'react-icons/fc'
import { Controller, useForm } from 'react-hook-form'
import { AiFillFacebook } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import Redirect from '../../lib/redirect'
import { loginWithFacebook, loginWithGoogle } from '../../firebase/firebase'
import SpinnerLoader from '../element/spinner-cici'
import { LoginUser } from '../../api/users'
import { setUser } from '../../reducers/user'

interface FormLogin {
  email: string
  password: string
  check: boolean
}

const Login = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>()
  const [remember, setRemember] = useState<boolean>(false)
  const [feedback, setFeedback] = useState<{ content: string; type: string }>({
    content: '',
    type: '',
  })
  const methods = useForm<FormLogin>()
  const { handleSubmit, control, reset, errors } = methods

  useEffect(() => {
    if (Cookies.get('access-token')) {
      Redirect('/home')
    }
  }, [])

  const send = async (data: FormLogin) => {
    setLoading(true)
    data.check = remember
    const { email, password } = data

    try {
      const response = await LoginUser({
        token: undefined,
        user: {
          email,
          password,
          provider: 'cici',
          userName: undefined,
          avatar: undefined,
        },
      })

      dispatch(setUser(response.data.me.user))
      Cookies.set('access-token', response.data.me.token)
      reset()
      Redirect('/home')

      setFeedback({
        content: 'Ingreso exitoso, seras redirigido al sitio principal',
        type: 'success',
      })
    } catch (error) {
      setLoading(false)
      setFeedback({
        content: error.message,
        type: 'danger',
      })
    }
  }

  const loginGoogle = () => {
    setLoading(true)

    try {
      loginWithGoogle()
        .then(async (user: any) => {
          const response = await LoginUser({
            token: undefined,
            user: {
              email: user.email,
              password: undefined,
              avatar: user.photoURL,
              userName: user.displayName,
              provider: 'google',
            },
          })
          dispatch(setUser(response.data.me.user))
          Cookies.set('access-token', response.data.me.token)
          reset()
          Redirect('/home')
        })
        .catch((error) => {
          setFeedback({
            content: error.message,
            type: 'danger',
          })
        })

      setLoading(false)
    } catch (error) {
      setLoading(false)
      setFeedback({
        content: error.message,
        type: 'danger',
      })
    }
  }

  const loginFacebook = () => {
    setLoading(true)

    try {
      loginWithFacebook()
        .then(async (user: any) => console.log(user))
        .catch((error) => {
          setFeedback({
            content: error.message,
            type: 'danger',
          })
        })

      setLoading(false)
    } catch (error) {
      setLoading(false)
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
                  type="email"
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  placeholder="Ingresa tu email"
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

              {loading && <SpinnerLoader />}

              {feedback.content && (
                <div className="p-2">
                  <Alert color={feedback.type}>{feedback.content}</Alert>
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
