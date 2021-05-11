/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { Dispatch, SetStateAction } from 'react'
import Carousel from 'react-multi-carousel'
import {
  BASE_API_IMAGES_CLOUDINNARY,
  BASE_API_IMAGES_CLOUDINNARY_SCALE,
} from '../../api'
import { SourcesProduct } from '../../interfaces/products'
import CardImageOnly from '../card/card-image-only'

interface Props {
  sources: SourcesProduct[]
  setPreview: Dispatch<SetStateAction<{ src: string; type: string }>>
}

const ListImage = ({ sources, setPreview }: Props) => {
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

  const borderSelect = (event: any) => {
    const list: any = document.querySelectorAll('.border-cici')
    for (const element of list) {
      element.classList.remove('border-cici')
    }
    // event.target.parentElement.classList.add('border-cici')
    event.target.classList.add('border-cici')
  }

  return (
    <Carousel responsive={responsive}>
      {sources.map((item: SourcesProduct, index: number) => (
        <div className="p-1 mt-2" key={item.idSourceProduct}>
          {item.kind === 'IMAGEN' ? (
            <div
              className={`${index + 1 === sources.length && 'border-cici'}`}
              onClick={(event: any) => {
                borderSelect(event)
                setPreview({
                  src:
                    item.idSourceProduct === 'generado'
                      ? `${BASE_API_IMAGES_CLOUDINNARY}/${item.source}`
                      : `${BASE_API_IMAGES_CLOUDINNARY}/${item.source}`,
                  type: 'IMAGEN',
                })
              }}
            >
              <CardImageOnly
                title=""
                sourceImage={
                  item.idSourceProduct === 'generado'
                    ? `${BASE_API_IMAGES_CLOUDINNARY_SCALE}/${item.source}`
                    : `${BASE_API_IMAGES_CLOUDINNARY_SCALE}/${item.source}`
                }
              />
            </div>
          ) : (
            <video
              width="100%"
              onClick={() => {
                setPreview({
                  src: `${BASE_API_IMAGES_CLOUDINNARY}/${item.source}`,
                  type: 'VIDEO',
                })
              }}
            >
              <source
                src={`${BASE_API_IMAGES_CLOUDINNARY}/${item.source}`}
                type="video/mp4"
              />
              <source
                src={`${BASE_API_IMAGES_CLOUDINNARY}/${item.source}`}
                type="video/ogg"
              />
            </video>
          )}
        </div>
      ))}
    </Carousel>
  )
}

export default ListImage
