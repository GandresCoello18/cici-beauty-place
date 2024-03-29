/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import Router from 'next/router'
import { Badge } from 'reactstrap'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toast'
import { AxiosError } from 'axios'
import Link from 'next/link'
import Layout from '../../components/layout'
import CartResumne from '../../components/cart/cart-resumen'
import QualifyOrder from '../../components/payment/qualifyOrder'
import { getDetailsOrden } from '../../api/orden'
import { TokenContext } from '../../context/contextToken'
import { DetailsOrdenAndShipping } from '../../interfaces/shipping'
import { BASE_API_IMAGES_CLOUDINNARY } from '../../api'
import { UseNotSesion } from '../../hooks/useNotSesion'
import { HandleError } from '../../helpers/handleError'

const DetailsCompra = () => {
  UseNotSesion()
  const [loading, setLoading] = useState(false)
  const { token } = useContext(TokenContext)
  const [Details, setDetails] = useState<DetailsOrdenAndShipping>()
  const [OrderId, setOrderId] = useState<string>('')

  useEffect(() => {
    const FetchOrdenDetails = async () => {
      setLoading(true)

      try {
        const idOrden = Router.query.idOrder as string
        setOrderId(idOrden)

        const { DetailOrden } = await (
          await getDetailsOrden({ token, idOrden })
        ).data
        setDetails(DetailOrden)

        if (!DetailOrden) {
          Router.push('/mis-compras')
        }

        setLoading(false)
      } catch (error) {
        toast.error(HandleError(error as AxiosError))
        setLoading(false)
      }
    }

    if (!Router.query.idOrder) {
      Router.push('/')
    } else {
      token && FetchOrdenDetails()
    }
  }, [token])

  const renderStatus = (status?: string) => {
    switch (status) {
      case 'Sent':
        return 'Enviado'
      case 'Delivered':
        return 'Entregado'
      default:
        return ''
    }
  }

  return (
    <>
      <NextSeo
        title="Detalle de Compras | Cici beauty place"
        description="Aquí puedes ver los detalles de tus compras, también puedes calificar si recomiendas este producto o escribir tu opinión."
      />

      <Layout>
        <section className="container font-arvo mt-md-3 p-md-2 p-md-5">
          <div className="row justify-content-center bg-white">
            <div className="col-12 p-3">
              <div className="card">
                <div className="card-header p-3">
                  {loading ? (
                    <Skeleton width="80%" height={40} />
                  ) : (
                    <>
                      Compra: <strong>#{Details?.numberOfOrder}</strong>
                    </>
                  )}
                  <br />
                  <CartResumne
                    loading={loading}
                    subTotal={Details?.subTotal || 0}
                    envio={Details?.shipping || 0}
                    text={Details?.shipping === 0 ? 'Gratis' : ''}
                    total={Details?.totalAmount || 0}
                    discount={Details?.discount || 0}
                  />
                </div>
                <div className="card-body">
                  <div className="row border-bottom">
                    <div className="col-6 col-md-3 p-2">
                      <div className="border text-center">
                        <div className="border-bottom">Ordenado el</div>
                        {loading ? (
                          <Skeleton width={80} />
                        ) : (
                          <Badge color="info">{Details?.ordenado_el}</Badge>
                        )}
                      </div>
                    </div>
                    <div className="col-6 col-md-3 p-2">
                      <div className="border text-center">
                        <div className="border-bottom">Enviado el</div>
                        {loading ? (
                          <Skeleton width={80} />
                        ) : (
                          <Badge color="info">{Details?.enviado_el}</Badge>
                        )}
                      </div>
                    </div>
                    <div className="col-6 col-md-3 p-2">
                      <div className="border text-center">
                        <div className="border-bottom">Entregado el</div>
                        {loading ? (
                          <Skeleton width={80} />
                        ) : (
                          <Badge color="info">
                            {Details?.entregado_el === Details?.enviado_el
                              ? 'No Entregado'
                              : Details?.entregado_el}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="col-6 col-md-2 p-2">
                      <div className="border text-center">
                        <div className="border-bottom">Estado</div>
                        {loading ? (
                          <Skeleton width={80} />
                        ) : (
                          <Badge
                            color={
                              renderStatus(Details?.status) === 'Entregado'
                                ? 'success'
                                : 'warning'
                            }
                          >
                            {renderStatus(Details?.status)}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="card mb-3 border-0" style={{ width: '100%' }}>
                    {Details?.products.map((product) => (
                      <div className="row g-0" key={product.idProducts}>
                        <div className="col-3 col-md-1 mb-3">
                          <Link href={`/productos/${product.idProducts}`}>
                            <a target="_blank" rel="noopener noreferrer">
                              {loading ? (
                                <Skeleton width={100} height={100} />
                              ) : (
                                <img
                                  src={`${BASE_API_IMAGES_CLOUDINNARY}/${product.source}`}
                                  width="100"
                                  height="100"
                                  alt={product.title}
                                />
                              )}
                            </a>
                          </Link>
                        </div>
                        <div className="col-9">
                          <Link href={`/productos/${product.idProducts}`}>
                            <a target="_blank" rel="noopener noreferrer">
                              <div className="card-body">
                                {loading ? (
                                  <>
                                    <Skeleton width="70%" height={25} />
                                    <Skeleton width="20%" height={15} />
                                    <Skeleton width="50%" height={15} />
                                  </>
                                ) : (
                                  <h6
                                    className="card-title"
                                    style={{ color: '#696969' }}
                                  >
                                    {product.title}
                                  </h6>
                                )}
                                X{' '}
                                <strong style={{ color: '#696969' }}>
                                  {product.quantity}
                                </strong>
                                <br />
                                Estado:{' '}
                                <strong style={{ color: '#696969' }}>
                                  {Details?.status}
                                </strong>
                              </div>
                            </a>
                          </Link>
                        </div>
                        <div className="col-12 col-md-2">
                          {loading ? (
                            <Skeleton width={100} height={50} />
                          ) : (
                            <>
                              {Details.qualified ? (
                                <Badge color="secondary p-2">Calificado</Badge>
                              ) : (
                                <QualifyOrder
                                  idProduct={product.idProducts}
                                  idOrden={OrderId}
                                />
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default DetailsCompra
