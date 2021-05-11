import React from 'react'
import { Card } from 'reactstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface Props {
  sourceImage: string
  title: string
}

const CardImageOnly = ({ sourceImage, title }: Props) => {
  return (
    <Card className="border-round">
      <LazyLoadImage alt={title} src={sourceImage} effect="blur" width="100%" />
    </Card>
  )
}

export default CardImageOnly
