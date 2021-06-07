/* eslint-disable unicorn/explicit-length-check */
import React from 'react'
import Carousel from 'react-multi-carousel'
import Skeleton from 'react-loading-skeleton'
import { Product } from '../../interfaces/products'
import CardProduct from '../card/card-product'
import { responsiveCarousel } from '../../helpers/responsiveCarousel'

interface Props {
  products: Product[]
}

const CaroselCard = ({ products }: Props) => {
  return (
    <Carousel
      responsive={responsiveCarousel}
      autoPlay
      infinite
      autoPlaySpeed={2500}
    >
      {products.length
        ? products.map((product) => (
            <div className="p-2" key={product.idProducts}>
              <CardProduct product={product} size="normal" />
            </div>
          ))
        : [0, 1, 2, 3, 4].map((item) => (
            <div key={item} className="text-center">
              <Skeleton width={240} height={300} />
            </div>
          ))}
    </Carousel>
  )
}

export default CaroselCard
