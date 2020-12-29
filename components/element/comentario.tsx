import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { Media } from 'reactstrap'

const Comentario = () => {
  return (
    <Media>
      <Media left href="#">
        <Media
          object
          style={{ width: 50, height: 50, padding: 5 }}
          data-srce="holder.js/64x64"
          src="https://andres-coello-goyes.herokuapp.com/img/profile-test.jpg"
          alt="Generic placeholder image"
        />
      </Media>
      <Media body>
        <Media heading className="p-1">
          Andres Coello
        </Media>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={3}
          onStarClick={(nextValue: number, prevValue: number, name: string) =>
            console.log(`${nextValue} - ${prevValue} - ${name}`)
          }
        />
        <p className="p-1">
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo.
        </p>
      </Media>
    </Media>
  )
}

export default Comentario
