import React from 'react'
import { Card, CardImg } from 'reactstrap'

interface Props {
  sourceImage: string
  title: string
}

const CardImageOnly = ({ sourceImage, title }: Props) => {
  return (
    <Card className="border-round">
      <CardImg top src={sourceImage} alt={title} />
    </Card>
  )
}

export default CardImageOnly
