/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import Router from 'next/router'
import { Badge } from 'reactstrap'
import Layout from '../../components/layout'
import CartResumne from '../../components/cart/cart-resumen'
import QualifyOrder from '../../components/payment/qualifyOrder'

const DetailsCompra = () => {
  const [OrderId, setOrderId] = useState<string>('')

  useEffect(() => {
    if (!Router.query.idOrder) {
      Router.push('/')
    }

    setOrderId(Router.query.idOrder as string)
    console.log(`desde efect de product ID${OrderId}`)
  }, [OrderId])

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
                  Compra: <strong>#3843</strong> - Martes 14 de octubre 2020
                  <br />
                  <CartResumne />
                </div>
                <div className="card-body">
                  <div className="row border-bottom">
                    <div className="col-12 col-md-3 p-2">
                      Ordenado el:{' '}
                      <Badge color="info">domingo 18 de agosto 2020</Badge>
                    </div>
                    <div className="col-12 col-md-3 p-2">
                      Enviado el:{' '}
                      <Badge color="info">martes 21 de agosto 2020</Badge>
                    </div>
                    <div className="col-12 col-md-3 p-2">
                      Entregado el:{' '}
                      <Badge color="info">sabado 25 de agosto 2020</Badge>
                    </div>
                    <div className="col-12 col-md-2 p-2">
                      Estado: <Badge color="success">Entregado</Badge>
                    </div>
                  </div>
                  <br />
                  <div className="card mb-3 border-0" style={{ width: '100%' }}>
                    <div className="row g-0">
                      <div className="col-3 col-md-1">
                        <img
                          src="https://ae01.alicdn.com/kf/H54f3b265518e41b0a993d1a915488810d/FLD5-15Pcs-Makeup-Brushes-Tool-Set-Cosmetic-Powder-Eye-Shadow-Foundation-Blush-Blending-Beauty-Make-Up.jpg_220x220xz.jpg_.webp"
                          width="100"
                          height="100"
                          alt="..."
                        />
                      </div>
                      <div className="col-9">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <strong style={{ fontSize: 20 }}>
                            $ 31 <span className="text-cici">X 3</span>
                          </strong>
                        </div>
                      </div>
                      <div className="col-12 col-md-2">
                        <QualifyOrder />
                      </div>
                    </div>
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
