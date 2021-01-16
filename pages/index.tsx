import { Store } from 'redux'
import React from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { AllAction, RootState } from '../reducers'
import { setTitle } from '../reducers/app'

const Index = () => {
  return (
    <>
      <NextSeo
        title="Cici beauty place"
        description="Encuentra todo sobre cosmeticos y belleza."
      />
      <div className="banner-img text-white">
        <section className="container font-arvo">
          <div className="row justify-content-between mt-3 mt-lg-5">
            <div className="col-12 col-lg-5">
              <h1 className="text-center">
                <figure className="logo float-left bg-white">
                  <img src="img/logo.jpg" alt="logotipo" />
                </figure>
                &nbsp; &nbsp; Cici Beauty Place
              </h1>
              <br />
              <p className="mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque neque libero eum deleniti fugiat consequuntur quos
                harum magnam fugit id veniam quod, facere facilis sunt vitae
                corrupti assumenda.
                <Link href="/home">
                  <a
                    href="/home"
                    className="btn bg-white text-cici ml-3 ml-md-0 mt-3 mt-md-0 m-0 m-md-3"
                    type="button"
                  >
                    Ir a tienda
                  </a>
                </Link>
              </p>
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

      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />

      <style jsx>
        {`
          .banner-img {
            width: 100%;
            height: 700px;
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
              height: 800px;
              background-position: 0 -200px;
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
        `}
      </style>
    </>
  )
}

Index.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  // redux
  store.dispatch(setTitle('Server Side Rendering'))
}

export default Index
