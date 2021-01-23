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
import Tag from '../element/tag'

interface Props {
  sourceImage: string
  title?: string
  sold?: number
  description?: string
  price?: number
  size?: 'small' | 'normal'
  imageOnly: boolean
}

const CardProduct = ({
  sourceImage,
  title,
  sold,
  description,
  price,
  size,
  imageOnly,
}: Props) => {
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
      height: 'auto',
    },
    tachado: {
      padding: 4,
      color: '#999',
      textDecoration: 'line-through',
    },
  }

  return (
    <>
      <Link href={`/productos/${0}`}>
        <a
          href={`/productos/${0}`}
          style={{ textDecoration: 'none', color: '#4b4a4a' }}
        >
          <Card className="border-round">
            <CardImg top src={sourceImage} alt={title} style={Styles.image} />
            {!imageOnly && (
              <CardBody>
                <CardTitle
                  tag="h5"
                  style={
                    size === 'small' ? Styles.titleSmall : Styles.titleNormal
                  }
                >
                  {title}
                </CardTitle>
                <CardText>
                  <Tag /> &nbsp; <strong>US ${price}</strong>
                  <br />
                  <span style={Styles.tachado}>US ${10.9}</span> &nbsp;{' '}
                  <span className="tag-discount">-5%</span>
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
                  <br />
                  {sold && `${sold} Vendidos`}
                </CardSubtitle>
                <CardText>{description && description}</CardText>
              </CardBody>
            )}
          </Card>
        </a>
      </Link>
    </>
  )
}

export default CardProduct
