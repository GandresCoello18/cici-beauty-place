import React, { useState } from 'react'
import { Carousel, CarouselIndicators, CarouselItem } from 'reactstrap'

const items = [
  {
    src:
      'https://scontent.fgye18-1.fna.fbcdn.net/v/t1.0-9/130194730_402063837899056_2527391793078731891_o.jpg?_nc_cat=110&ccb=2&_nc_sid=a26aad&_nc_ohc=fPKrhrhizeMAX9KdnZR&_nc_ht=scontent.fgye18-1.fna&oh=7553158ad619e024e2293ea4afd0c49b&oe=6010A6F3',
    altText: '@Cici Beauty Place',
  },
  {
    src:
      'https://scontent.fgye18-1.fna.fbcdn.net/v/t1.0-9/131090421_402063834565723_1857403565382043570_o.jpg?_nc_cat=110&ccb=2&_nc_sid=a26aad&_nc_ohc=bX4CGvoPT3wAX-Pl4Gi&_nc_ht=scontent.fgye18-1.fna&oh=9a9af30638f7fe8f9e98b37ad3ae0ba0&oe=600E2115',
    altText: '@Cici Beauty Place',
  },
  {
    src:
      'https://scontent.fgye18-1.fna.fbcdn.net/v/t1.0-0/p526x296/131014011_401401101298663_4830962396011846323_o.jpg?_nc_cat=106&ccb=2&_nc_sid=a26aad&_nc_ohc=eruIJVRVmSgAX--8siP&_nc_ht=scontent.fgye18-1.fna&tp=6&oh=2634ef18d457b7aba3b881f425269f1c&oe=600E0B56',
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
