/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import { AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import Layout from '../components/layout'
import CardProfile from '../components/card/card-profile'

const About = () => {
  return (
    <>
      <NextSeo
        title="Sobre nosotros | Cici beauty place"
        description="Descubre el equipo de trabajo que esta detrás de cici beauty place."
        canonical="https://cici.beauty/about"
        openGraph={{
          url: 'https://cici.beauty/about',
          title: 'Sobre nosotros | Cici beauty place',
          description:
            'Descubre el equipo de trabajo que esta detrás de cici beauty place.',
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
        <section className="container mt-5 mb-5 p-2 font-arvo">
          <div className="row">
            <div className="col-12 col-md-8 text-center">
              <h3 className="font-weight-bold">Sobre Nosotros</h3>
              <p>Descubre al equipo de trabajo de cici beauty place</p>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <CardProfile
                imgSource="img/me.jpg"
                alt="Andres coello"
                name="Andres Coello Goyes"
                description="Desarrollador de software en ambiente web y mobil multiplataforma, amante de la lectura, astronomía, colores, naturaleza y música. Autodidacta y en contante aprendizaje con nuevas tecnologías."
                cargo="Developer Full Stack"
              >
                <div className="row justify-content-center">
                  <div className="col-3">
                    <a
                      href="https://www.facebook.com/andres.coellogoyes/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineFacebook color="#fff" size={25} />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="https://www.instagram.com/coellogoyes/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiInstagram color="#fff" size={25} />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="https://twitter.com/AndresC79085858"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineTwitter color="#fff" size={25} />
                    </a>
                  </div>
                </div>
              </CardProfile>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <CardProfile
                imgSource="img/liz.jpg"
                alt="Lizeth Avilez"
                name="Lizeth Avilez"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, ea
                vel nihil maxime eaque incidunt debitis optio minus nisi soluta
                cupiditate atque error, laborum aspernatur, sit quia sunt dolorum
                veniam?"
                cargo="CEO de cici beauty place"
              >
                <div className="row justify-content-center">
                  <div className="col-3">
                    <a
                      href="https://www.facebook.com/lizitaavilez"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineFacebook color="#fff" size={25} />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="https://www.instagram.com/lizzavilez/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiInstagram color="#fff" size={25} />
                    </a>
                  </div>
                </div>
              </CardProfile>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About
