import React from 'react'
import { Badge } from 'reactstrap'
import { BASE_API } from '../../api'
import { Cart } from '../../interfaces/products'

interface Props {
  product: Cart
}

const CartProduct = ({ product }: Props) => {
  return (
    <>
      <div className="card mb-3" style={{ width: '100%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${BASE_API}/static/${product.source}`}
              width="100%"
              className="p-2"
              alt={product.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <small className="text-cici">
                Solo queda(n) <strong>5</strong> en stock (hay más unidades en
                camino)
              </small>
              <Badge
                color={product.status === 'Disponible' ? 'success' : 'danger'}
              >
                {product.status}
              </Badge>
              <Badge
                color="danger float-right cursor-pointer"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Eliminar del carrrito"
              >
                X
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartProduct
