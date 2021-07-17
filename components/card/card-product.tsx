/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  Badge,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap'
import Link from 'next/link'
import StarRatingComponent from 'react-star-rating-component'
import { MdPeople } from 'react-icons/md'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Product } from '../../interfaces/products'
import { BASE_API_IMAGES_CLOUDINNARY } from '../../api'
import { calculatePrice } from '../../helpers/calculatePrice'
import { ListColors } from '../element/colors'

interface Props {
  product: Product
  size?: 'small' | 'normal'
}

const CardProduct = ({ product, size }: Props) => {
  const Styles: any = {
    titleSmall: {
      fontSize: 13,
    },
    categorySmall: {
      fontSize: 11,
    },
    titleNormal: {
      fontSize: 18,
    },
    categoryNormal: {
      fontSize: 15,
    },
    image: {
      width: '100%',
      padding: 2,
      backgroundColor: 'rgb(244, 237, 237)',
    },
    encima: {
      zIndex: 9,
      fontSize: 14,
    },
  }

  return (
    <>
      <Link href={`/productos/${product.idProducts}`}>
        <a style={{ textDecoration: 'none', color: '#4b4a4a' }}>
          {product.isNew ? (
            <Badge
              color="info"
              className="position-absolute top-right p-1"
              style={Styles.encima}
            >
              Nuevo
            </Badge>
          ) : (
            ''
          )}
          <Card className="border-round">
            <LazyLoadImage
              alt={product.title}
              src={`${BASE_API_IMAGES_CLOUDINNARY}/${product.source}`}
              style={Styles.image}
              className="p-3"
              effect="blur"
            />
            {product.available < 4 && (
              <div
                className="bg-secondary text-center text-white font-weight-bold position-absolute top-0 p-3"
                style={{ width: '100%', opacity: 0.9 }}
              >
                AGOTADO
              </div>
            )}
            <CardBody>
              <CardTitle
                tag="h5"
                style={
                  size === 'small' ? Styles.titleSmall : Styles.titleNormal
                }
              >
                {product.title}
              </CardTitle>
              <CardText>
                <strong className="mr-4">
                  US $
                  {calculatePrice({
                    discount: product.discount,
                    price: product.price,
                  })}
                </strong>
                {product.discount ? (
                  <>
                    <span className="tachado">US ${product.price}</span> &nbsp;{' '}
                    <span className="tag-discount">-${product.discount}%</span>
                  </>
                ) : (
                  ''
                )}
              </CardText>
              <CardSubtitle
                tag="h6"
                className="mb-2 text-muted"
                style={
                  size === 'small'
                    ? Styles.categorySmall
                    : Styles.categoryNormal
                }
              >
                <div className="row">
                  <div className="col-12 mb-3">
                    {product.sold ? `${product.sold} Vendidos` : ''}
                  </div>
                  {product.stars ? (
                    <div className="col-12">
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={product.stars || 0}
                      />
                      <span
                        className="position-absolute top-0 ml-3"
                        style={{ color: 'rgb(255, 180, 0)' }}
                      >
                        {product.starsPeople}{' '}
                        <MdPeople color="rgb(255, 180, 0)" />
                      </span>
                    </div>
                  ) : (
                    ''
                  )}

                  {product.colors && (
                    <div className="p-1">
                      <ListColors colors={JSON.parse(product.colors)} />
                    </div>
                  )}
                </div>
              </CardSubtitle>
            </CardBody>
          </Card>
        </a>
      </Link>
    </>
  )
}

export default CardProduct
