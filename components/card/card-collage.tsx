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
import { ReactPhotoCollage } from 'react-photo-collage'
import Link from 'next/link'
import { calculatePrice } from '../../helpers/calculatePrice'

export const CardCollageProduct = () => {
  const Styles: any = {
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

  const setting = {
    width: '100%',
    height: ['250px', '170px'],
    layout: [1, 2],
    photos: [
      {
        source:
          'http://res.cloudinary.com/cici/image/upload/v1616791874/products/c5f3c5dc-98c7-40fe-b35f-3ed949818c46',
      },
      {
        source:
          'http://res.cloudinary.com/cici/image/upload/v1616791874/products/58eadd77-247d-45b1-8a09-fe2d3173d45d',
      },
      {
        source:
          'http://res.cloudinary.com/cici/image/upload/v1616791874/products/8af0972c-5038-4259-8caf-9ee5ef51d68a',
      },
      {
        source:
          'http://res.cloudinary.com/cici/image/upload/v1616791874/products/ff78e16e-f59b-49e7-b608-4dad229c38cb',
      },
      {
        source:
          'http://res.cloudinary.com/cici/image/upload/v1616791874/products/f41ab18b-a109-4239-896e-2b951f329631',
      },
    ],
    showNumOfRemainingPhotos: true,
  }

  return (
    <>
      {true ? (
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
        <ReactPhotoCollage {...setting} />
        <CardBody>
          <CardTitle tag="h5" style={Styles.titleNormal}>
            fediofcjei9dfuief
          </CardTitle>
          <CardText>
            <strong className="mr-4">
              US $
              {calculatePrice({
                discount: 5,
                price: 25,
              })}
            </strong>
            {5 ? (
              <>
                <span className="tachado">US ${25}</span> &nbsp;{' '}
                <span className="tag-discount">-${5}%</span>
              </>
            ) : (
              ''
            )}
          </CardText>
          <CardSubtitle
            tag="h6"
            className="mb-2 text-muted"
            style={Styles.categoryNormal}
          >
            <div className="row">
              <div className="col-12 mb-3">{true ? `${14} Vendidos` : ''}</div>
            </div>
          </CardSubtitle>
        </CardBody>
        <Link href="/productos/">
          <a style={{ textDecoration: 'none' }} className="btn btn-block">
            <span className="text-cici">Más detalles</span>
          </a>
        </Link>
      </Card>
    </>
  )
}
