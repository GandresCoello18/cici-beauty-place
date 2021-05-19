/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { FAQPageJsonLd, NextSeo } from 'next-seo'
import Link from 'next/link'
import Layout from '../components/layout'

const Faq = () => {
  return (
    <>
      <NextSeo
        title="Preguntas frecuentes | Cici beauty place"
        description="Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razón quieres mas detalles escríbenos en contacto o en nuestras redes."
        canonical="https://cici.beauty/faq"
        openGraph={{
          url: 'https://cici.beauty/faq',
          title: 'Preguntas frecuentes | Cici beauty place',
          description:
            'Encuentra alguna pregunta o duda que tengas sobre nosotros, si por alguna razón quieres mas detalles escríbenos en contacto o en nuestras redes.',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 800,
              height: 600,
              alt: 'logo de cici beauty place',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: '¿Que es Cici Beauty Place?',
            acceptedAnswerText:
              'Cici es una plataforma para la venta de productos en cuidados de la piel y belleza en las siguientes categorias: Labiales, Cuidados de la piel, Cejas y Pestañas, Brochas y Sombras. Ademas de impartir talles en nuestra tienda fisica',
          },
          {
            questionName: '¿Necesito registrarme para comprar?',
            acceptedAnswerText:
              'Si, es necesario que te registres en nuestra plataforma para nosotros saber quien eres y poder recomendarte productos a tus gustos, deberas de completar el formulario de registro o tambien puedes hacer uso de inicio de sesion rapido con Google.',
          },
          {
            questionName: '¿Que beneficios obtengo al registrarme?',
            acceptedAnswerText:
              'Cuando un nuevo usuaruio se registra obtendra un cupon totalmente gratis para usarlo en tu proxima compra, existen 3 tipos de cupones y tienes la libertad de elegir el que mas te convenga, puedes ver nuestros cupones en invitacion',
          },
          {
            questionName: '¿Qué medios de pago aceptan?',
            acceptedAnswerText:
              'Aceptamos pagos por paypal o transferencias bancarias, de preferencia Banco pichincha usando la app !De Una. Cuando realizes pagos con bancos puede que la orden tarda un poco ya que debemos de confirmar la transaccion.',
          },
          {
            questionName: 'Acabo de realizar una orden, ¿Que sigue?',
            acceptedAnswerText:
              'Debes darle seguimiento a tus ordenes en la seccion de mis pedidos consulta tus ordenes con el filtro: Pendientes de pago, Pendientes de envio, Pendientes de entrega. En cada moviemiento de tu orden estaremos notificandote por email',
          },
          {
            questionName: '¿Puedo rastrear mi orden?',
            acceptedAnswerText:
              'Si, cuando enviemos tu orden te notificaremos por email y adjuntando el numero de guia y la empresa de envios, en ocaciones solo tendras que dar click para ver tu orden en camino.',
          },
          {
            questionName: '¿Como puedo saber el lugar donde enviaran mi orden?',
            acceptedAnswerText:
              'Como usuarios registrados deberas de completar tu perfil en la pagina (mis datos) seccion direcciones, aqui podras registras como maximo 3 direccion y elejir una por defecto. Asi no tendras que especificar la direccion cada vez que realizes una orden.',
          },
        ]}
      />

      <Layout>
        <section className="container font-arvo mt-md-3 p-2 p-md-5 faq">
          <div className="row justify-content-center bg-white border-round">
            <div className="col-12 mb-4 mt-4 mt-md-0 p-md-4">
              <h1 className="text-center">
                <u className="p-1" style={{ fontSize: 30 }}>
                  Preguntas frecuentes
                </u>
              </h1>
            </div>

            <div className="col-12 col-md-8 mb-4 border-bottom">
              <h5 className="p-2">¿Que es Cici Beauty Place?</h5>
              <p>
                Cici es una plataforma para la venta de productos en cuidados de
                la piel y belleza en las siguientes categorías.
              </p>
              <ul>
                <li>Labiales</li>
                <li>Cuidados de la piel</li>
                <li>Cejas y Pestañas</li>
                <li>Brochas y Sombras</li>
              </ul>
              <p>Ademas de impartir talles en nuestra tienda física.</p>
            </div>

            <div className="col-12 col-md-8 mb-4 border-bottom">
              <h5 className="p-2">¿Necesito registrarme para comprar?</h5>
              <p>
                Si, es necesario que te registres en nuestra plataforma para
                nosotros saber quien eres y poder recomendarte productos a tus
                gustos, deberás de completar el formulario de{' '}
                <Link href="/registro">
                  <a href="/registro">registro</a>
                </Link>{' '}
                o también puedes hacer uso de inicio de sesión rápido con
                Google.
              </p>
            </div>

            <div className="col-12 col-md-8 mb-4 border-bottom">
              <h5 className="p-2">¿Que beneficios obtengo al registrarme?</h5>
              <p>
                Cuando un nuevo usuario se registra obtendrá un cupón totalmente
                gratis para usarlo en tu próxima compra, existen 3 tipos de
                cupones y tienes la libertad de elegir el que mas te convenga,
                puedes ver nuestros cupones en{' '}
                <Link href="/invitacion">
                  <a href="/invitacion">invitacion</a>
                </Link>
              </p>
            </div>

            <div className="col-12 col-md-8 mb-4 border-bottom">
              <h5 className="p-2">¿Qué medios de pago aceptan?</h5>
              <p>
                Aceptamos pagos por{' '}
                <a href="https://www.paypal.com/ec/home">paypal</a> o
                transferencias bancarias, de preferencia{' '}
                <a href="https://www.pichincha.com/portal/inicio">
                  Banco pichincha
                </a>{' '}
                usando la app <a href="https://deuna.app/">!De Una</a>.
              </p>
              <p>
                Cuando realizas pagos con bancos puede que la orden tarda un
                poco ya que debemos de confirmar la transacción.
              </p>
            </div>

            <div className="col-12 col-md-8 mb-4 border-bottom">
              <h5 className="p-2">Acabo de realizar una orden, ¿Que sigue?</h5>
              <p>
                Debes darle seguimiento a tus ordenes en la sección de{' '}
                <Link href="/mis-pedidos">
                  <a href="/mis-pedidos">mis pedidos</a>
                </Link>{' '}
                consulta tus ordenes con el filtro.
              </p>
              <ul>
                <li>Pendientes de pago</li>
                <li>Pendientes de envio</li>
                <li>Pendientes de entrega</li>
              </ul>
              <p>
                En cada movimiento de tu orden estaremos notificándote por
                email.
              </p>
            </div>

            <div className="col-12 col-md-8 mb-4 border-bottom">
              <h5 className="p-2">¿Puedo rastrear mi orden?</h5>
              <p>
                Si, cuando enviemos tu orden te notificaremos por email y
                adjuntando el numero de guiá y la empresa de envíos, en
                ocasiones solo tendrás que dar clic para ver tu orden en camino.
              </p>
            </div>

            <div className="col-12 col-md-8 mb-4 border-bottom">
              <h5 className="p-2">
                ¿Como puedo saber el lugar donde enviaran mi orden?
              </h5>
              <p>
                Como usuarios registrados deberás de completar tu perfil en la
                pagina{' '}
                <Link href="/configuracion/mis-datos">
                  <a href="/configuracion/mis-datos">mis datos</a>
                </Link>{' '}
                sección direcciones, aquí podrás registras como máximo 3
                dirección y elegir una por defecto. Así no tendrás que
                especificar la dirección cada vez que realices una orden.
              </p>
            </div>

            <div className="col-12 col-md-8 mb-4 border-bottom">
              <h5 className="p-2">¿Como puedo ver todos mis cupones?</h5>
              <p>
                Tendras que dirigirte a la pagina de{' '}
                <Link href="/mis-cupones">
                  <a href="/mis-cupones">mis cupones</a>
                </Link>{' '}
                haciendo uso del filtro para consultar.
              </p>
              <ul>
                <li>Disponibles</li>
                <li>No disponibles aun</li>
                <li>Usados</li>
                <li>Expirados</li>
              </ul>
              <p>
                Todo los cupones tiene un limite de 3 meses antes que expiren.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Faq
