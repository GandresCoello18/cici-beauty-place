import React from 'react'
import { Card, CardImg } from 'reactstrap'

interface Props {
  sourceImage: string
  title: string
}

const CardImageOnly = ({ sourceImage, title }: Props) => {
  return (
    <Card className="border-round">
      <CardImg
        top
        src={sourceImage}
        alt={title}
        style={{ width: 90, height: 90 }}
      />
    </Card>
  )
}

export default CardImageOnly
