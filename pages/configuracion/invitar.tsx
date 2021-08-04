/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useContext, useState } from 'react'
import { NextSeo } from 'next-seo'
import { BiSad } from 'react-icons/bi'
import { FiSend } from 'react-icons/fi'
import { AiFillCopy } from 'react-icons/ai'
import { Alert, Form, FormFeedback, FormGroup, Input } from 'reactstrap'
import { Controller, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { toast } from 'react-toast'
import copy from 'copy-to-clipboard'
import { AxiosError } from 'axios'
import Layout from '../../components/layout'
import { RootState } from '../../reducers'
import { TokenContext } from '../../context/contextToken'
import { SendInvite } from '../../api/invite'
import { UseNotSesion } from '../../hooks/useNotSesion'
import { HandleError } from '../../helpers/handleError'

interface FromInvite {
  name: string
  email: string
}

const SendInvitation = () => {
  UseNotSesion()
  const methods = useForm<FromInvite>()
  const { handleSubmit, control, reset, errors } = methods
  const { token } = useContext(TokenContext)
  const [loading, setLoading] = useState<boolean>(false)

  const { User } = useSelector((state: RootState) => state.UserReducer)

  const send = async (_data: FromInvite) => {
    const { name, email } = _data
    setLoading(true)

    try {
      await SendInvite({ token, name, email })
      toast.success(`Se envio tu invitacioó a: ${email}`)
      reset()
      setLoading(false)
    } catch (error) {
      toast.error(HandleError(error as AxiosError))
      setLoading(false)
    }
  }

  return (
    <>
      <NextSeo
        title="Invitar a alguien | Cici beauty place"
        description="Invita a tus amigos y familiares y por cada compra mayor o igual a 40 recibirás promociones y descuentos para ti."
        canonical="https://cici.beauty/invitacion"
        openGraph={{
          url: 'https://cici.beauty/invitacion',
          title: 'Invita a un amigo y recibe cupones gratis',
          description:
            'Al invitar a un amigo a cici beauty place, el obtendrá un cupón gratis por registrarse.',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 700,
              height: 500,
              alt: 'logo de cici',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <Layout>
        <section className="container mt-md-4 mb-md-4 font-arvo">
          <div className="row justify-content-center bg-white">
            <div className="col-12 col-md-10 p-3 mb-3">
              <Alert color="primary">
                <BiSad /> No has referido amigos, aun no tienes cupones.
              </Alert>
              <h4>Seguro conoces a alguien que le gusta nuestros productos</h4>
              <p>
                Comparte tu link de referidos y cada compra mayor o igual a $40
                recibirás cupones que puedes elegir.
              </p>
            </div>
            <div className="col-12 col-md-10 p-3 mb-5">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10">
                  <Input
                    type="url"
                    value={`https://cici.beauty/invitacion/${User.userName}`}
                    className="p-3 font-weight-bold url-invite"
                    disabled
                  />
                </div>
                <div className="col-12 col-md-2">
                  <button
                    type="button"
                    className="btn bg-cici p-2 w-100 h-100"
                    onClick={() => {
                      toast.success('Se copio la direccion en el porta papeles')
                      copy(`https://cici.beauty/invitacion/${User.userName}`)
                    }}
                  >
                    <AiFillCopy /> Copiar
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 p-3 mb-3 mb-md-0">
              <div className="border-bottom p-3">
                <h3>Invita a un amigo</h3>
              </div>
              <br />
              <p>Enviá tu enlace de referidos por correo.</p>
              <Form onSubmit={handleSubmit(send)}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <FormGroup>
                      <Controller
                        as={
                          <Input
                            invalid={errors.name && true}
                            type="text"
                            name="name"
                            placeholder="Nombre de la persona"
                          />
                        }
                        type="text"
                        name="name"
                        control={control}
                        rules={{ required: true }}
                      />
                      <FormFeedback invalid={errors.name && true}>
                        {errors.name && 'Escribe el nombre de la persona'}
                      </FormFeedback>
                    </FormGroup>
                  </div>
                  <div className="col-12 col-md-6">
                    <FormGroup>
                      <Controller
                        as={
                          <Input
                            invalid={errors.email && true}
                            type="email"
                            name="email"
                            placeholder="Direccion de correo"
                          />
                        }
                        type="email"
                        name="email"
                        control={control}
                        rules={{ required: true }}
                      />
                      <FormFeedback invalid={errors.email && true}>
                        {errors.email && 'Escribe el email de la persona'}
                      </FormFeedback>
                    </FormGroup>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn bg-cici"
                >
                  {loading ? (
                    'Cargando...'
                  ) : (
                    <>
                      <FiSend /> Enviar invitación
                    </>
                  )}
                </button>
              </Form>
            </div>
            <div className="col-12 col-md-4 p-2">
              <img
                src="../img/shoopping-invite.svg"
                alt="shopping invite - cici"
                className="img-fluid"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default SendInvitation
