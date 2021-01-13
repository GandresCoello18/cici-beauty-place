/* eslint-disable no-unused-expressions */
import { Store } from 'redux'
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { Modal, ModalBody } from 'reactstrap'
import Link from 'next/link'
import { FcFaq, FcLike, FcOk, FcPaid, FcShipped } from 'react-icons/fc'
import { BiHappyBeaming } from 'react-icons/bi'
import { AllAction, RootState } from '../reducers'
import { setTitle } from '../reducers/app'
import Layout from '../components/layout'
import StepsShopping from '../components/element/steps-shopping'
import FinishShopping from '../components/svg/finish-shopping'

const Compra = () => {
  const [itemStep] = useState<number>(0)
  const [finishShopping, setFinishShopping] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)

  const Styles = {
    text: {
      color: '#000',
      textDecoration: 'none',
    },
  }

  useEffect(() => {
    finishShopping && setVisible(true)
  }, [finishShopping])

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
                    <Link href="/">
                      <a href="/" style={Styles.text}>
                        <div className="p-3 border-cici border-round box-shadow-cici">
                          <FcPaid size={20} /> Mis compras (20)
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-12 col-md-5 mb-4">
                    <Link href="/">
                      <a href="/" style={Styles.text}>
                        <div className="p-3 border-cici border-round box-shadow-cici">
                          <FcLike size={20} /> Mis favoritos (5)
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-12 col-md-5 mb-4">
                    <Link href="/">
                      <a href="/" style={Styles.text}>
                        <div className="p-3 border-cici border-round box-shadow-cici">
                          <FcFaq size={20} /> Centro de mensajes
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-12 col-md-5 mb-4">
                    <Link href="/">
                      <a href="/" style={Styles.text}>
                        <div className="p-3 border-cici border-round box-shadow-cici">
                          <FcShipped size={20} /> Mis productos en envio
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              ) : (
                <StepsShopping
                  startingStep={itemStep}
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
            Despues de 24 horas puede revisar la seccion de mis pedidos en su
            perfil, para obtener su guia de rastreo. Para saber mas como son
            nuestras envios puedes{' '}
            <Link href="/guia-de-compra/rastreo">
              <a href="/guia-de-compra/rastreo">ver aqui..!</a>
            </Link>
          </p>

          <Link href="/productos">
            <a href="/productos" className="btn text-cici">
              Ver mis compras
            </a>
          </Link>

          <FinishShopping />
        </ModalBody>
      </Modal>
    </>
  )
}

Compra.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering Compra'))
}

export default Compra
