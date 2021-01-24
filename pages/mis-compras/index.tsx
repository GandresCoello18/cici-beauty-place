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
import Link from 'next/link'
import Layout from '../../components/layout'

const Compras = () => {
  const [dropdownOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!dropdownOpen)

  return (
    <>
      <NextSeo
        title="Mis Compras | Cici beauty place"
        description="Mis productos comprados."
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
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <div className="col-12 border-bottom p-3 mb-3" key={item}>
                <div className="card mb-3 border-0" style={{ width: '100%' }}>
                  <div className="row g-0 justify-content-between">
                    <div className="col-3 col-md-1">
                      <img
                        src="https://ae01.alicdn.com/kf/H54f3b265518e41b0a993d1a915488810d/FLD5-15Pcs-Makeup-Brushes-Tool-Set-Cosmetic-Powder-Eye-Shadow-Foundation-Blush-Blending-Beauty-Make-Up.jpg_220x220xz.jpg_.webp"
                        width="100"
                        height="100"
                        alt="..."
                      />
                    </div>
                    <div className="col-9 col-md-3">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <strong style={{ fontSize: 20 }}>
                          $ 31 <span className="text-cici">X 3</span>
                        </strong>
                      </div>
                    </div>
                    <div className="col-8 col-md-2 p-2">
                      Estado: <Badge color="success">Entregado</Badge>
                    </div>
                    <div className="col-10 col-md-3 p-2">
                      Ultima actualizacion:{' '}
                      <Badge color="info">martes 21 de agosto 2020</Badge>
                    </div>
                    <div className="col-2">
                      <Link href={`/mis-compras/${'fewfuwerjhfnue'}`}>
                        <a
                          href={`/mis-compras/${'fewfuwerjhfnue'}`}
                          style={{ color: '#000' }}
                          className="btn bg-cici float-right"
                        >
                          Ver detalles
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Compras
