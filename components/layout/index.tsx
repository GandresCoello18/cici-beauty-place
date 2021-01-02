/* eslint-disable jsx-a11y/iframe-has-title */
import React, { ReactNode } from 'react'
import Link from 'next/link'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import NavBar from '../nav/navBar'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-left">
                <div className="footer-logo">
                  <a href="/">
                    <img
                      src="https://scontent.fgye18-1.fna.fbcdn.net/v/t1.0-9/101095190_255714909200617_8749237192456404992_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=LNAFOmAIaAEAX94QBnj&_nc_ht=scontent.fgye18-1.fna&oh=b98723790cdb5d9db1274f200e58c29b&oe=6010FC9C"
                      alt="logotipo"
                      width="50"
                      height="50"
                    />
                  </a>
                </div>
                <ul>
                  <li>
                    Direccion: Calle 10 de agosto entre Martín Icaza y
                    Rocafuerte (frente al hotel Capitol) Babahoyo, Ecuador
                  </li>
                  <li>Telelfono: +593 980 378 869</li>
                  <li>Correo: cici@gmail.com</li>
                </ul>
                <div className="footer-social">
                  <ul className="text-center ul list-unstyled">
                    <li>
                      <a
                        href="https://www.facebook.com/cicibeautyplace"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillFacebook color="#fff" size={30} />
                      </a>
                      &nbsp; &nbsp;
                      <a
                        href="https://wa.me/593980378869"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiOutlineWhatsApp color="#fff" size={30} />
                      </a>
                      &nbsp; &nbsp;
                      <a
                        href="https://www.instagram.com/cicibeautyplace"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillInstagram color="#fff" size={30} />
                      </a>
                      &nbsp; &nbsp;
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1">
              <div className="footer-widget">
                <h5>Comprar</h5>
                <ul>
                  <li>
                    <a href="/">Crerar cuenta (opcional)</a>
                  </li>
                  <li>
                    <a href="/">Pago</a>
                  </li>
                  <li>
                    <a href="/">Envio</a>
                  </li>
                  <li>
                    <a href="/">Guia para rastreo</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-widget">
                <h5>Conòcenos</h5>
                <ul>
                  <li>
                    <Link href="/faq">
                      <a href="/faq">Preguntas Frecuentes</a>
                    </Link>
                  </li>
                  <li>
                    <a href="/">Sobre Nosotros</a>
                  </li>
                  <li>
                    <Link href="/contacto">
                      <a href="/contacto">Contactos</a>
                    </Link>
                  </li>
                  <li>
                    <a href="/">Ayuda</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="newslatter-item">
                <h5>Mentente informado</h5>
                <p>Registra tu email para no perderte las proximas ofertas.</p>
                <form action="#" className="subscribe-form">
                  <input type="text" placeholder="Direccion de correo" />
                  <button type="button">Suscribete</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-reserved p-4">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-12 col-md-5">
                <div className="copyright-text" />
                <div className="payment-pic">
                  <img
                    src="https://preview.colorlib.com/theme/fashi/img/payment-method.png"
                    alt="paymet method"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
