import React from 'react'
import { AiOutlineHistory } from 'react-icons/ai'
import CardImageTitle from '../card/card-image-title'
import CarouselElement from '../element/carousel'
import CategoriNav from '../nav/categori'

const Home = () => {
  return (
    <>
      <section className="container mt-4">
        <div className="row justify-content-between">
          <div className="col-12 col-md-3 col-lg-2 mb-3 mb-md-0 bg-white border-round">
            <CategoriNav />
          </div>
          <div className="col-12 col-md-4 col-lg-5 mb-3 mb-md-0">
            <div className="row bg-white border-round font-arvo">
              <div
                className="col-12 p-2"
                style={{
                  backgroundColor: '#f1d7dd',
                  width: '100%',
                  fontWeight: 'bold',
                  padding: 5,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <h6 className="text-center font-weight-bold">
                  <AiOutlineHistory size={20} /> &nbsp; Historial reciente
                </h6>
              </div>
              <div className="col-6 col-lg-4 p-2">
                <CardImageTitle />
              </div>

              <div className="col-6 col-lg-4 p-2">
                <CardImageTitle />
              </div>

              <div className="col-6 d-block d-md-none d-lg-block col-lg-4 p-2">
                <CardImageTitle />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0 bg-white border-round p-2">
            <CarouselElement />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
