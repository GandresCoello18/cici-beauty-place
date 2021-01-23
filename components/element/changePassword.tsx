/* eslint-disable no-console */
import React from 'react'
import { GrUpdate } from 'react-icons/gr'
import { Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import { Controller, useForm } from 'react-hook-form'

interface FromPassword {
  currentKey: string
  newKey: string
}

const ChangePassword = () => {
  const methods = useForm<FromPassword>()
  const { handleSubmit, control, reset, errors } = methods

  const send = (_data: FromPassword) => {
    console.log(_data)
    reset()
  }

  return (
    <>
      <h5 className="text-center p-1 mb-3">Cambiar clave de mi cuenta</h5>
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
    </>
  )
}

export default ChangePassword
