import React from 'react'
import Link from 'next/link'
import * as EmailValidator from 'email-validator'
import { useForm } from 'react-hook-form'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import { BASE_API } from '../../api'

interface Subs {
  email: string
}

const Footer = () => {
  const { register, handleSubmit, errors, reset } = useForm<Subs>()

  const sendSuscribe = (data: Subs) => {
    if (EmailValidator.validate(data.email)) {
      console.log('se guardo')
      reset()
    } else {
      alert('Introduce un email valido.')
    }
  }

  return (
    <footer className="footer-section font-arvo">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-left">
              <div className="footer-logo">
                <Link href="/home">
                  <a href="/home">
                    <figure className="logo">
                      <img src={`${BASE_API}/static/logo.jpg`} alt="logotipo" />
                    </figure>
                  </a>
                </Link>
              </div>
              <ul>
                <li>
                  Direccion: Calle 10 de agosto entre Martín Icaza y Rocafuerte
                  (frente al hotel Capitol) Babahoyo, Ecuador
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
                  <Link href="/guia-de-compra">
                    <a href="/guia-de-compra">Crerar cuenta (opcional)</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guia-de-compra/pago">
                    <a href="/guia-de-compra/pago">Pago</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guia-de-compra/envios">
                    <a href="/guia-de-compra/envios">Envio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guia-de-compra/rastreo">
                    <a href="/guia-de-compra/rastreo">Guia para rastreo</a>
                  </Link>
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
                  <Link href="/about">
                    <a href="/about">Sobre Nosotros</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contacto">
                    <a href="/contacto">Contactos</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="newslatter-item">
              <h5>Mantente informado</h5>
              <p>Registra tu email para no perderte las proximas ofertas.</p>
              <form
                className="subscribe-form"
                onSubmit={handleSubmit(sendSuscribe)}
              >
                <input
                  type="email"
                  name="email"
                  ref={register({ required: true })}
                  placeholder="Direccion de correo"
                />
                {errors.email && (
                  <p className="text-danger">Este campo es requerido</p>
                )}
                <button type="submit">Suscribete</button>
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
  )
}

export default Footer
