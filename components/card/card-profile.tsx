import React, { ReactNode } from 'react'
import { Card, CardImg } from 'reactstrap'

interface Props {
  imgSource: string
  alt: string
  name: string
  cargo: string
  description: string
  children: ReactNode
}

const CardProfile = ({
  imgSource,
  alt,
  name,
  description,
  cargo,
  children,
}: Props) => {
  return (
    <Card className="img-profile">
      <CardImg top width="100%" src={imgSource} alt={alt} />
      <div className="capa-profile font-arvo">
        <div className="p-3 border-bottom">
          <h5 className="text-left">{name}</h5>
          <strong>{cargo}</strong>
        </div>
        <div className="p-3">
          <p className="p-1">{description}</p>
        </div>
        {children}
      </div>
    </Card>
  )
}

export default CardProfile
