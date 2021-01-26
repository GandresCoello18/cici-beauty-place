/* eslint-disable no-console */
import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import StarRatingComponent from 'react-star-rating-component'
import { Media } from 'reactstrap'

interface Props {
  idProduct: string
  loading: boolean
}

const Comentario = ({ idProduct, loading }: Props) => {
  useEffect(() => {
    console.log(`${idProduct} comentarios`)
  }, [idProduct])

  return (
    <Media>
      <Media left href="#">
        {loading ? (
          <Skeleton width={50} height={60} />
        ) : (
          <Media
            object
            style={{ width: 50, height: 50, padding: 5, borderRadius: 10 }}
            data-srce="holder.js/64x64"
            src="https://andres-coello-goyes.herokuapp.com/img/profile-test.jpg"
            alt="Generic placeholder image"
          />
        )}
      </Media>
      <Media body>
        <Media heading className="p-1">
          {loading ? <Skeleton width={180} height={25} /> : <>Andres Coello</>}
        </Media>
        {loading ? (
          <Skeleton width={150} height={25} />
        ) : (
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={3}
            onStarClick={(nextValue: number, prevValue: number, name: string) =>
              console.log(`${nextValue} - ${prevValue} - ${name}`)
            }
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
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo.
          </p>
        )}
      </Media>
    </Media>
  )
}

export default Comentario
