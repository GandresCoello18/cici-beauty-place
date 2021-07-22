/* eslint-disable no-console */
import React, { useContext, useState } from 'react'
import { AiFillDelete, AiFillEdit, AiOutlineSelect } from 'react-icons/ai'
import { GoVerified } from 'react-icons/go'
import { Button, Card, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toast'
import { DeleteMyAddress, SelectedMyAddress } from '../../api/addresses'
import { Addresses } from '../../interfaces/address'
import SpinnerLoader from '../element/spinner-cici'
import { TokenContext } from '../../context/contextToken'
import { setAddress } from '../../reducers/address'
import { RootState } from '../../reducers'

interface Props {
  address: Addresses
}

const CardAddres = ({ address }: Props) => {
  const dispatch = useDispatch()
  const { token } = useContext(TokenContext)
  const [loading, setLoading] = useState<boolean>(false)

  const AddressesReducer = useSelector(
    (state: RootState) => state.AddressReducer.Addresses
  )

  const selectedAddress = async (title: string) => {
    setLoading(true)

    try {
      const distintoAddress = AddressesReducer.filter(
        (item) => item.title !== title
      )
      const SelectAddres = distintoAddress.some((item) => item.selected)

      if (SelectAddres) {
        toast.warn(
          'Ya tienes dirección en uso, deja de usar y escoge otra dirección'
        )
        setLoading(false)
      } else {
        await SelectedMyAddress({ token, title })

        const findAddress = AddressesReducer.find(
          (item) => item.title === title
        )
        if (findAddress) {
          findAddress.selected = !address.selected
          /* AddressesReducer.splice(0, AddressesReducer.length, findAddress)
        dispatch(setAddress(AddressesReducer)) */
        }

        setLoading(false)
      }
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  const deleteAddress = async (title: string) => {
    setLoading(true)

    try {
      await DeleteMyAddress({ token, title })

      const updateReducer = AddressesReducer.filter(
        (item) => item.title !== title
      )

      dispatch(setAddress(updateReducer))
      setLoading(false)
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <div className={`${address.selected ? 'border-cici' : 'set-border-cici'}`}>
      <Card body className={`${address.selected && 'select-addres'}`}>
        <CardTitle tag="h5" className="font-weight-bold">
          {address.selected ? <GoVerified /> : ''} {address.title}
        </CardTitle>
        <CardText>{address.address}</CardText>
        <CardSubtitle className="mt-1 mb-3">
          <ul>
            <li className="mb-1">
              <strong>Creado: </strong> <u>{address.created_at}</u>
            </li>
            <li className="mb-1">
              <strong>Teléfono: </strong> <u>{address.phone}</u>
            </li>
            <li className="mb-1">
              <strong>Provincia: </strong> <u>{address.province}</u>
            </li>
            <li className="mb-1">
              <strong>Ciudad: </strong> <u>{address.city}</u>
            </li>
            <li>
              <strong>Código postal: </strong>{' '}
              <u>{address.postalCode || 'No especificado'}</u>
            </li>
          </ul>
        </CardSubtitle>
        <div className="row justify-content-center">
          <div className="col-4">
            <Button
              color={address.selected ? 'secondary' : 'success'}
              size="sm"
              onClick={() => selectedAddress(address.title)}
              disabled={loading}
            >
              {address.selected ? (
                <>
                  <GoVerified /> Dejar uso
                </>
              ) : (
                <>
                  <AiOutlineSelect /> Elegir
                </>
              )}
            </Button>
          </div>
          <div className="col-4">
            <Button
              title="editar dirección"
              color="warning"
              size="sm"
              disabled={loading}
            >
              <AiFillEdit />
            </Button>
          </div>
          <div className="col-4">
            <Button
              color="danger"
              title="borrar dirección"
              size="sm"
              onClick={() => deleteAddress(address.title)}
              disabled={loading}
            >
              <AiFillDelete />
            </Button>
          </div>
          <div className="col-12">{loading && <SpinnerLoader />}</div>
        </div>
      </Card>
    </div>
  )
}

export default CardAddres
