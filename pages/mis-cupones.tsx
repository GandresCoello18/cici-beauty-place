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

const MisCupones = () => {
  const [dropdownOpen, setOpen] = useState<boolean>(false)
  const [selectOptioon, setSelectOption] = useState<string>('Todas')
  const toggle = () => setOpen(!dropdownOpen)
  return (
    <>
      <NextSeo
        title="Mis Cupones | Cici beauty place"
        description="Mis cupones, en uso, caducados y pendienntes."
      />

      <Layout>
        <section className="container font-arvo mt-md-3 p-md-5">
          <div className="row justify-content-center bg-white">
            <div className="col-12 border-bottom p-3">
              <h3 className="p-1">
                Mis Cupones{' '}
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
                    <DropdownItem onClick={() => setSelectOption('Validos')}>
                      Validos
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => setSelectOption('No valido aun')}
                    >
                      No valido aun
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectOption('Usados')}>
                      Usados
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectOption('Expirados')}>
                      Expirados
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </h3>
            </div>
          </div>
          <div className="row bg-white border-bottom p-3 text-center">
            <div className="col-4 border-right font-weight-bold text-cici">
              Tipo
            </div>
            <div className="col-5 border-right font-weight-bold text-cici">
              Expira
            </div>
            <div className="col-3 font-weight-bold text-cici">Estado</div>
          </div>
          {[0, 1, 2].map((item) => (
            <div
              className="row bg-white border-bottom p-1 p-md-3 text-center"
              key={item}
            >
              <div className="col-4 border-right">
                <Badge className="bg-cici text-dark">15% descuento</Badge>
              </div>
              <div className="col-5 border-right">
                <span>Martes, 21 de agosto del 2021</span>
              </div>
              <div className="col-3">
                <Badge color="warning">Pendiente</Badge>
              </div>
            </div>
          ))}
        </section>
      </Layout>
    </>
  )
}

export default MisCupones
