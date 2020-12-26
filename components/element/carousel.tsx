import React, { useState } from 'react'
import {
  Carousel,
  CarouselCaption,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap'

const items = [
  {
    src:
      'https://images.pexels.com/photos/1327689/pexels-photo-1327689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src:
      'https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src:
      'https://images.pexels.com/photos/6148/brush-makeup-make-up-brushes.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
]

const CarouselElement = () => {
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
          style={{ width: 'cover', height: 300, borderRadius: 12 }}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
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

export default CarouselElement
