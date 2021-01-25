import React from 'react'
import Carousel from 'react-multi-carousel'
import { Product } from '../../interfaces/products'
import CardProduct from '../card/card-product'

interface Props {
  products: Product[]
}

const CaroselCard = ({ products }: Props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Carousel responsive={responsive} autoPlay infinite autoPlaySpeed={2500}>
      {products.length &&
        products.map((product) => (
          <div className="p-2" key={product.idProducts}>
            <CardProduct product={product} size="normal" />
          </div>
        ))}
    </Carousel>
  )
}

export default CaroselCard
