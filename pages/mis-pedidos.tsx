import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import {
  Badge,
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap'
import Layout from '../components/layout'

const MisPedidos = () => {
  const [dropdownOpen, setOpen] = useState<boolean>(false)
  const [selectOptioon, setSelectOption] = useState<string>('Todas')
  const toggle = () => setOpen(!dropdownOpen)
  return (
    <>
      <NextSeo
        title="Mis Pedidos | Cici beauty place"
        description="Mis pedidos."
      />

      <Layout>
        <section className="container font-arvo mt-md-3 p-md-5">
          <div className="row justify-content-center bg-white">
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
                    <DropdownItem onClick={() => setSelectOption('Todas')}>
                      Todas
                    </DropdownItem>
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
              Rastreo
            </div>
            <div className="col-3 font-weight-bold text-cici">Estado</div>
          </div>
          {[0, 1, 2].map((item) => (
            <div
              className="row bg-white border-bottom p-1 p-md-3 text-center"
              key={item}
            >
              <div className="col-12 bg-cici mb-2 text-left p-3">
                <img
                  width="100"
                  height="100"
                  src="http://localhost:9000/static/51R9Nw0GwIL._AC_UL320_.png"
                  alt="img pedido"
                />
                <span>
                  Crema anti envejecimiento para la hidratacion de la piel.{' '}
                  <strong>+ 3 productos</strong>
                </span>
              </div>
              <div className="col-5 border-right">
                Lapiz labial y 3 productos mas.
              </div>
              <div className="col-4 border-right">
                <Badge className="p-1">15550285422</Badge>
                <br />
                <Badge color="success">Servientrega</Badge>
              </div>
              <div className="col-3">
                <Badge color="info">En logistica</Badge>
              </div>
            </div>
          ))}
        </section>
      </Layout>
    </>
  )
}

export default MisPedidos
