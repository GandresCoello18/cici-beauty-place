/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React, { useContext, useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { Alert, Badge } from 'reactstrap'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toast'
import Layout from '../components/layout'
import { BASE_API } from '../api'
import ActionFavoritePrduct from '../components/productDetails/action-favorite-product'
import { Product } from '../interfaces/products'
import { deleteMyFavorites, getFavorites } from '../api/favorite'
import { TokenContext } from '../context/contextToken'
import { calculatePrice } from '../helpers/calculatePrice'

const Favorite = () => {
  const { token } = useContext(TokenContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    setLoading(true)
    try {
      const fetchFavorites = async () => {
        const { favorites } = await (await getFavorites({ token })).data
        setProduct(favorites)
        setLoading(false)
      }

      fetchFavorites()
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }, [token])

  const deleteAllFavorites = async () => {
    setLoading(true)

    try {
      await deleteMyFavorites({ token })
      setLoading(false)
      setProduct([])
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  const renderFavorites = () => {
    return product.map((product) => (
      <Link href={`/productos/${product.idProducts}`} key={product.idProducts}>
        <a style={{ textDecoration: 'none', color: '#4b4a4a' }}>
          <div className="card mb-3" style={{ width: '100%' }}>
            <div className="row g-0">
              <div className="col-md-3">
                <img
                  src={`${BASE_API}/static/${product.source}`}
                  height="250"
                  className="p-2"
                  alt={product.title}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="row justify-content-between p-2 mb-2">
                    <div className="col-12">
                      <div className="p-1 mb-2 border-bottom">
                        <strong style={{ fontSize: 20 }}>
                          US $
                          {calculatePrice({
                            discount: product.discount,
                            price: product.price,
                          })}
                        </strong>
                        {product.discount ? (
                          <>
                            <span className="ml-2 tachado">
                              US ${product.price}
                            </span>
                            <span className="tag-discount ml-2">
                              -{product.discount}%
                            </span>
                          </>
                        ) : (
                          ''
                        )}
                      </div>
                      <ActionFavoritePrduct idProduct={product.idProducts} />

                      <Badge
                        className="float-right"
                        color={
                          product.status === 'Disponible' ? 'success' : 'danger'
                        }
                      >
                        {product.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    ))
  }

  return (
    <>
      <NextSeo
        title="Mis Favoritos | Cici beauty place"
        description="Sabemos que amas estos productos y lo guardamos para ti."
        canonical="https://cici.beauty/mis-favoritos"
        openGraph={{
          url: 'https://cici.beauty/mis-favoritos',
          title: 'Mis Favoritos',
          description:
            'Sabemos que amas estos productos y lo guardamos para ti',
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
            <div className="col-12 col-md-8 border-bottom p-3">
              <h3 className="p-1">
                Tus favoritos{' '}
                <span
                  className="btn btn-sm btn-danger float-right"
                  onClick={deleteAllFavorites}
                >
                  Limpiar
                </span>
              </h3>
            </div>

            {loading ? (
              [1, 2, 3, 4, 5].map((item) => (
                <div className="col-12 mb-3" key={item}>
                  <Skeleton height={100} />
                </div>
              ))
            ) : (
              <div className="col-12">{renderFavorites()}</div>
            )}

            {product.length === 0 && !loading && (
              <div className="col-12">
                <Alert color="info">
                  No tienes productos favoritos por el momento.
                </Alert>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Favorite
