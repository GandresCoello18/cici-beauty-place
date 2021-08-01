/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { MdPayment } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { InView, useInView } from 'react-intersection-observer'
import { useSelector } from 'react-redux'
import Layout from '../components/layout'
import CardLanding from '../components/landing-page/card-landing'
import { RootState } from '../reducers'
import { CardCollageProduct } from '../components/card/card-collage'

const Index = () => {
  const [ref] = useInView({
    threshold: 0,
  })

  const ProductsReducer = useSelector(
    (state: RootState) => state.ProductReducer
  )

  const ComboReducer = useSelector((state: RootState) => state.ComboReducer)

  const { ProductsBestRated } = ProductsReducer
  const { Combo } = ComboReducer

  return (
    <>
      <NextSeo
        title="Cici beauty place"
        description="Encuentra todo sobre cosméticos, belleza y cuidados para tu piel, ademas de impartir talleres en nuestra tienda física."
        canonical="https://cici.beauty/"
        openGraph={{
          url: 'https://cici.beauty/',
          title: 'Cici beauty place',
          description:
            'Encuentra todo sobre cosméticos, belleza y cuidados para tu piel, ademas de impartir talleres en nuestra tienda física.',
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
        <div className="banner-img text-white">
          <section className="container font-arvo">
            <div className="row justify-content-between mt-3 mt-lg-5">
              <div className="col-12 col-lg-5">
                <h1 className="text-start" style={{ fontSize: 36 }}>
                  Cici Beauty Place
                </h1>
                <br />
                <p className="mt-2">
                  Encuentra varios tipos de maquillaje, accesorios para
                  celulares, productos para el cabello, uñas y mucho más. Invita
                  amigos para ganar premios y promociones.
                </p>
                <div className="text-center text-md-left">
                  <Link href="/home">
                    <a className="btn bg-white text-cici" type="button">
                      Ir a tienda
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-5 mt-2 mt-md-0">
                <div className="text-center">
                  <img
                    src="img/web-app.svg"
                    alt="web app cici"
                    className="img-web-app bg-white p-3 border-round"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <section
          className="container font-arvo"
          style={{ position: 'relative', top: 660 }}
        >
          <InView className="row">
            <div className="col-12 p-2 mb-3">
              <h3 className="text-center">Productos populares</h3>
            </div>
            {ProductsBestRated.map((item) => (
              <div
                className="col-12 col-md-4 col-lg-3 font-arvo p-3"
                key={item.idProducts}
                ref={ref}
              >
                <CardLanding product={item} />
              </div>
            ))}
          </InView>
        </section>

        <div className="banner-img-2">
          <section className="container font-arvo">
            <div
              className="row justify-content-between"
              style={{ position: 'relative', top: 200 }}
            >
              <div className="col-12 col-lg-6 col-lg-5 text-center text-banner-2 text-white">
                <h3>Envíos al todo el país</h3>
                <p className="p-1">
                  Hacemos los envíos de tus compras a todo el país con los
                  servicios de entrega mas conocidos del país, llegaran a la
                  puerta de tu hogar o trabajo entre 2 y 4 días laborables.
                </p>
              </div>
              <div className="col-12 col-lg-5 text-center">
                <img
                  src="img/envios.svg"
                  alt="illustration envios"
                  className="img-web-app bg-white p-3 border-round"
                />
              </div>
            </div>
          </section>
        </div>

        <section
          className="container-fluid font-arvo"
          style={{ position: 'relative', top: 600, marginBottom: 600 }}
        >
          <div className="row justify-content-center">
            <div className="col-12 text-center p-3">
              <h2>Nuestros Combos</h2>
            </div>
            {Combo.slice(0, 3)
              .reverse()
              .map((item) => (
                <div
                  className="col-xs-12 col-md-6 col-lg-4 mb-4 font-arvo"
                  key={item.idCombo}
                >
                  <CardCollageProduct combo={item} />
                </div>
              ))}
          </div>

          <div className="row bg-white justify-content-center no-gutters ftco-services">
            <div className="col-lg-3 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div className="media block-6 services p-4 py-md-5">
                <div className="media-body">
                  <CgProfile size={50} />
                  <h3 className="heading">Administra tu cuenta</h3>
                  <p>
                    Crea una cuenta completando el{' '}
                    <Link href="/registro">
                      <a href="/registro">formulario</a>
                    </Link>{' '}
                    de registro o con la ayuda de{' '}
                    <Link href="/login">
                      <a href="/login"> otras app</a>
                    </Link>
                    , podrás ver tus pedidos, los productos comprados, favoritos
                    y mas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div className="media block-6 services p-4 py-md-5">
                <div className="media-body">
                  <BiSupport size={50} />
                  <h3 className="heading">Soporte al cliente</h3>
                  <p>
                    Si tienes dudas, preguntas o necesitas mas información,
                    puedes escribirnos en nuestras cuentas oficiales o dejar un
                    mensaje
                    <Link href="/contacto">
                      <a href="/contacto"> aqui</a>
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div className="media block-6 services p-4 py-md-5">
                <div className="media-body">
                  <MdPayment size={50} />
                  <h3 className="heading">Pagos seguros</h3>
                  <p>
                    Paga de forma segura con las app de pago mas conocidas como
                    <u> Paypal</u> o paga desde tu celular con tu{' '}
                    <u>banco de confianza</u>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>

      <style jsx>
        {`
          .banner-img {
            width: 100%;
            height: 800px;
            background-image: url('img/banner.png');
            background-size: cover;
            position: absolute;
            background-repeat: no-repeat;
            background-position: 0 -50px;
          }

          .img-web-app {
            width: 240px;
          }

          @media screen and (min-width: 992px) {
            .banner-img {
              height: 850px;
              background-position: 0 -200px;
            }
            .text-banner-2 {
              position: relative;
              top: 200px;
            }
          }

          @media screen and (min-width: 1250px) {
            .banner-img {
              height: 900px;
              background-position: 0 -300px;
            }

            .img-web-app {
              width: 300px;
            }
          }

          @media screen and (min-width: 1400px) {
            .banner-img {
              height: 1000px;
              background-position: 0 -400px;
            }
          }

          .banner-img-2 {
            height: 800px;
            position: relative;
            top: 600px;
            background-size: cover;
            background: url('img/banner-2.png') no-repeat center;
          }
        `}
      </style>
    </>
  )
}

export default Index
