/* eslint-disable no-console */
import React, { useContext, useState } from 'react'
import { NextSeo } from 'next-seo'
import { GrUpdate } from 'react-icons/gr'
import {
  Alert,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { toast } from 'react-toast'
import Layout from '../../components/layout'
import { RootState } from '../../reducers'
import { TokenContext } from '../../context/contextToken'
import CardAddres from '../../components/card/card-addres'
import FormAddres from '../../components/element/formAddres'
import { UpdateUser } from '../../api/users'
import SpinnerLoader from '../../components/element/spinner-cici'

interface FromMiData {
  username: string
  email: string
}

const MyData = () => {
  const [newAddress, setNewAddress] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const { token } = useContext(TokenContext)
  const { User } = useSelector((state: RootState) => state.UserReducer)
  const methods = useForm<FromMiData>()
  const { handleSubmit, register, reset, errors } = methods

  const { Addresses } = useSelector((state: RootState) => state.AddressReducer)

  const send = async (data: FromMiData) => {
    setLoading(true)
    const { username, email } = data

    try {
      await UpdateUser({ token, userName: username, email })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }

    reset()
  }

  const renderUpdateData = () => {
    return (
      <div className="col-12 col-md-8 p-3 mb-4">
        <h3 className="text-center p-1 mb-3">Mis datos actuales</h3>
        <Form onSubmit={handleSubmit(send)}>
          <div className="row">
            <div className="col-12 col-md-6">
              <FormGroup>
                <Label for="username">Nombre de usuario</Label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  placeholder="Nombre de usuario"
                  defaultValue={User.userName}
                  ref={register({ required: true })}
                />
                <FormFeedback invalid={errors.username && true}>
                  {errors.username && 'Escribe algun nombre de usuario'}
                </FormFeedback>
              </FormGroup>
            </div>
            <div className="col-12 col-md-6">
              <FormGroup>
                <Label for="email">Direccion de correo</Label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Direccion de correo"
                  defaultValue={User.email}
                  ref={register({ required: true })}
                />
                <FormFeedback invalid={errors.email && true}>
                  {errors.email && 'Escribe algun direccion de correo'}
                </FormFeedback>
              </FormGroup>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <FormGroup>
                <Label for="username">Te unistes el</Label>
                <Input disabled defaultValue={`${User.created_at}`} />
              </FormGroup>
            </div>
            <div className="col-12 col-md-6">
              <FormGroup>
                <Label for="email">Proveedor de datos</Label>
                <Input disabled value={User.provider} />
              </FormGroup>
            </div>
          </div>

          <button type="submit" className="btn btn-warning" disabled={loading}>
            <GrUpdate /> Actualizar Datos {loading && <SpinnerLoader />}
          </button>
        </Form>
      </div>
    )
  }

  const renderFromAddress = () => {
    return (
      <div className="col-12 col-md-8">
        <h3 className="p-2 text-center">Nueva Direccion</h3>
        <FormAddres isSession setNewAddress={setNewAddress} />
      </div>
    )
  }

  return (
    <>
      <NextSeo
        title="Mis Datos | Cici beauty place"
        description="Estos son los datos generales de tu cuenta de cici beauty place."
      />

      <Layout>
        <section className="container mt-md-4 mb-md-4 font-arvo">
          <div className="row justify-content-center bg-white">
            {newAddress ? renderFromAddress() : renderUpdateData()}
            <div className="col-12 col-md-8 border-top p-2">
              {!newAddress && (
                <>
                  <h3 className="text-center p-2 mt-4">Mis direcciones</h3>
                  <div className="row">
                    {Addresses.map((address) => (
                      <div
                        className="col-12 col-md-6 mb-2"
                        key={address.idAddresses}
                      >
                        <div className="cursor-pointer">
                          <CardAddres address={address} />
                        </div>
                      </div>
                    ))}

                    {!Addresses.length && (
                      <div className="col-12">
                        <Alert color="info">
                          No hay direcciones registradas.
                        </Alert>
                      </div>
                    )}
                  </div>
                </>
              )}

              <Button
                color="link"
                type="button"
                className="float-right"
                onClick={() => setNewAddress(!newAddress)}
              >
                {newAddress ? 'Ver mis direcciones' : 'Agregar otra direccion'}
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default MyData
