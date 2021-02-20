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
  Input,
  UncontrolledCollapse,
} from 'reactstrap'
import { toast } from 'react-toast'
import copy from 'copy-to-clipboard'
import { BiShareAlt } from 'react-icons/bi'
import { TokenContext } from '../context/contextToken'
import Layout from '../components/layout'
import { getMyOrden } from '../api/orden'
import { OrdenProduct } from '../interfaces/orden'
import { BASE_API } from '../api'
import ModalElement from '../components/element/modal'

const MisPedidos = () => {
  const { token } = useContext(TokenContext)
  const [dropdownOpen, setOpen] = useState<boolean>(false)
  const [modal, setMOdal] = useState<boolean>(false)
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

        <ModalElement
          title="Paga mediante bancos"
          visible={modal}
          setVisible={setMOdal}
        >
          <p className="text-left">
            <b>Tener encuenta:</b> luego de hacer la transaccion se necesita que
            alguien del equipo de <b className="text-cici">Cici Beauty place</b>{' '}
            confirme el pago, luego escribanos a nuestra linea de{' '}
            <a
              href="https://wa.me/5212224887710"
              rel="noopener noreferrer"
              target="_blank"
            >
              Whatsapp
            </a>{' '}
            con el recibo y el id de su orden. .
          </p>

          <div className="row">
            <div
              className="col-12 border-bottom cursor-pointer"
              id="content-paypal"
            >
              <h4>
                <img
                  width="100"
                  height="80"
                  alt="logo paypal"
                  src="https://deuna.app/assets/images/deuna-logo.svg"
                />
              </h4>
            </div>
            <div className="col-12 mt-2 p-2">
              <UncontrolledCollapse toggler="#content-paypal">
                <strong className="p-2">Escanea el siguiente codigo QR</strong>

                <h5>¿Qué es Deuna!?</h5>
                <p>
                  Deuna! es la app perfecta para hacer pagos y pasar dinero
                  desde tu celular. Olvídate de una vez por todas de los
                  billetes y las monedas. Deuna! cuenta, además, con el respaldo
                  de{' '}
                  <a
                    href="https://www.pichincha.com/portal/inicio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Banco Pichincha
                  </a>
                  .
                </p>
                <br />
                <h5>¿Qué necesito para empezar a usar Deuna!?</h5>
                <small>Usar Deuna! es facilísimo. Solo necesitas:</small>
                <ul>
                  <li>
                    Una cuenta activa de Banco Pichincha, básica, de ahorro o
                    corriente.
                  </li>
                  <li>Tu clave y usuario de Banca web o Banca móvil.</li>
                  <li>Tu e-mail registrado en Banco Pichincha.</li>
                  <li>Datos para conectarte a internet.</li>
                  <li>Hora automática configurada en tu celular.</li>
                </ul>
                <br />
                <p>
                  Para mas informacion de <b>DeUna</b> visite su sitio oficial{' '}
                  <a
                    href="https://deuna.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    deuna.app
                  </a>
                </p>
                <img
                  width="220"
                  src="https://deuna.app/assets/img/mockups/pagos-con-qr.png"
                  alt="ejemplo de pago con app deuna"
                />
              </UncontrolledCollapse>
            </div>

            <br />

            <div
              className="col-12 border-bottom cursor-pointer"
              id="content-deUna"
            >
              <h4>
                <img
                  width="110"
                  height="90"
                  src="https://www.pichincha.com/portal/Portals/0/MainPichincha.svg"
                  alt="logo banco pichincha"
                />
              </h4>
            </div>
            <div className="col-12 mt-2 p-2">
              <UncontrolledCollapse toggler="#content-deUna">
                <br />
                <p
                  className="text-center text-secondary cursor-pointer font-weight-bold"
                  onClick={() => {
                    toast.success('Guardado en el porta papeles')
                    copy(
                      'Banco de pichincha - #546512154545 - Cici Beauty Place'
                    )
                  }}
                >
                  Para depositos o trasferencias <BiShareAlt />
                </p>
                <Input
                  type="text"
                  value="#546512154545 - Cici Beauty Place"
                  className="p-3 font-weight-bold url-invite text-center"
                  disabled
                />
                <br />
              </UncontrolledCollapse>
            </div>
          </div>
        </ModalElement>
      </Layout>
    </>
  )
}

export default MisPedidos
