import React from 'react'
import { Badge } from 'reactstrap'

const CartProduct = () => {
  return (
    <>
      <div className="card mb-3" style={{ width: '100%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://ae01.alicdn.com/kf/H54f3b265518e41b0a993d1a915488810d/FLD5-15Pcs-Makeup-Brushes-Tool-Set-Cosmetic-Powder-Eye-Shadow-Foundation-Blush-Blending-Beauty-Make-Up.jpg_220x220xz.jpg_.webp"
              width="100%"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural...
                <br />
                <small className="text-cici">
                  Solo queda(n) <strong>5</strong> en stock (hay más unidades en
                  camino)
                </small>
              </p>
              <Badge color="success">Disponible</Badge>
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
