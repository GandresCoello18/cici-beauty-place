import Link from 'next/link'
import React from 'react'
import { AiOutlineHistory } from 'react-icons/ai'
import { Card, CardImg } from 'reactstrap'
import { BASE_API_IMAGES_CLOUDINNARY_SCALE } from '../../api'
import { Product } from '../../interfaces/products'

interface Props {
  history: Product[]
}

export const SeccionHistory = ({ history }: Props) => {
  return (
    <div className="row bg-white border-round font-arvo">
      <div
        className="col-12 p-2"
        style={{
          backgroundColor: '#f1d7dd',
          width: '100%',
          fontWeight: 'bold',
          padding: 5,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      >
        <h6 className="text-center font-weight-bold">
          <AiOutlineHistory size={20} /> &nbsp; Historial reciente
        </h6>
      </div>
      {history.map((product) => (
        <div className="col-auto p-2" key={product.idProducts}>
          <Link href={`/productos/${product.idProducts}`}>
            <a href={`/productos/${product.idProducts}`}>
              <Card className="border-round">
                <CardImg
                  top
                  src={`${BASE_API_IMAGES_CLOUDINNARY_SCALE}/${product.source}`}
                  alt={product.title}
                  style={{ width: 90, height: 90 }}
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title={product.title}
                />
              </Card>
            </a>
          </Link>
        </div>
      ))}

      {history.length === 0 ? (
        <img
          className="img-fluid p-3"
          src={`${BASE_API_IMAGES_CLOUDINNARY_SCALE}/util/undraw_product_tour_foyt_1_w2arx4.svg`}
          style={{ height: 200, width: '100%' }}
          alt="empty history"
        />
      ) : (
        ''
      )}
      <div className="col-12 p-2 text-center">
        <Link href="/mi-historial">
          <a
            href="/mi-historial"
            className="cursor-pointer"
            style={{ color: '#999' }}
          >
            Ver Más
          </a>
        </Link>
      </div>
    </div>
  )
}
