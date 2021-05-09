/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
import { toast } from 'react-toast'
import copy from 'copy-to-clipboard'
import { TokenContext } from '../context/contextToken'
import Layout from '../components/layout'
import { getMyOrden } from '../api/orden'
import { OrdenProduct } from '../interfaces/orden'
import { BASE_API_IMAGES_CLOUDINNARY_SCALE } from '../api'
import ModalElement from '../components/element/modal'
import { UseNotSesion } from '../hooks/useNotSesion'
import { InfoPaymentBank } from '../components/payment/info-payment-bank'

const MisPedidos = () => {
  UseNotSesion()
  const { token } = useContext(TokenContext)
  const [dropdownOpen, setOpen] = useState<boolean>(false)
  const [modal, setMOdal] = useState<boolean>(false)
  const [MoreProductModal, setMoreProductModal] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [selectOptioon, setSelectOption] = useState<string>('Pendiente de pago')
  const [MyOrdes, setMyOrdes] = useState<OrdenProduct[]>([])
  const toggle = () => setOpen(!dropdownOpen)

  useEffect(() => {
    setLoading(true)

    try {
      const fetchOrden = async () => {
        const { ordenes } = await (
          await getMyOrden({ token, status: selectOptioon })
        ).data
        setMyOrdes(ordenes)
        setLoading(false)
      }

      token && fetchOrden()
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }, [selectOptioon, token])

  return (
    <>
      <NextSeo
        title="Mis Pedidos | Cici beauty place"
        description="Revisa tus pedidos constantemente, puedes saber datos de pagos, rastreo, cupones en uso y mas."
        canonical="https://cici.beauty/mis-pedidos"
        openGraph={{
          url: 'https://cici.beauty/mis-pedidos',
          title: 'Mis pedidos',
          description:
            'Revisa tus pedidos constantemente, puedes saber datos de pagos, rastreo, cupones en uso y mas.',
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
        <section className="container font-arvo mt-md-3 mb-md-3 p-md-5 bg-white">
          <div className="row justify-content-center">
            <div className="col-12 border-bottom p-3">
              <h3 className="p-1">
                Tus Pedidos{' '}
                <ButtonDropdown
                  direction="left"
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  className="float-right"
                >
                  <Button id="caret" size="sm">
                    {selectOptioon}
                  </Button>
                  <DropdownToggle split className="bg-cici" />
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() => setSelectOption('Pendiente de pago')}
                    >
                      Pendiente de pago
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => setSelectOption('Pendiente de envio')}
                    >
                      Pendiente de envió
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => setSelectOption('Pendiente de entrega')}
                    >
                      Pendiente de entrega
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </h3>
              {selectOptioon === 'Pendiente de pago' && (
                <span
                  className="text-secondary cursor-pointer float-right"
                  onClick={() => setMOdal(true)}
                >
                  ¿Pagar con Bancos?
                </span>
              )}
            </div>
          </div>
          <div className="row bg-white border-bottom p-3 text-center">
            <div className="col-5 border-right font-weight-bold text-cici">
              Información
            </div>
            <div className="col-4 border-right font-weight-bold text-cici">
              Rastreo / ID
            </div>
            <div className="col-3 font-weight-bold text-cici">Pagos</div>
          </div>
          {MyOrdes.map((orden) => (
            <div
              className="row bg-white border-bottom p-1 p-md-3 mb-5 text-center cursor-pointer"
              onClick={() =>
                orden.product.length > 1 && setMoreProductModal(true)
              }
              key={orden.idOrder}
            >
              <div className="col-12 bg-cici mb-2 text-left p-3 border-round">
                <img
                  width="100"
                  height="100"
                  src={`${BASE_API_IMAGES_CLOUDINNARY_SCALE}/${orden.product[0].source}`}
                  alt={orden.product[0].title}
                  className="p-1"
                />
                <span className="ml-3">
                  {orden.product[0].title}
                  {orden.product.length > 1 ? (
                    <strong className="ml-1">
                      + {orden.product.length - 1} productos
                    </strong>
                  ) : (
                    ''
                  )}
                </span>
              </div>
              <div className="col-12 col-md-5 border-right border-bottom p-2 p-md-0">
                <Badge className="p-1">Orden creada el</Badge>
                <br />
                {orden.created_at}
              </div>
              <div className="col-7 col-md-4 border-right p-2 p-md-0">
                <Badge className="p-1">Id de pago</Badge>
                <br />
                <Badge
                  onClick={() => {
                    toast.success('Se copio la el ID en el porta papeles')
                    copy(orden.paymentId)
                  }}
                  color="success"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Copiar id de pago"
                >
                  {orden.paymentId}
                </Badge>
              </div>
              <div className="col-5 col-md-3 p-2 p-md-0">
                <Badge className="p-1">Método de pago</Badge>
                <br />
                <Badge
                  color={orden.paymentMethod === 'Paypal' ? 'info' : 'warning'}
                >
                  {orden.paymentMethod}
                </Badge>
              </div>

              <ModalElement
                title="Productos"
                visible={MoreProductModal}
                setVisible={setMoreProductModal}
              >
                <div className="row justify-content-center">
                  {orden.product.map((product) => (
                    <div className="col-12 mb-3" key={product.title}>
                      <img
                        src={`${BASE_API_IMAGES_CLOUDINNARY_SCALE}/${product.source}`}
                        alt={product.title}
                      />
                      <br />
                      <span>{product.title}</span>
                    </div>
                  ))}
                </div>
              </ModalElement>
            </div>
          ))}
          {!loading && MyOrdes.length === 0 && (
            <Alert color="info mt-1">No hay ordenes para mostrar.</Alert>
          )}
        </section>

        <ModalElement
          title="Paga mediante bancos"
          visible={modal}
          setVisible={setMOdal}
        >
          <InfoPaymentBank />
        </ModalElement>
      </Layout>
    </>
  )
}

export default MisPedidos
