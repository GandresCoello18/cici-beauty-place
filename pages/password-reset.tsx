/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unneeded-ternary */
import { Store } from 'redux'
import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'
import { Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import { setTitle } from '../reducers/app'
import { AllAction, RootState } from '../reducers'
import Layout from '../components/layout'

interface FromPasswordReset {
  email: string
}

const PassWordReset = () => {
  const methods = useForm<FromPasswordReset>()
  const { handleSubmit, control, reset, errors } = methods
  const [sendEmail, setSendEmail] = useState<boolean>(true)

  const send = (_data: FromPasswordReset) => {
    console.log(_data)
    setSendEmail(true)
    reset()
  }

  return (
    <>
      <NextSeo
        title="Cambiar clave | Cici beauty place"
        description="Cambia la clave secreta de tu cuenta de cici beauty place."
      />
      <Layout>
        <section className="container mt-md-4 mb-md-4 font-arvo">
          <div className="row justify-content-center">
            {sendEmail ? (
              <div className="col-12 col-md-5 bg-white p-5 text-center">
                <MdEmail size={50} color="#f097ac" />
                <h5 className="font-weight-bold">
                  Revisa tu correo y sigue las instrucciones
                </h5>
                <p className="p-1">
                  Te hemos enviado un correo a{' '}
                  <strong>goyeselcoca@gmail.com</strong> con las instrucciones
                  para cambiar tu contraseña. Si n logras encontrarlo, revisa en
                  la bandeja de spam.
                </p>
              </div>
            ) : (
              <>
                <div className="col-12 col-md-7 bg-white p-3">
                  <h5 className="text-center p-1">
                    Revisa tu correo y sigue las instrucciones
                  </h5>
                  <p>
                    Te enviaremos un enlace a tu correo para que puedas acceder
                    a tu cuenta
                  </p>

                  <Form onSubmit={handleSubmit(send)}>
                    <FormGroup>
                      <Label for="email">Tu Email</Label>
                      <Controller
                        as={
                          <Input
                            invalid={errors.email && true}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="ejemplo@gmail.com"
                          />
                        }
                        type="email"
                        name="email"
                        control={control}
                        rules={{ required: true }}
                      />
                      <FormFeedback invalid={errors.email && true}>
                        {errors.email &&
                          'Escribe tu email para recuperar la cuenta'}
                      </FormFeedback>
                    </FormGroup>

                    <button type="submit" className="btn bg-cici">
                      Recuperar cuenta
                    </button>
                  </Form>
                </div>
                <div
                  className="col-12 col-md-7 p-3 text-center"
                  style={{ backgroundColor: '#f6f6f6' }}
                >
                  <p>¿Aún no tienes cuenta en Cici?</p>
                  <Link href="/signin">
                    <a className="p-1 text-cici">Registrate</a>
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </Layout>
    </>
  )
}

PassWordReset.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering PassWordReset'))
}

export default PassWordReset
