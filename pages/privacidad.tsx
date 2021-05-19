/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../components/layout'

const PrivacidadPage = () => {
  return (
    <>
      <NextSeo
        title="Politicas de privacidad - cici beauty place"
        description="La siguiente Política de Privacidad fue creada para ayudarlo a entender cómo será usada la información que usted provee a Cici beauty place."
        canonical="https://cici.beauty/registro"
        openGraph={{
          url: 'https://cici.beauty/registro',
          title: 'Politicas de privacidad',
          description:
            'La siguiente Política de Privacidad fue creada para ayudarlo a entender cómo será usada la información que usted provee a Cici beauty place',
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

      <Layout>
        <section className="container-fluid font-arvo bg-white p-1 p-md-4">
          <section className="container bg-cici p-4">
            <h1 className="p-1 font-weight-bold" style={{ fontSize: 25 }}>
              Politica de privacidad de Cici beauty place
            </h1>
            <p className="p1">
              El siguiente documento explica como cuidamos tus datos y los
              terminos de uso cuando usas Cici beauty place.
            </p>
            <p className="p-1">
              Su privacidad es de gran importancia, El Cici beauty place se
              compromete a mantener las políticas de confidencialidad, mas
              adelante descritas, con el objeto de proteger la privacidad de la
              información personal de sus usuarios, obtenida a través de sus
              servicios en línea. Las Políticas de privacidad que a continuación
              se detallan pueden tener cambios futuros, para lo cual
              utilizaremos todos los canales de comunicación posibles para
              hacerlo saber a nuestros usuarios.
            </p>
          </section>

          <section className="container mt-3">
            <h4 className="p-1">
              <span className="p-1 text-cici font-weight-bold mr-3">1.</span>
              ¿Qué tipo de información recolectamos?
            </h4>
            <p className="p-1">
              No se requiere que usted nos dé a nosotros ningún tipo de
              información personal para acceder a nuestro Website ni para ver la
              información que proveemos generalmente en nuestro Website. Sin
              embargo, podremos ofrecerle la oportunidad de registrarse con
              nosotros o unirse a nuestra lista de correo. A pesar de que no es
              necesario registrarse para acceder a nuestra Website. En caso de
              querer comprar algun producto necesitaremos sus datos personales
              para el registro en cada orden así como ser redireccionado a algún
              medio de pago (Paypal) para realizar el pago respectivo. En otros
              momentos, puede que también se le pida que nos provea información
              adicional, como su direccion, ciudad, y otra información personal
              para que usted reciba su orden de nuestros servicios a futuro.
              cici.beauty podría necesitar esta información para conocerlo
              mejor, ayudarlo a entender nuevos servicios, programas y ofertas
              en las cuales usted pueda estar interesado y así mejorar su
              experiencia online.
            </p>
          </section>

          <section className="container mt-3">
            <h4 className="p-1">
              <span className="p-1 text-cici font-weight-bold mr-3">2.</span>
              Finalidad que se le dará a la información
            </h4>
            <p className="p-1">
              Los datos personales contenidos en la información confidencial,
              son utilizados para proveer al usuario un servicio personalizado y
              acorde a sus necesidades, en su caso, ofreciendo productos y
              publicidad.
            </p>
          </section>

          <section className="container mt-3">
            <h4 className="p-1">
              <span className="p-1 text-cici font-weight-bold mr-3">3.</span>
              Servicios de terceros con los cuales compartimos información del
              usuario
            </h4>
            <h5 className="font-weight-bold mt-3">Estadísticas y anuncios</h5>

            <ul>
              <li>Google Adwords</li>
            </ul>

            <h5 className="font-weight-bold">Datos personales</h5>

            <ul>
              <li>Datos de uso</li>
            </ul>

            <h5 className="font-weight-bold">Registro y autenticación</h5>

            <ul>
              <li>Google Authentication</li>
            </ul>

            <h5 className="font-weight-bold">Procesamiento de pagos</h5>

            <ul>
              <li>PayPal</li>
              <li>Trasferencia bancaria</li>
            </ul>

            <h5 className="font-weight-bold">Datos personales</h5>

            <ul>
              <li>Nombres y apellidos</li>
              <li>Correo electrónico</li>
            </ul>

            <section className="container mt-3">
              <h4 className="p-1">
                <span className="p-1 text-cici font-weight-bold mr-3">4.</span>
                Cómo examinar, actualizar o borrar la información de registro
              </h4>
              <p className="p-1">
                Como parte del uso de nuestros servicios, usted es responsable
                de actualizar la información sometida para que sea actualizada y
                completa. Para actualizar su información de registro, por favor
                acceda a su cuenta de cici.beauty y haga el cambio deseado en
                modificar perfil. Usted también podrá acceder su cuenta de
                cici.beauty para cambiar sus preferencias tales como cancelar su
                orden.
              </p>
            </section>
          </section>
        </section>
      </Layout>
    </>
  )
}

export default PrivacidadPage
