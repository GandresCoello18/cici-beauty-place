/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { Modal, ModalBody } from 'reactstrap'
import Link from 'next/link'
import { FcBookmark, FcKindle, FcLike, FcOk, FcPaid } from 'react-icons/fc'
import { BiHappyBeaming } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import Layout from '../components/layout'
import StepsShopping from '../components/element/steps-shopping'
import { RootState } from '../reducers'

const Compra = () => {
  const [itemStep, setItemStep] = useState<number>(0)
  const [finishShopping, setFinishShopping] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)

  const { Cart } = useSelector((state: RootState) => state.CartReducer)

  const Styles = {
    text: {
      color: '#000',
      textDecoration: 'none',
    },
  }

  useEffect(() => {
    finishShopping && setVisible(true)

    /* if (Cart.length === 0) {
      const btnNext: any = document.querySelector('.primaryBtnStep')
      if (btnNext) {
        btnNext.style.display = 'none'
      }
    } */
  }, [finishShopping, Cart])

  return (
    <>
      {itemStep === 0 && (
        <NextSeo
          title="Carrito de compras | Cici beauty place"
          description="Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razon quieres mas detalles escribenos en contacto o en nuestras redes."
        />
      )}

      {itemStep === 1 && (
        <NextSeo
          title="Pagos de compras | Cici beauty place"
          description="Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razon quieres mas detalles escribenos en contacto o en nuestras redes."
        />
      )}

      {itemStep === 2 && (
        <NextSeo
          title="Envio de compras | Cici beauty place"
          description="Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razon quieres mas detalles escribenos en contacto o en nuestras redes."
        />
      )}

      <Layout>
        <section className="container font-arvo p-md-5">
          <div className="row justify-content-between">
            <div className="col-12 bg-white">
              {finishShopping ? (
                <div className="row justify-content-center text-center p-3 p-md-5">
                  <div className="col-12">
                    <h3 className="p-3">
                      Gracias por tu compra.!!{' '}
                      <BiHappyBeaming size={30} color="#f097ac" />
                    </h3>
                  </div>
                  <div className="col-12 col-md-5 mb-4">
                    <Link href="/mis-pedidos">
                      <a href="/mis-pedidos" style={Styles.text}>
                        <div className="p-3 border-cici border-round box-shadow-cici">
                          <FcKindle size={20} /> Mis Pedidos (2)
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-12 col-md-5 mb-4">
                    <Link href="/mis-compras">
                      <a href="/mis-compras" style={Styles.text}>
                        <div className="p-3 border-cici border-round box-shadow-cici">
                          <FcPaid size={20} /> Mis compras (20)
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-12 col-md-5 mb-4">
                    <Link href="/mis-favoritos">
                      <a href="/mis-favoritos" style={Styles.text}>
                        <div className="p-3 border-cici border-round box-shadow-cici">
                          <FcLike size={20} /> Mis favoritos (5)
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-12 col-md-5 mb-4">
                    <Link href="/mis-favoritos">
                      <a href="/mis-favoritos" style={Styles.text}>
                        <div className="p-3 border-cici border-round box-shadow-cici">
                          <FcBookmark size={20} /> Mis Cupones (1)
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              ) : (
                <StepsShopping
                  startingStep={itemStep}
                  setItemStep={setItemStep}
                  setFinishShopping={setFinishShopping}
                />
              )}
            </div>
          </div>
        </section>
      </Layout>

      <Modal
        isOpen={visible}
        toggle={() => setVisible(!visible)}
        className="font-arvo"
      >
        <ModalBody>
          <strong className="border-bottom p-2">
            <FcOk size={30} /> Su compra se realizo con exito
          </strong>
          <p className="p-3">
            Revisa la seccion de <strong>mis pedidos</strong> en su perfil, para
            completar pagos pendientes u obtener su guia de rastreo. Para saber
            màs como son nuestros envios puedes{' '}
            <Link href="/guia-de-compra/rastreo">
              <a href="/guia-de-compra/rastreo">ver aqui..!</a>
            </Link>
          </p>

          <Link href="/mis-pedidos">
            <a href="/mis-pedidos" className="btn text-cici">
              Ver mis pedidos
            </a>
          </Link>

          <img
            src="img/finish-shopping.svg"
            alt="finish-shopping"
            width="100%"
          />
        </ModalBody>
      </Modal>
    </>
  )
}

export default Compra
