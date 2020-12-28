/* eslint-disable jsx-a11y/iframe-has-title */
import React, { ReactNode } from 'react'
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
  const Styles = {
    border: {
      border: 1,
      borderStyle: 'solid',
    },
  }
  return (
    <>
      <NavBar />
      {children}
      <footer
        className="coontainer p-1 p-md-3 mt-4 font-arvo"
        style={{ backgroundColor: '#232F3E', color: '#fff' }}
      >
        <div className="row justify-content-around">
          <div className="col-12 col-md-3 col-lg-2 p-3 p-md-2">
            <h5 className="font-weight-bold text-center">
              <span
                className="border-white p-2 border-round"
                style={Styles.border}
              >
                Guìa de compras
              </span>
            </h5>
            <ul className="text-center ul list-unstyled">
              <li className="p-1">Crerar cuenta (opcional)</li>
              <li className="p-1">Pago</li>
              <li className="p-1">Envio</li>
              <li className="p-1">Guia para rastreo</li>
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-2 p-3 p-md-2">
            <h5 className="font-weight-bold text-center">
              <span
                className="border-white p-2 border-round"
                style={Styles.border}
              >
                Conòcenos
              </span>
            </h5>
            <ul className="text-center ul list-unstyled">
              <li className="p-1">Preguntas Frecuentes</li>
              <li className="p-1">Sobre Nosotros</li>
              <li className="p-1">Contactos</li>
              <li className="p-1">Blog</li>
              <li className="p-1">Ayuda</li>
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-2 p-3 p-md-2">
            <h5 className="font-weight-bold text-center">
              <span
                className="border-white p-2 border-round"
                style={Styles.border}
              >
                Nuestras Redes
              </span>
            </h5>
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
                  href="https://wa.me/593992239138"
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

          <div className="col-12 col-md-3 col-lg-2 p-3 p-md-2">
            <h5 className="font-weight-bold text-center">
              <span
                className="border-white p-2 border-round"
                style={Styles.border}
              >
                Ubicaciòn
              </span>
            </h5>
            &nbsp; <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.925205869311!2d-79.5342224706784!3d-1.799622377453734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902cd7df1a3c6bd7%3A0x881f91e8148cd6dc!2s10%20de%20Agosto%2C%20Babahoyo!5e0!3m2!1ses-419!2sec!4v1609016640308!5m2!1ses-419!2sec"
              style={{ width: '95%', height: '90%' }}
            />
          </div>
        </div>
        <br />
      </footer>
    </>
  )
}

export default Layout
