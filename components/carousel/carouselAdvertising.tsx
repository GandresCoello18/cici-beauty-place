import React, { useState } from 'react'
import { Carousel, CarouselIndicators, CarouselItem } from 'reactstrap'

const items = [
  {
    src: 'img/carousel-7.jpg',
    altText: '@Cici Beauty Place',
  },
  {
    src: 'img/carousel-6.jpg',
    altText: '@Cici Beauty Place',
  },
  {
    src: 'img/carousel-3.jpg',
    altText: '@Cici Beauty Place',
  },
  {
    src: 'img/carousel-4.jpg',
    altText: '@Cici Beauty Place',
  },
  {
    src: 'img/carousel-5.jpg',
    altText: '@Cici Beauty Place',
  },
]

const CarouselAdvertising = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex: React.SetStateAction<number>) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{ width: '100%', height: 300, borderRadius: 12 }}
        />
      </CarouselItem>
    )
  })

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
    </Carousel>
  )
}

export default CarouselAdvertising
