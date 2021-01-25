/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { Dispatch, SetStateAction } from 'react'
import Carousel from 'react-multi-carousel'
import { BASE_API } from '../../api'
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

  return (
    <Carousel responsive={responsive}>
      {sources.map((item: SourcesProduct) => (
        <div
          className="p-1 border-list-image-preview mt-2"
          key={item.idSourceProduct}
        >
          {item.kind === 'IMAGEN' ? (
            <div
              onMouseEnter={() => {
                setPreview({
                  src:
                    item.idSourceProduct === 'generado'
                      ? `${BASE_API}/static/${item.source}`
                      : `${BASE_API}/static/more-source/${item.source}`,
                  type: 'IMAGEN',
                })
              }}
            >
              <CardImageOnly
                title=""
                sourceImage={
                  item.idSourceProduct === 'generado'
                    ? `${BASE_API}/static/${item.source}`
                    : `${BASE_API}/static/more-source/${item.source}`
                }
              />
            </div>
          ) : (
            <video
              width="100%"
              onMouseEnter={() => {
                setPreview({
                  src: `${BASE_API}/static/more-source/${item.source}`,
                  type: 'VIDEO',
                })
              }}
            >
              <source
                src={`${BASE_API}/static/more-source/${item.source}`}
                type="video/mp4"
              />
              <source
                src={`${BASE_API}/static/more-source/${item.source}`}
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
