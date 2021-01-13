import { Store } from 'redux'
import React from 'react'
import { NextSeo } from 'next-seo'
import { Card, CardColumns, CardImg } from 'reactstrap'
import { AllAction, RootState } from '../reducers'
import { setTitle } from '../reducers/app'
import Layout from '../components/layout'

const History = () => {
  return (
    <>
      <NextSeo
        title="Mi historial | Cici beauty place"
        description="Mis productos comprados."
      />

      <Layout>
        <section className="container font-arvo mt-md-3 p-md-2 p-md-5">
          <div className="row justify-content-center bg-white">
            <div className="col-12 border-bottom p-3">
              <h3>
                Tu Historial{' '}
                <span className="btn btn-sm btn-danger float-right">
                  Limpiar
                </span>
              </h3>
            </div>
            <div className="col-12 p-3">
              <CardColumns>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://ae01.alicdn.com/kf/H54f3b265518e41b0a993d1a915488810d/FLD5-15Pcs-Makeup-Brushes-Tool-Set-Cosmetic-Powder-Eye-Shadow-Foundation-Blush-Blending-Beauty-Make-Up.jpg_220x220xz.jpg_.webp"
                    alt="Card image cap"
                  />
                </Card>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://m.media-amazon.com/images/I/814O9M0BNOL._AC_UL320_.jpg"
                    alt="Card image cap"
                  />
                </Card>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://m.media-amazon.com/images/I/81hqX-c2g8L._AC_UL320_.jpg"
                    alt="Card image cap"
                  />
                </Card>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://m.media-amazon.com/images/I/61RbJxfEOWL._AC_UL320_.jpg"
                    alt="Card image cap"
                  />
                </Card>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://m.media-amazon.com/images/I/61TDas7Bq-L._AC_UL320_.jpg"
                    alt="Card image cap"
                  />
                </Card>
              </CardColumns>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

History.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering History'))
}

export default History
