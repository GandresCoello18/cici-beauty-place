import React from 'react'
import Carousel from 'react-multi-carousel'
import CardImageOnly from '../card/card-image-only'

const ListImage = () => {
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
    <Carousel responsive={responsive}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
        <div className="p-1 border-list-image-preview mt-2" key={item}>
          <CardImageOnly
            title=""
            sourceImage="https://ae01.alicdn.com/kf/H54f3b265518e41b0a993d1a915488810d/FLD5-15Pcs-Makeup-Brushes-Tool-Set-Cosmetic-Powder-Eye-Shadow-Foundation-Blush-Blending-Beauty-Make-Up.jpg_220x220xz.jpg_.webp"
          />
        </div>
      ))}
    </Carousel>
  )
}

export default ListImage
