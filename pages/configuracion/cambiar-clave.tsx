/* eslint-disable no-console */
import { Store } from 'redux'
import React from 'react'
import { NextSeo } from 'next-seo'
import { GrUpdate } from 'react-icons/gr'
import { Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import { Controller, useForm } from 'react-hook-form'
import { AllAction, RootState } from '../../reducers'
import { setTitle } from '../../reducers/app'
import Layout from '../../components/layout'

interface FromPassword {
  currentKey: string
  newKey: string
}

const CambiarClave = () => {
  const methods = useForm<FromPassword>()
  const { handleSubmit, control, reset, errors } = methods

  const send = (_data: FromPassword) => {
    console.log(_data)
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
            <div className="col-12 col-md-8 bg-white p-3">
              <h5 className="text-center p-1 mb-3">
                Cambiar clave de mi cuenta
              </h5>
              <Form onSubmit={handleSubmit(send)}>
                <FormGroup>
                  <Label for="currentKey">Clave secreta actual</Label>
                  <Controller
                    as={
                      <Input
                        invalid={errors.currentKey && true}
                        type="password"
                        name="currentKey"
                        id="currentKey"
                        placeholder="*******"
                      />
                    }
                    type="password"
                    name="currentKey"
                    control={control}
                    rules={{ required: true }}
                  />
                  <FormFeedback invalid={errors.currentKey && true}>
                    {errors.currentKey && 'Escribe tu clave secreta actual'}
                  </FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="newKey">Nueva clave secreta</Label>
                  <Controller
                    as={
                      <Input
                        invalid={errors.newKey && true}
                        type="password"
                        name="newKey"
                        id="newKey"
                        placeholder="7 o mas caracteres"
                      />
                    }
                    type="password"
                    name="newKey"
                    control={control}
                    rules={{ required: true }}
                  />
                  <FormFeedback invalid={errors.newKey && true}>
                    {errors.newKey && 'Escribe tu clave secreta nueva'}
                  </FormFeedback>
                </FormGroup>

                <button type="submit" className="btn btn-warning">
                  <GrUpdate /> Actualizar
                </button>
              </Form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

CambiarClave.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering CambiarClave'))
}

export default CambiarClave
