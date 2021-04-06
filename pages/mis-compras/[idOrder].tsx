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
import Layout from '../../components/layout'
import CartResumne from '../../components/cart/cart-resumen'
import QualifyOrder from '../../components/payment/qualifyOrder'
import { getDetailsOrden } from '../../api/orden'
import { TokenContext } from '../../context/contextToken'
import { DetailsOrdenAndShipping } from '../../interfaces/shipping'
import { BASE_API } from '../../api'

const DetailsCompra = () => {
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
        toast.error(error.message)
        setLoading(false)
      }
    }

    if (!Router.query.idOrder) {
      Router.push('/')
    } else {
      FetchOrdenDetails()
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
        description="Los detalles de mi compra."
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
                      Compra: <strong>#3843</strong>
                    </>
                  )}
                  <br />
                  <CartResumne
                    loading={loading}
                    subTotal={0}
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
                        <div className="col-3 col-md-1">
                          {loading ? (
                            <Skeleton width={100} height={100} />
                          ) : (
                            <img
                              src={`${BASE_API}/static/${product.source}`}
                              width="100"
                              height="100"
                              alt={product.title}
                            />
                          )}
                        </div>
                        <div className="col-9">
                          <div className="card-body">
                            {loading ? (
                              <Skeleton width="70%" height={25} />
                            ) : (
                              <h5 className="card-title">{product.title}</h5>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-md-2">
                          {loading ? (
                            <Skeleton width={100} height={50} />
                          ) : (
                            <QualifyOrder
                              idProduct={product.idProducts}
                              idOrden={OrderId}
                            />
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
