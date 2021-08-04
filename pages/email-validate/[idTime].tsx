/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable unicorn/consistent-function-scoping */
import { NextSeo } from 'next-seo'
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { toast } from 'react-toast'
import Link from 'next/link'
import { AxiosError } from 'axios'
import Layout from '../../components/layout'
import { getTimeMessage, resendTimeMessage } from '../../api/time-message'
import { TimeMessage } from '../../interfaces/message'
import SpinnerLoader from '../../components/element/spinner-cici'
import { UseSesion } from '../../hooks/useSesion'
import { UpdateValidEmail } from '../../api/users'
import { HandleError } from '../../helpers/handleError'

const EmailConfirm = () => {
  UseSesion()
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingResend, setLoadingResend] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(false)
  const [Message, setMessage] = useState<TimeMessage | undefined>()

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const idTime = Router.query.idTime as string
        const { message } = await (
          await getTimeMessage({ token: undefined, idMessage: idTime })
        ).data
        setMessage(message)

        if (message?.status !== 'Expirado') {
          await UpdateValidEmail({ idTimeMessage: idTime, validate: true })
          setIsValid(true)
        }

        setLoading(false)
      } catch (error) {
        toast.error(HandleError(error as AxiosError))
        setLoading(false)
      }
    }

    if (!Router.query.idTime) {
      Router.push('/home')
    } else {
      fetchMessage()
    }
  }, [])

  const Resend = async () => {
    setLoadingResend(true)

    try {
      const idTimeMessage = Router.query.idTime as string
      await resendTimeMessage({ idTimeMessage })
      setLoadingResend(false)
      toast.success('Se reenvio a su dirección de correo')
    } catch (error) {
      toast.error(HandleError(error as AxiosError))
      setLoading(false)
    }
  }

  const renderMessage = () => {
    if (isValid) {
      return (
        <>
          <img
            height="100"
            className="mb-2"
            src="https://res.cloudinary.com/cici/image/upload/v1626921971/util/179372_dm7zco.png"
            alt="check true"
          />
          <h5 className="font-weight-bold">Cuenta confirmada</h5>
          <p className="p-1">
            Ahora puedes iniciar sesión, recibir notificaciones de noticias y
            actividades dentro de la plataforma.
          </p>
        </>
      )
    }

    return <SpinnerLoader />
  }

  return (
    <>
      <NextSeo
        title="Confirmar tu dirección de correo | Cici beauty place"
        description="Tu dirección de correo debe ser verificada para iniciar sesión."
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
                      vez la validación de correo.
                    </p>
                    <button
                      type="button"
                      onClick={Resend}
                      className="btn btn-warning form-control mt-2"
                      disabled={loadingResend}
                    >
                      {loadingResend ? 'Enviando...' : 'Reenviar al correo'}
                    </button>
                  </>
                ) : (
                  renderMessage()
                ))}
            </div>
            <div
              className="col-12 col-md-7 p-3 text-center"
              style={{ backgroundColor: '#f6f6f6' }}
            >
              <p>¿Ya confirmastes tu cuenta?</p>
              <Link href="/login">
                <a className="p-1 text-cici">Iniciar sesión</a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default EmailConfirm
