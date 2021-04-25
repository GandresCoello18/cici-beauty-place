/* eslint-disable no-console */
import React from 'react'
import Link from 'next/link'
import * as EmailValidator from 'email-validator'
import { useForm } from 'react-hook-form'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import { toast } from 'react-toast'

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
      toast.warn('Introduce un correo valido.')
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
                      <img
                        src="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
                        alt="logotipo"
                      />
                    </figure>
                  </a>
                </Link>
              </div>
              <ul>
                <li>
                  Dirección: Calle 10 de agosto entre Martín Icaza y Rocafuerte
                  (frente al hotel Capitol) Babahoyo, Ecuador
                </li>
                <li>Telelfono: +593 980 378 869</li>
                <li>Correo: team@cici.beauty</li>
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
                    <a href="/guia-de-compra">Crear cuenta</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guia-de-compra/pago">
                    <a href="/guia-de-compra/pago">Pago</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guia-de-compra/envios">
                    <a href="/guia-de-compra/envios">Envió</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guia-de-compra/rastreo">
                    <a href="/guia-de-compra/rastreo">Guía para rastreo</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-widget">
              <h5>Conócenos</h5>
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
                    <a href="/contacto">Contacto</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="newslatter-item">
              <h5>Mantente informado</h5>
              <p>Registra tu correo para no perderte las próximas ofertas.</p>
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
                <button type="submit">Subscribe</button>
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
