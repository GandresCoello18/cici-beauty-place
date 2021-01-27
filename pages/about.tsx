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
        description="Equipo de trabajo que esta detras de cici beauty place."
      />

      <Layout>
        <section className="container mt-5 mb-5 p-2 font-arvo">
          <div className="row">
            <div className="col-12 col-8 text-center">
              <h3 className="font-weight-bold">Sobre Nosotros</h3>
              <p>Descubre al personal detrás del cici beauty place</p>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <CardProfile
                imgSource="https://andres-coello-goyes.herokuapp.com/img/profile-test.jpg"
                alt="Andres coello"
                name="Andres Coello Goyes"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, ea
                vel nihil maxime eaque incidunt debitis optio minus nisi soluta
                cupiditate atque error, laborum aspernatur, sit quia sunt dolorum
                veniam?"
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
                imgSource="https://scontent.fgye18-1.fna.fbcdn.net/v/t1.0-9/95503792_1724734461002446_6638469828300505088_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=H43XJ3Posm0AX8LuUCW&_nc_ht=scontent.fgye18-1.fna&oh=ede9a2eaf47d1c29a7deb602996095c2&oe=601505ED"
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
