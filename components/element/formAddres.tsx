/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import React, { Dispatch, SetStateAction, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toast'
import { newAdrees } from '../../api/addresses'
import { Addresses, CreateAddresses } from '../../interfaces/address'
import SpinnerLoader from './spinner-cici'
import { RootState } from '../../reducers'
import { setAddress } from '../../reducers/address'

interface Props {
  isSession: boolean
  setNewAddress?: Dispatch<SetStateAction<boolean>> | undefined
}
interface FormAddres {
  title: string
  phone: number
  city: string
  codePostal: number
  address: string
}

const FormAddres = ({ isSession, setNewAddress }: Props) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const methods = useForm<FormAddres>()
  const { handleSubmit, control, reset, errors } = methods

  const { User } = useSelector((state: RootState) => state.UserReducer)

  const AddressesReducer = useSelector(
    (state: RootState) => state.AddressReducer.Addresses
  )

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
        idUser: User.idUser || undefined,
      }

      const response = await newAdrees({ address: CreateAddress })
      const newAddress: Addresses = response.data.address
      dispatch(setAddress([...AddressesReducer, ...[newAddress]]))

      reset()
      setLoading(false)
      setNewAddress && setNewAddress(false)
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
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
            <Label>Teléfono</Label>
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
              {errors.phone && 'Escribe el numero de teléfono'}
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
            <Label>Código Postal</Label>
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
        <Label>Dirección</Label>
        <Controller
          as={
            <Input
              invalid={errors.address && true}
              type="textarea"
              placeholder="Especifique su dirección y utiliza referencias de como llegar."
            />
          }
          name="address"
          control={control}
          rules={{ required: true }}
        />
        <FormFeedback invalid={errors.address && true}>
          {errors.address && 'Escribe la dirección con referencias.'}
        </FormFeedback>
      </FormGroup>
      <Button
        type="submit"
        disabled={loading}
        style={{ backgroundColor: '#efccd3', color: '#000' }}
        block
      >
        {isSession ? 'Registrar dirección' : 'Utilizar esta dirección'}
        {loading && <SpinnerLoader />}
      </Button>
    </Form>
  )
}

export default FormAddres
