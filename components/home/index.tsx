import React from 'react'
import CarouselElement from '../element/carousel'

const Home = () => {
  return (
    <>
      <section className="container mt-4">
        <div className="row">
          <div className="col-12">buscador</div>
        </div>
        <div className="row justify-content-between">
          <div className="col-12 col-md-5">categoria</div>
          <div className="col-12 col-md-4">
            <CarouselElement />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
