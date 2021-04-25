/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable unicorn/consistent-function-scoping */
import { NextSeo } from 'next-seo'
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { toast } from 'react-toast'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'
import { Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import Layout from '../../components/layout'
import { getTimeMessage } from '../../api/time-message'
import { TimeMessage } from '../../interfaces/message'
import SpinnerLoader from '../../components/element/spinner-cici'
import { UpdatePasswordEmail } from '../../api/users'

interface FromPasswordReset {
  newKey: string
  newKeyConfirm: string
}

const PassWordResetConfirm = () => {
  const methods = useForm<FromPasswordReset>()
  const [loading, setLoading] = useState<boolean>(false)
  const { handleSubmit, control, reset, errors } = methods
  const [Message, setMessage] = useState<TimeMessage | undefined>()

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const idTime = Router.query.idTime as string
        const { message } = await (
          await getTimeMessage({ token: undefined, idMessage: idTime })
        ).data
        setMessage(message)

        setLoading(false)
      } catch (error) {
        toast.error(error.message)
        setLoading(false)
      }
    }

    if (!Router.query.idTime) {
      Router.push('/password-reset')
    } else {
      fetchMessage()
    }
  }, [])

  const send = async (data: FromPasswordReset) => {
    const { newKey, newKeyConfirm } = data
    setLoading(true)

    if (newKey !== newKeyConfirm) {
      toast.warn('Las contraseñas no son iguales, intentalo otra vez.')
      setLoading(false)
      return
    }

    if (newKey.length < 7) {
      toast.warn(
        'La contraseña debe tener 7 o mas caracteres, intentalo otra vez.'
      )
      setLoading(false)
      return
    }

    try {
      await UpdatePasswordEmail({
        token: undefined,
        newKey,
        email: Message?.destination || '',
      })

      toast.success('Su contraseñas fue actualizada.')
      Router.push('/login')

      reset()
      setLoading(false)
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <>
      <NextSeo
        title="Confirmar Cambio de clave | Cici beauty place"
        description="Escribe tu nueva contraseña 2 veces para validar y realizar el cambio."
      />

      <Layout>
        <section className="container mt-md-4 mb-md-4 font-arvo">
          <div className="row justify-content-center">
            <div className="col-12 col-md-7 p-5 text-center bg-white">
              {loading ? <SpinnerLoader /> : ''}

              {!Message && !loading && (
                <>
                  <h5 className="font-weight-bold">
                    No encontramos tu mensaje
                  </h5>
                  <p className="p-1">
                    El enlace es inválido, probablemente porque ya fue usado o
                    asegurate de hacer click en el enlace enviado a tu dirección
                    de correo.
                  </p>
                </>
              )}

              {Message &&
                !loading &&
                (Message.status === 'Expirado' ? (
                  <>
                    <h5 className="font-weight-bold">Mensaje expirado</h5>
                    <p className="p-1">
                      Este mensaje solo sera valido por{' '}
                      <strong>{Message.life_minutes} minutos</strong> desde el
                      momento en que se envió el mensaje. Intente solicitar otra
                      vez el cambio de contraseña.
                    </p>
                  </>
                ) : (
                  <Form onSubmit={handleSubmit(send)}>
                    <FormGroup>
                      <Label for="password" className="text-left">
                        Tu nueva clave
                      </Label>
                      <Controller
                        as={
                          <Input
                            invalid={errors.newKey && true}
                            type="password"
                            name="newKey"
                            disabled={loading}
                            id="password"
                            placeholder="7 o mas caracteres"
                          />
                        }
                        type="password"
                        name="newKey"
                        control={control}
                        rules={{ required: true }}
                      />
                      <FormFeedback invalid={errors.newKey && true}>
                        {errors.newKey && 'Escribe tu nueva contraseña'}
                      </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                      <Label for="passwordConfirm" className="text-left">
                        Confirma tu clave
                      </Label>
                      <Controller
                        as={
                          <Input
                            invalid={errors.newKeyConfirm && true}
                            type="password"
                            name="newKeyConfirm"
                            disabled={loading}
                            id="passwordConfirm"
                            placeholder="confirma tu clave"
                          />
                        }
                        type="password"
                        name="newKeyConfirm"
                        control={control}
                        rules={{ required: true }}
                      />
                      <FormFeedback invalid={errors.newKeyConfirm && true}>
                        {errors.newKeyConfirm && 'Escribe tu nueva contraseña'}
                      </FormFeedback>
                    </FormGroup>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn bg-cici"
                    >
                      Cambiar contraseña
                    </button>
                  </Form>
                ))}
            </div>
            <div
              className="col-12 col-md-7 p-3 text-center"
              style={{ backgroundColor: '#f6f6f6' }}
            >
              <p>¿Necesitas cambiar de contraseña?</p>
              <Link href="/password-reset">
                <a className="p-1 text-cici">Cambiar contraseña</a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default PassWordResetConfirm
