/* eslint-disable no-console */
import React, { useContext, useState } from 'react'
import { AiFillDelete, AiFillEdit, AiOutlineSelect } from 'react-icons/ai'
import { GoVerified } from 'react-icons/go'
import { Button, Card, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
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
      await SelectedMyAddress({ token, title })
      const findAddress = AddressesReducer.find((item) => item.title === title)

      if (findAddress) {
        findAddress.selected = !address.selected
        AddressesReducer.splice(0, AddressesReducer.length, findAddress)
        dispatch(setAddress(AddressesReducer))
      }

      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.message)
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
      setLoading(false)
      console.log(error.message)
    }
  }

  return (
    <div className={`${address.selected ? 'border-cici' : 'set-border-cici'}`}>
      <Card body className={`${address.selected && 'select-addres'}`}>
        <CardTitle tag="h5" className="font-weight-bold">
          {address.title}
        </CardTitle>
        <CardText>{address.address}</CardText>
        <CardSubtitle className="mt-1 mb-3">
          <ul>
            <li>
              <strong>Creado: </strong> <u>{address.created_at}</u>
            </li>
            <li>
              <strong>Telefono: </strong> <u>{address.phone}</u>
            </li>
            <li>
              <strong>Codigo postal: </strong>{' '}
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
                  <GoVerified /> En uso
                </>
              ) : (
                <>
                  <AiOutlineSelect /> Elegir
                </>
              )}
            </Button>
          </div>
          <div className="col-4">
            <Button color="warning" size="sm" disabled={loading}>
              <AiFillEdit /> Editar
            </Button>
          </div>
          <div className="col-4">
            <Button
              color="danger"
              size="sm"
              onClick={() => deleteAddress(address.title)}
              disabled={loading}
            >
              <AiFillDelete /> Eliminar
            </Button>
          </div>
          <div className="col-12">{loading && <SpinnerLoader />}</div>
        </div>
      </Card>
    </div>
  )
}

export default CardAddres
