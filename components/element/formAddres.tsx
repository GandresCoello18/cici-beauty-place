/* eslint-disable no-console */
import React, { useState } from 'react'
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap'
import { Controller, useForm } from 'react-hook-form'
import { newAdrees } from '../../api/addresses'
import { CreateAddresses } from '../../interfaces/address'
import SpinnerLoader from './spinner-cici'

interface Props {
  isSession: boolean
}
interface FormAddres {
  title: string
  phone: number
  city: string
  codePostal: number
  address: string
}

const FormAddres = ({ isSession }: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const methods = useForm<FormAddres>()
  const { handleSubmit, control, reset, errors } = methods

  const send = async (data: FormAddres) => {
    setLoading(true)
    const { title, phone, city, codePostal, address } = data

    try {
      const CreateAddress: CreateAddresses = {
        title,
        phone,
        city,
        address,
        postalCode: codePostal,
        idUser: '',
      }

      await newAdrees({ address: CreateAddress })
      reset()
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Form onSubmit={handleSubmit(send)}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Titulo</Label>
            <Controller
              as={
                <Input
                  invalid={errors.title && true}
                  type="text"
                  name="title"
                  placeholder="Mi casa - Mi departamento - Mi lugar de trabajo"
                />
              }
              name="title"
              control={control}
              rules={{ required: true }}
            />
            <FormFeedback invalid={errors.title && true}>
              {errors.title && 'Escribe el titulo de la direccion'}
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Telefono</Label>
            <Controller
              as={
                <Input
                  invalid={errors.phone && true}
                  type="number"
                  name="phone"
                  placeholder="Tu numero celular"
                />
              }
              name="phone"
              control={control}
              rules={{ required: true }}
            />
            <FormFeedback invalid={errors.phone && true}>
              {errors.phone && 'Escribe el numero de telefono'}
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label>Ciudad</Label>
            <Controller
              as={
                <Input
                  invalid={errors.title && true}
                  type="text"
                  name="city"
                  placeholder="Ciudad de destino"
                />
              }
              name="city"
              control={control}
              rules={{ required: true }}
            />
            <FormFeedback invalid={errors.city && true}>
              {errors.city && 'Escribe el numero de telefono'}
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Codigo Postal</Label>
            <Controller
              as={
                <Input
                  type="number"
                  name="codePostal"
                  placeholder="(opcional)"
                />
              }
              name="codePostal"
              control={control}
              rules={{ required: true }}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label>Direccion</Label>
        <Controller
          as={
            <Input
              invalid={errors.address && true}
              type="textarea"
              name="address"
              placeholder="Especifique su direccion y utilize referencias de como llegar."
            />
          }
          name="codePostal"
          control={control}
          rules={{ required: true }}
        />
        <FormFeedback invalid={errors.address && true}>
          {errors.address && 'Escribe la direccion con referencias.'}
        </FormFeedback>
      </FormGroup>
      <Button
        type="submit"
        disabled={loading}
        style={{ backgroundColor: '#efccd3', color: '#000' }}
        block
      >
        {isSession ? 'Registrar direccion' : 'Utilizar esta direccion'}
        {loading && <SpinnerLoader />}
      </Button>
    </Form>
  )
}

export default FormAddres
