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
  }

  return (
    <>
      <Link href={`/producto/${0}`}>
        <a
          href={`/producto/${0}`}
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
