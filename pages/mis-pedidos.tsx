import { Store } from 'redux'
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
import { AllAction, RootState } from '../reducers'
import { setTitle } from '../reducers/app'
import Layout from '../components/layout'

const Favorite = () => {
  const [dropdownOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!dropdownOpen)
  return (
    <>
      <NextSeo
        title="Mis Pedidos | Cici beauty place"
        description="Mis pedidos."
      />

      <Layout>
        <section className="container font-arvo mt-md-3 p-md-2 p-md-5">
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
                    Todas
                  </Button>
                  <DropdownToggle split className="bg-cici" />
                  <DropdownMenu>
                    <DropdownItem>Todas</DropdownItem>
                    <DropdownItem>Pendiente de pago</DropdownItem>
                    <DropdownItem>Pendiente de envio</DropdownItem>
                    <DropdownItem>Pendiente de entrega</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </h3>
            </div>
          </div>
          <div className="row bg-white border-bottom p-3">
            <div className="col-5 border-right">Informacion</div>
            <div className="col-4 border-right">Rastreo</div>
            <div className="col-3">Estado</div>
          </div>
          {[0, 1, 2].map((item) => (
            <div className="row bg-white border-bottom p-3" key={item}>
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

Favorite.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering Favorite'))
}

export default Favorite
