/* eslint-disable no-undef */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
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
import { GetProvinces } from '../../api/provinces'
import { Provinces } from '../../interfaces/provinces'

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
  province: string
}

const FormAddres = ({ isSession, setNewAddress }: Props) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [dataProvinces, setDataProvinces] = useState<Provinces[]>([])
  const methods = useForm<FormAddres>()
  const { handleSubmit, control, reset, errors, setError } = methods

  const { User } = useSelector((state: RootState) => state.UserReducer)

  const AddressesReducer = useSelector(
    (state: RootState) => state.AddressReducer.Addresses
  )

  const send = async (data: FormAddres) => {
    const { title, phone, city, codePostal, address, province } = data
    console.log(province)
    if (phone.toString().length > 10) {
      setError('phone', { type: 'maxLength' })
      return
    }

    if (!province) {
      setError('province', { type: 'required' })
      return
    }

    setLoading(true)

    try {
      const CreateAddress: CreateAddresses = {
        title,
        phone,
        city,
        address,
        postalCode: codePostal,
        idUser: User.idUser || undefined,
        province,
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

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const { provinces } = await (await GetProvinces()).data
        setDataProvinces(provinces)
      } catch (error) {
        toast.error(error.message)
      }
    }

    fetchProvinces()
  }, [])

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
        <Col md={4}>
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
              rules={{ required: true, maxLength: 10, min: 5 }}
            />
            <FormFeedback invalid={errors.phone && true}>
              {errors.phone?.type === 'maxLength' && 'Maximo de 10 digitos'}
              {errors.phone?.type === 'required' &&
                'Escribe el numero de teléfono'}
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row form className="mt-3">
        <Col md={4}>
          <FormGroup>
            <Label>Provincia</Label>
            <Controller
              as={
                <Input
                  disabled={!dataProvinces.length}
                  invalid={errors.province && true}
                  type="select"
                  name="province"
                >
                  {dataProvinces.map((province) => (
                    <option
                      key={province.codeProvince}
                      value={province.codeProvince}
                    >
                      {province.nombre}
                    </option>
                  ))}
                </Input>
              }
              name="province"
              control={control}
              rules={{ required: true }}
            />
            <FormFeedback invalid={errors.province && true}>
              {errors.province && 'Selecciona la provincia'}
            </FormFeedback>
          </FormGroup>
        </Col>
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
      <FormGroup className="mt-3">
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
