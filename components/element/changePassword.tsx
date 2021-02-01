/* eslint-disable no-console */
import React, { useContext, useState } from 'react'
import { GrUpdate } from 'react-icons/gr'
import { Alert, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import { Controller, useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import { UpdatePasswordUser } from '../../api/users'
import { TokenContext } from '../../context/contextToken'
import redirect from '../../lib/redirect'
import SpinnerLoader from './spinner-cici'

interface FromPassword {
  currentKey: string
  newKey: string
}

interface Feedback {
  type: string
  content: string
}

const ChangePassword = () => {
  const { token } = useContext(TokenContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [feedback, setFeedback] = useState<Feedback>({
    type: '',
    content: '',
  })
  const methods = useForm<FromPassword>()
  const { handleSubmit, control, reset, errors } = methods

  const send = async (data: FromPassword) => {
    setLoading(true)
    setFeedback({
      type: '',
      content: '',
    })

    const { currentKey, newKey } = data

    try {
      if (currentKey !== newKey) {
        setFeedback({
          type: 'danger',
          content: 'Las credenciales no son iguales, vuelva a intentarlo',
        })
        setLoading(false)
        return
      }

      if (newKey.length < 7) {
        setFeedback({
          type: 'danger',
          content:
            'Las credenciales deben tener 7 o mas caracteres, vuelva a intentarlo',
        })
        setLoading(false)
        return
      }

      await UpdatePasswordUser({ token, currentKey, newKey })
      setFeedback({
        type: 'success',
        content: 'La clave fue actualizada',
      })

      Cookies.remove('access-token')
      redirect('/login')

      reset()
      setLoading(false)
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
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

        <button type="submit" className="btn btn-warning" disabled={loading}>
          <GrUpdate /> Actualizar {loading && <SpinnerLoader />}
        </button>
      </Form>
      <br />
      <Alert color={feedback.type}>{feedback.content}</Alert>
    </>
  )
}

export default ChangePassword
