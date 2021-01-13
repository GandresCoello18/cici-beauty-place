import { Store } from 'redux'
import React from 'react'
import { NextSeo } from 'next-seo'
import { Badge } from 'reactstrap'
import { AllAction, RootState } from '../reducers'
import { setTitle } from '../reducers/app'
import Layout from '../components/layout'

const Favorite = () => {
  return (
    <>
      <NextSeo
        title="Favoritos | Cici beauty place"
        description="Mis productos favoritos."
      />

      <Layout>
        <section className="container font-arvo mt-md-3 p-md-2 p-md-5">
          <div className="row justify-content-center bg-white">
            <div className="col-12 col-md-8 border-bottom p-3">
              <h3 className="p-1">
                Tus favoritos{' '}
                <span className="btn btn-sm btn-danger float-right">
                  Limpiar
                </span>
              </h3>
            </div>
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <div
                className="col-12 col-md-8 border-bottom p-3 mb-3"
                key={item}
              >
                <div className="card mb-3 border-0" style={{ width: '100%' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="https://ae01.alicdn.com/kf/H54f3b265518e41b0a993d1a915488810d/FLD5-15Pcs-Makeup-Brushes-Tool-Set-Cosmetic-Powder-Eye-Shadow-Foundation-Blush-Blending-Beauty-Make-Up.jpg_220x220xz.jpg_.webp"
                        width="100%"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <strong style={{ fontSize: 25 }}>$ 31</strong>

                        <Badge
                          color="danger"
                          className="float-right cursor-pointer p-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Eliminar de favoritos"
                        >
                          X
                        </Badge>
                        <Badge color="success float-right mr-3">
                          Disponible
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

Favorite.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering Favorite'))
}

export default Favorite
