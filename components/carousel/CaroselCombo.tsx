/* eslint-disable unicorn/explicit-length-check */
import React from 'react'
import Carousel from 'react-multi-carousel'
import Skeleton from 'react-loading-skeleton'
import { ProductsCombo } from '../../interfaces/combo'
import { CardCollageProduct } from '../card/card-collage'
import { responsiveCarousel } from '../../helpers/responsiveCarousel'

interface Props {
  combos: ProductsCombo[]
}

const CaroselCardCombo = ({ combos }: Props) => {
  const fixResponsive = {
    ...responsiveCarousel,
    desktop: {
      breakpoint: { max: 3000, min: 924 },
      items: 1,
    },
  }

  return (
    <Carousel responsive={fixResponsive} autoPlay infinite autoPlaySpeed={2500}>
      {combos.length
        ? combos.map((product) => (
            <div className="p-2" key={product.idCombo}>
              <CardCollageProduct combo={product} />
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

export default CaroselCardCombo
