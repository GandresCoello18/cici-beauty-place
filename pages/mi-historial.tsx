/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useContext, useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { Alert, Card, CardColumns, CardImg } from 'reactstrap'
import { toast } from 'react-toast'
import Skeleton from 'react-loading-skeleton'
import Layout from '../components/layout'
import { TokenContext } from '../context/contextToken'
import { UseNotSesion } from '../hooks/useNotSesion'
import { ClearMyHistorty, GetMyHistorty } from '../api/productHistory'
import { Product } from '../interfaces/products'
import { BASE_API_IMAGES_CLOUDINNARY_SCALE } from '../api'

const History = () => {
  UseNotSesion()
  const { token } = useContext(TokenContext)
  const [Loading, setLoading] = useState<boolean>(false)
  const [HistoryProducts, setProducts] = useState<Product[]>([])

  const FetchHistory = async () => {
    setLoading(true)

    try {
      const { history } = (await GetMyHistorty({ token, limit: 8 })).data
      setProducts(history)

      setLoading(false)
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) {
      FetchHistory()
    }
  }, [token])

  const renderSkeleton = () => {
    return [0, 1, 2, 3, 4, 5].map((item) => (
      <div className="bg-white p-3" key={item}>
        <Skeleton height={80} width={150} />
      </div>
    ))
  }

  const deleteHistory = async () => {
    setLoading(true)

    try {
      await ClearMyHistorty({ token })

      toast.success('Se limpio el historial')
      setLoading(false)

      FetchHistory()
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <>
      <NextSeo
        title="Mi historial | Cici beauty place"
        description="Sabemos que te gusta este producto, esta vez aprovecha para comprarlo."
        canonical="https://cici.beauty/mi-historial"
        openGraph={{
          url: 'https://cici.beauty/mi-historial',
          title: 'Mi historial',
          description:
            'Sabemos que te gusta este producto, esta vez aprovecha para comprarlo.',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 800,
              height: 600,
              alt: 'logo de cici beauty place',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <Layout>
        <section className="container font-arvo mt-md-3 p-md-2 p-md-5">
          <div className="row justify-content-center bg-white">
            <div className="col-12 border-bottom p-3">
              <h3>
                Tu Historial{' '}
                <span
                  className="btn btn-sm btn-danger float-right"
                  onClick={deleteHistory}
                >
                  Limpiar
                </span>
              </h3>
            </div>
            <div className="col-12 p-3">
              <CardColumns>
                {!Loading &&
                  HistoryProducts.map((product) => (
                    <Card key={product.idProducts}>
                      <CardImg
                        top
                        width="100%"
                        src={`${BASE_API_IMAGES_CLOUDINNARY_SCALE}/${product.source}`}
                        alt={product.title}
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title={product.title}
                      />
                    </Card>
                  ))}

                {Loading && renderSkeleton()}
              </CardColumns>

              {!Loading && HistoryProducts.length === 0 && (
                <>
                  <img
                    className="img-fluid p-3"
                    src={`${BASE_API_IMAGES_CLOUDINNARY_SCALE}/util/undraw_product_tour_foyt_1_w2arx4.svg`}
                    style={{ width: '100%' }}
                    alt="empty history"
                  />

                  <Alert color="info">
                    No tienes historial por el momento.
                  </Alert>
                </>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default History
