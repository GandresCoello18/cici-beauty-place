/* eslint-disable @typescript-eslint/camelcase */
import React, { useState } from 'react'
import { CorporateContactJsonLd, NextSeo } from 'next-seo'
import Link from 'next/link'
import { ImFacebook2 } from 'react-icons/im'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Alert, Button, Form, FormFeedback, FormGroup, Input } from 'reactstrap'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { Controller, useForm } from 'react-hook-form'
import Layout from '../components/layout'
import { CreateContact } from '../api/contact'
import { Contact } from '../interfaces/contact'
import SpinnerLoader from '../components/element/spinner-cici'

interface FormContact {
  message: string
  name: string
  subject: string
  email: string
}

const Index = () => {
  const methods = useForm<FormContact>()
  const [loading, setLoading] = useState<boolean>(false)
  const [feedback, setFeedback] = useState<{
    content: string
    type: string
  }>({
    content: '',
    type: '',
  })
  const { handleSubmit, control, reset, errors } = methods

  const send = async (data: FormContact) => {
    setFeedback({
      type: '',
      content: '',
    })

    const { message, name, subject, email } = data
    setLoading(true)

    try {
      const contact: Contact = {
        message,
        name,
        subject,
        email,
      }

      await CreateContact({ contact })
      reset()

      setFeedback({
        type: 'success',
        content: 'Su mensaje fue enviado.',
      })
    } catch (error) {
      setFeedback({
        type: 'danger',
        content: error.message,
      })
    }

    setLoading(false)
  }

  return (
    <>
      <NextSeo
        title="Contacto | Cici beauty place"
        description="Contacte con nosotros por nuestra tienda fisica o nuestas redes si tieneal algun problema o duda."
        canonical="https://cici.beauty/contacto"
        openGraph={{
          url: `https://cici.beauty/contacto`,
          title: 'Contacto',
          description:
            'Contacte con nosotros por nuestra tienda fisica o nuestas redes si tieneal algun problema o duda',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 700,
              height: 500,
              alt: 'logo de cici',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <CorporateContactJsonLd
        url="https://cici.beauty/contacto"
        logo="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
        contactPoint={[
          {
            telephone: '+593 980 378 869',
            contactType: 'Servicio al cliente',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish'],
          },
        ]}
      />

      <Layout>
        <section className="container font-arvo mt-md-3 p-2 p-md-5 bg-white mb-md-3">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h2 className="text-center">Contacta a Cici</h2>
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
                    className="text-cici"
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
                    className="text-cici"
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
                    className="text-cici"
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
                    className="text-cici"
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
              <Form onSubmit={handleSubmit(send)}>
                <FormGroup>
                  <Controller
                    as={
                      <Input
                        invalid={errors.message && true}
                        type="textarea"
                        name="message"
                        placeholder="Escribe tu mensaje"
                      />
                    }
                    name="message"
                    control={control}
                    rules={{ required: true }}
                  />
                </FormGroup>
                <FormFeedback invalid={errors.message && true}>
                  {errors.message && 'Escribe el contendio de su mensaje'}
                </FormFeedback>
                <div className="row justify-content-between">
                  <div className="col-12 col-lg-6">
                    <FormGroup>
                      <Controller
                        as={
                          <Input
                            invalid={errors.name && true}
                            type="text"
                            name="name"
                            placeholder="Tu nombre"
                          />
                        }
                        name="name"
                        control={control}
                        rules={{ required: true }}
                      />
                    </FormGroup>
                    <FormFeedback invalid={errors.name && true}>
                      {errors.name && 'Escribe tu nombre'}
                    </FormFeedback>
                  </div>
                  <div className="col-12 col-lg-6">
                    <FormGroup>
                      <Controller
                        as={
                          <Input
                            invalid={errors.email && true}
                            type="email"
                            name="email"
                            placeholder="Tu email"
                          />
                        }
                        name="email"
                        control={control}
                        rules={{ required: true }}
                      />
                    </FormGroup>
                    <FormFeedback invalid={errors.email && true}>
                      {errors.email && 'Escribe tu direccion de correo'}
                    </FormFeedback>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-12 col-lg-6">
                    <FormGroup>
                      <Controller
                        as={
                          <Input
                            invalid={errors.subject && true}
                            type="text"
                            name="subject"
                            placeholder="Sobre el tema"
                          />
                        }
                        name="subject"
                        control={control}
                        rules={{ required: true }}
                      />
                      <FormFeedback invalid={errors.subject && true}>
                        {errors.subject && 'Escribe tu tema'}
                      </FormFeedback>
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
              <div className="p-2">
                {loading && <SpinnerLoader />}
                <Alert color={feedback.type}>{feedback.content}</Alert>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Index
