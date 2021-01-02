import { Store } from 'redux'
import React from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { ImFacebook2 } from 'react-icons/im'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { AllAction, RootState } from '../reducers'
import { setTitle } from '../reducers/app'
import Layout from '../components/layout'

const Index = () => {
  return (
    <>
      <NextSeo
        title="Contacto | Cici beauty place"
        description="Contacte con nosotros si tieneal algun problema o duda."
      />

      <Layout>
        <section className="container font-arvo mt-3 p-2 p-md-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h2 className="text-center">Contacta a Cici beauty place</h2>
              <p className="p-1">
                Siempre que quieras puedes escribirnos, sin embargo es posible
                que tu respuesta esté en nuestras{' '}
                <Link href="/faq">
                  <a href="/faq">preguntas frecuentes</a>
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="row justify-content-between mt-4">
            <div className="col-12 col-lg-5 mb-4">
              <div className="row text-center">
                <div className="col-12 col-lg-6 p-3">
                  <h5>Correo electronico</h5>
                  <a
                    href="mailto:info@tus10segundos.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdEmail /> &nbsp; &nbsp; cici@gamil.com
                  </a>
                </div>
                <div className="col-12 col-lg-6 p-3">
                  <h5>Facebook</h5>
                  <a
                    href="https://www.facebook.com/cicibeautyplace"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImFacebook2 /> &nbsp; &nbsp; cicibeautyplace
                  </a>
                </div>
                <div className="col-12 col-lg-6 p-3">
                  <h5>Instagram</h5>
                  <a
                    href="https://www.instagram.com/cicibeautyplace/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram /> &nbsp; &nbsp; cicibeautyplace
                  </a>
                </div>
                <div className="col-12 col-lg-6 p-3">
                  <h5>Whatsapp</h5>
                  <a
                    href="https://wa.me/593980378869"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp /> &nbsp; &nbsp; cicibeautyplace
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <h5 className="text-center">Deja tu mensaje aqui</h5>
              <Form>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="message"
                    placeholder="Escribe tu mensaje"
                  />
                </FormGroup>
                <div className="row justify-content-between">
                  <div className="col-12 col-lg-6">
                    <FormGroup>
                      <Input type="text" name="name" placeholder="Tu nombre" />
                    </FormGroup>
                  </div>
                  <div className="col-12 col-lg-6">
                    <FormGroup>
                      <Input type="email" name="email" placeholder="Tu email" />
                    </FormGroup>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-12 col-lg-6">
                    <FormGroup>
                      <Input
                        type="text"
                        name="tema"
                        placeholder="Sobre el tema"
                      />
                    </FormGroup>
                  </div>
                  <div className="col-12 col-lg-6">
                    <Button
                      type="submit"
                      outline
                      block
                      style={{ backgroundColor: '#f1d7dd' }}
                    >
                      Enviar Mensaje
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

Index.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering contacto'))
}

export default Index
