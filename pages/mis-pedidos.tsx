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
import { BASE_API } from '../api'

const MisPedidos = () => {
  const { token } = useContext(TokenContext)
  const [dropdownOpen, setOpen] = useState<boolean>(false)
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

      fetchOrden()
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }, [selectOptioon, token])

  return (
    <>
      <NextSeo
        title="Mis Pedidos | Cici beauty place"
        description="Mis pedidos."
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
                      Pendiente de envio
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => setSelectOption('Pendiente de entrega')}
                    >
                      Pendiente de entrega
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </h3>
            </div>
          </div>
          <div className="row bg-white border-bottom p-3 text-center">
            <div className="col-5 border-right font-weight-bold text-cici">
              Informacion
            </div>
            <div className="col-4 border-right font-weight-bold text-cici">
              Rastreo / ID
            </div>
            <div className="col-3 font-weight-bold text-cici">Pagos</div>
          </div>
          {MyOrdes.map((orden) => (
            <div
              className="row bg-white border-bottom p-1 p-md-3 mb-5 text-center"
              key={orden.idOrder}
            >
              <div className="col-12 bg-cici mb-2 text-left p-3 border-round">
                <img
                  width="100"
                  height="100"
                  src={`${BASE_API}/static/${orden.product[0].source}`}
                  alt={orden.product[0].title}
                  className="p-1"
                />
                <span className="ml-3">
                  {orden.product[0].title}
                  {orden.product.length > 1 ? (
                    <strong>+ {orden.product.length - 1} productos</strong>
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
                <Badge className="p-1">Metodo de pago</Badge>
                <br />
                <Badge
                  color={orden.paymentMethod === 'Paypal' ? 'info' : 'warning'}
                >
                  {orden.paymentMethod}
                </Badge>
              </div>
            </div>
          ))}
          {!loading && MyOrdes.length === 0 && (
            <Alert color="info mt-1">No hay ordenes para mostrar.</Alert>
          )}
        </section>
      </Layout>
    </>
  )
}

export default MisPedidos
