/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap'
import Link from 'next/link'
import StarRatingComponent from 'react-star-rating-component'
import { MdPeople } from 'react-icons/md'
import { Product } from '../../interfaces/products'
import { BASE_API } from '../../api'

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
      height: 200,
      padding: 2,
      backgroundColor: 'rgb(244, 237, 237)',
    },
    tachado: {
      padding: 4,
      color: '#999',
      textDecoration: 'line-through',
    },
  }

  const calculatePrice = () => {
    if (product.discount && product.price) {
      const porcent: number = (product.price * product.discount) / 100
      return (product.price - porcent).toFixed(2)
    }

    return product.price
  }

  return (
    <>
      <Link href={`/productos/${product.idProducts}`}>
        <a style={{ textDecoration: 'none', color: '#4b4a4a' }}>
          <Card className="border-round">
            <CardImg
              top
              src={`${BASE_API}/static/${product.source}`}
              alt={product.title}
              style={Styles.image}
              className="p-3"
            />
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
                <strong className="mr-4">US ${calculatePrice()}</strong>
                {product.discount ? (
                  <>
                    <span style={Styles.tachado}>US ${product.price}</span>{' '}
                    &nbsp;{' '}
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
                    {product.sold && `${product.sold} Vendidos`}
                  </div>
                  <div className="col-12">
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={product.stars || 0}
                      onStarClick={(
                        nextValue: number,
                        prevValue: number,
                        name: string
                      ) => console.log(`${nextValue} - ${prevValue} - ${name}`)}
                    />
                    <span
                      className="position-absolute top-0 ml-3"
                      style={{ color: 'rgb(255, 180, 0)' }}
                    >
                      {product.starsPeople}{' '}
                      <MdPeople color="rgb(255, 180, 0)" />
                    </span>
                  </div>
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
