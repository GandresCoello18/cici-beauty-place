/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/prefer-add-event-listener */
/* eslint-disable no-console */
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { ReactPhotoCollage } from 'react-photo-collage'
import StarRatingComponent from 'react-star-rating-component'
import { Media } from 'reactstrap'
import { BASE_API_IMAGES_CLOUDINNARY_SCALE, DEFAULT_AVATAR } from '../../api'
import { SourceAvatar } from '../../helpers/sourceAvatar'
import { ProductReview } from '../../interfaces/products'

interface Props {
  loading: boolean
  review: ProductReview
}

const Comentario = ({ review, loading }: Props) => {
  const setting = {
    width: '180px',
    height: ['250px', '170px'],
    layout: [1],
    photos: [
      {
        source: `${BASE_API_IMAGES_CLOUDINNARY_SCALE}/${review.source}`,
      },
    ],
    showNumOfRemainingPhotos: true,
  }

  return (
    <Media>
      <Media left>
        {loading ? (
          <Skeleton width={50} height={60} />
        ) : (
          <Media
            object
            style={{ width: 50, height: 50, padding: 5, borderRadius: 10 }}
            data-srce="holder.js/64x64"
            src={SourceAvatar(review.avatar)}
            alt={review.userName}
            onError={(e: any) => {
              e.target.onerror = null
              e.target.src = `${BASE_API_IMAGES_CLOUDINNARY_SCALE}/${DEFAULT_AVATAR}`
            }}
          />
        )}
      </Media>
      <Media body>
        <Media className="p-1">
          {loading ? <Skeleton width={180} height={25} /> : review.userName}
        </Media>
        {loading ? (
          <Skeleton width={150} height={25} />
        ) : (
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={review.stars}
          />
        )}
        <br />
        {loading ? (
          <>
            <Skeleton width="80%" height={15} />
            <Skeleton width="60%" height={15} />
          </>
        ) : (
          <p className="p-1">
            {review.commentary}
            <br />
            {review.source ? <ReactPhotoCollage {...setting} /> : ''}
            <br />
            <span className="text-secondary">({review.created_at})</span>
          </p>
        )}
      </Media>
    </Media>
  )
}

export default Comentario
