import React from 'react'
import { AiFillDelete, AiFillEdit, AiOutlineSelect } from 'react-icons/ai'
import { GoVerified } from 'react-icons/go'
import { Button, Card, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { Addresses } from '../../interfaces/address'

interface Props {
  address: Addresses
}

const CardAddres = ({ address }: Props) => {
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
            <Button color="success" size="sm">
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
            <Button color="warning" size="sm">
              <AiFillEdit /> Editar
            </Button>
          </div>
          <div className="col-4">
            <Button color="danger" size="sm">
              <AiFillDelete /> Eliminar
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CardAddres
