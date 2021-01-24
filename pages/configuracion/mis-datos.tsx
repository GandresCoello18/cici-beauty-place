/* eslint-disable no-console */
import React from 'react'
import { NextSeo } from 'next-seo'
import { GrUpdate } from 'react-icons/gr'
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import { Controller, useForm } from 'react-hook-form'
import Layout from '../../components/layout'

interface FromMiData {
  username: string
  email: string
}

const MyData = () => {
  const methods = useForm<FromMiData>()
  const { handleSubmit, control, reset, errors } = methods

  const send = (_data: FromMiData) => {
    console.log(_data)
    reset()
  }

  return (
    <>
      <NextSeo
        title="Mis Datos | Cici beauty place"
        description="Estos son los datos generales de tu cuenta de cici beauty place."
      />

      <Layout>
        <section className="container mt-md-4 mb-md-4 font-arvo">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 bg-white p-3">
              <h5 className="text-center p-1 mb-3">Mis datos actuales</h5>
              <Form onSubmit={handleSubmit(send)}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <FormGroup>
                      <Label for="username">Nombre de usuario</Label>
                      <Controller
                        as={
                          <Input
                            invalid={errors.username && true}
                            name="username"
                            id="username"
                            defaultValue="gandrescoello18"
                            placeholder="Nombre de usuario"
                          />
                        }
                        type="text"
                        name="currentKey"
                        control={control}
                        rules={{ required: true }}
                      />
                      <FormFeedback invalid={errors.username && true}>
                        {errors.username && 'Escribe algun nombre de usuario'}
                      </FormFeedback>
                    </FormGroup>
                  </div>
                  <div className="col-12 col-md-6">
                    <FormGroup>
                      <Label for="email">Direccion de correo</Label>
                      <Controller
                        as={
                          <Input
                            invalid={errors.email && true}
                            name="email"
                            defaultValue="goyeselcoca@gmail.com"
                            id="email"
                            placeholder="7 o mas caracteres"
                          />
                        }
                        type="email"
                        name="email"
                        control={control}
                        rules={{ required: true }}
                      />
                      <FormFeedback invalid={errors.email && true}>
                        {errors.email && 'Escribe algun direccion de correo'}
                      </FormFeedback>
                    </FormGroup>
                  </div>
                  <div className="col-12 border-top mt-3 p-2">
                    <h3 className="text-center p-2">Mis direcciones</h3>
                    <FormGroup>
                      <Label for="direccion">Mi casa</Label>
                      <Input
                        type="textarea"
                        height="200"
                        name="direccion"
                        id="direccion"
                        placeholder="Especifica la direccion donde quieres que sea entregado tus compras con regularidad, utiliza referencias si es necesario."
                      />
                    </FormGroup>
                    <Button color="link" type="button" className="float-right">
                      Agregar otra direccion
                    </Button>
                  </div>
                </div>

                <button type="submit" className="btn btn-warning">
                  <GrUpdate /> Actualizar Datos
                </button>
              </Form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default MyData
