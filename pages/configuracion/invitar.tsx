/* eslint-disable no-console */
import React from 'react'
import { NextSeo } from 'next-seo'
import { BiSad } from 'react-icons/bi'
import { FiSend } from 'react-icons/fi'
import { AiFillCopy } from 'react-icons/ai'
import { Alert, Form, FormFeedback, FormGroup, Input } from 'reactstrap'
import { Controller, useForm } from 'react-hook-form'
import Layout from '../../components/layout'

interface FromInvite {
  name: string
  email: string
}

const SendInvitation = () => {
  const methods = useForm<FromInvite>()
  const { handleSubmit, control, reset, errors } = methods

  const send = (_data: FromInvite) => {
    console.log(_data)
    reset()
  }

  return (
    <>
      <NextSeo
        title="Invitar a alguien | Cici beauty place"
        description="Invita a tus amigos y familiares y por cada compra mayor a 20 recibiras promociones y descuentos para ti."
      />

      <Layout>
        <section className="container mt-md-4 mb-md-4 font-arvo">
          <div className="row justify-content-center bg-white">
            <div className="col-12 col-md-10 p-3 mb-3">
              <Alert color="primary">
                <BiSad /> No has referido amigos, aun no tienes promos o
                descuentos.
              </Alert>
              <h4>Seguro conoces a alguien que le gusta nuestros productos</h4>
              <p>
                Comparte tu link de referidos y cada vez que una persona compre
                en un valor mayor a $20 recibiras promociones y descuentos para
                ti.
              </p>
            </div>
            <div className="col-12 col-md-10 p-3 mb-3">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10">
                  <Input
                    type="url"
                    value="https://cici-beauty-place.com/invite/mi-user"
                    className="p-3 font-weight-bold"
                    disabled
                  />
                </div>
                <div className="col-12 col-md-2">
                  <button type="button" className="btn bg-cici p-2 w-100 h-100">
                    <AiFillCopy /> Copiar
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 p-3">
              <div className="border-bottom p-3">
                <h3>Invita a un amigo</h3>
              </div>
              <br />
              <p>
                Envia tu enlace de referidos al correo de hasta <b>3 amigos</b>{' '}
                por mes.
              </p>
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

                <button type="submit" className="btn bg-cici">
                  <FiSend /> Enviar invitacion
                </button>
              </Form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default SendInvitation
