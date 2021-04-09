/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import {
  Alert,
  Badge,
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap'
import Link from 'next/link'
import { toast } from 'react-toast'
import Skeleton from 'react-loading-skeleton'
import Layout from '../../components/layout'
import { TokenContext } from '../../context/contextToken'
import { getProductShipping } from '../../api/shipping'
import { MisShipping } from '../../interfaces/shipping'
import { BASE_API } from '../../api'

const Compras = () => {
  const [dropdownOpen, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { token } = useContext(TokenContext)
  const [Shipping, setShipping] = useState<MisShipping[]>([])
  const toggle = () => setOpen(!dropdownOpen)

  useEffect(() => {
    const FetchShipping = async () => {
      setLoading(true)

      try {
        const { shipping } = await (await getProductShipping({ token })).data
        setShipping(shipping)

        setLoading(false)
      } catch (error) {
        toast.error(error.message)
        setLoading(false)
      }
    }

    FetchShipping()
  }, [token])

  const SkeletonShipping = () => {
    return [0, 1, 2, 3, 4].map((item) => (
      <div className="col-12 p-3 mb-2" key={item}>
        <Skeleton width="100%" height={60} />
      </div>
    ))
  }

  const renderStatus = (status: string) => {
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
        title="Mis Compras | Cici beauty place"
        description="Mira tus productos comprados y dinos que te parecen con una calificación."
        canonical="https://cici.beauty/mis-compras"
        openGraph={{
          url: 'https://cici.beauty/mis-compras',
          title: 'Mis compras',
          description:
            'Mira tus productos comprados y dinos que te parecen con una calificación.',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 700,
              height: 500,
              alt: 'logo de cici',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <Layout>
        <section className="container font-arvo mt-md-3 p-md-2 p-md-5">
          <div className="row justify-content-center bg-white">
            <div className="col-12 border-bottom p-3">
              <h3 className="p-1">
                Tus Compras{' '}
                <ButtonDropdown
                  direction="left"
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  className="float-right"
                >
                  <Button id="caret" size="sm">
                    Todas
                  </Button>
                  <DropdownToggle split className="bg-cici" />
                  <DropdownMenu>
                    <DropdownItem>Todas</DropdownItem>
                    <DropdownItem>Sin Calificar</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </h3>
            </div>
            {Shipping.map((item) => (
              <div
                className="col-12 border-bottom p-3 mb-3"
                key={item.idShipping}
              >
                <div className="card mb-3 border-0" style={{ width: '100%' }}>
                  <div className="row g-0 justify-content-between">
                    <div className="col-12 col-md-2">
                      <img
                        src={`${BASE_API}/static/${item.sourcesProduct}`}
                        width="100"
                        height="100"
                        alt={item.titleProduct}
                      />
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="border text-center">
                        <div className="border-bottom">Estado</div>
                        <Badge color="info">{renderStatus(item.status)}</Badge>
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="border text-center">
                        <div className="border-bottom">Guia</div>
                        {item.guide ? (
                          <a
                            href={`https://www.servientrega.com.ec/rastreo/guia/${item.guide}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.guide}
                          </a>
                        ) : (
                          'None'
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="border text-center mt-3 mt-md-0">
                        <div className="border-bottom">
                          Ultima actualizacion
                        </div>
                        <Badge color="info">{item.update_at}</Badge>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4 mt-md-0">
                      <h6 className="card-title">{item.titleProduct}</h6>
                      {item.products ? (
                        <strong style={{ fontSize: 20 }}>
                          <span className="text-cici">+ {item.products}</span>
                        </strong>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="col-12 col-md-6 float-right">
                      <Link href={`/mis-compras/${item.idOrder}`}>
                        <a
                          href={`/mis-compras/${item.idOrder}`}
                          style={{ color: '#000' }}
                          className="btn bg-cici float-right"
                        >
                          Detalles
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {loading && SkeletonShipping()}

            {Shipping.length === 0 && !loading && (
              <div className="col-12">
                <Alert color="info">
                  No tienes compras o envios por el momento.
                </Alert>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Compras
