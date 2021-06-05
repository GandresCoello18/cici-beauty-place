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
import { ProductsCombo } from '../../interfaces/combo'

interface Props {
  combo: ProductsCombo
}

export const CardCollageProduct = ({ combo }: Props) => {
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
    photos: combo.photos,
    showNumOfRemainingPhotos: true,
  }

  return (
    <>
      {combo.isNew ? (
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
            {combo.name}
          </CardTitle>
          <CardText>
            <strong className="mr-4">
              US $
              {calculatePrice({
                discount: combo.discount,
                price: combo.price,
              })}
            </strong>
            {combo.discount ? (
              <>
                <span className="tachado">US ${combo.price}</span> &nbsp;{' '}
                <span className="tag-discount">-${combo.discount}%</span>
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
              <div className="col-12 mb-3">
                {combo.sold ? `${14} Vendidos` : ''}
              </div>
            </div>
          </CardSubtitle>
        </CardBody>
        <Link href={`/productos/${combo.idCombo}`}>
          <a
            style={{ textDecoration: 'none', border: '2px solid #f097ac' }}
            className="btn btn-block border-cici"
          >
            <span className="text-cici">Más detalles</span>
          </a>
        </Link>
      </Card>
    </>
  )
}
