import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Button, Card, CardText, CardTitle } from 'reactstrap'

const CardAddres = () => {
  return (
    <Card body>
      <CardTitle tag="h5" className="font-weight-bold">
        Mi Casa
      </CardTitle>
      <CardText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam
        est consequatur temporibus qui deleniti atque porro assumenda recusandae
        sequi quod ipsa dignissimos obcaecati nostrum fugit harum, maiores
        repellat omnis?.
      </CardText>
      <div className="row">
        <div className="col">
          <Button color="warning">
            <AiFillEdit /> Editar
          </Button>
        </div>
        <div className="col">
          <Button color="danger">
            <AiFillDelete /> Eliminar
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default CardAddres
