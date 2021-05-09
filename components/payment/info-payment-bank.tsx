/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import copy from 'copy-to-clipboard'
import React from 'react'
import { BiShareAlt } from 'react-icons/bi'
import { toast } from 'react-toast'
import { Input, UncontrolledCollapse } from 'reactstrap'

export const InfoPaymentBank = () => {
  return (
    <>
      <p className="text-left">
        <b>Tener en cuenta:</b> luego de hacer la transacción se necesita que
        que alguien del equipo de <b className="text-cici">Cici Beauty place</b>{' '}
        confirme el pago, luego escribanos a nuestra linea de{' '}
        <a
          href="https://wa.me/5212224887710"
          rel="noopener noreferrer"
          target="_blank"
        >
          Whatsapp
        </a>{' '}
        con el recibo y el id de su orden.
      </p>

      <div className="row">
        <div
          className="col-12 border-bottom cursor-pointer"
          id="content-paypal"
        >
          <h4>
            <img
              width="100"
              height="80"
              alt="logo paypal"
              src="https://deuna.app/assets/images/deuna-logo.svg"
            />
          </h4>
        </div>
        <div className="col-12 mt-2 p-2">
          <UncontrolledCollapse toggler="#content-paypal">
            <strong className="p-2">Escanea el siguiente código QR</strong>

            <h5>¿Qué es Deuna!?</h5>
            <p>
              Deuna! es la app perfecta para hacer pagos y pasar dinero desde tu
              celular. Olvídate de una vez por todas de los billetes y las
              monedas. Deuna! cuenta, además, con el respaldo de{' '}
              <a
                href="https://www.pichincha.com/portal/inicio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Banco Pichincha
              </a>
              .
            </p>
            <br />
            <h5>¿Qué necesito para empezar a usar Deuna!?</h5>
            <small>Usar Deuna! es facilísimo. Solo necesitas:</small>
            <ul>
              <li>
                Una cuenta activa de Banco Pichincha, básica, de ahorro o
                corriente.
              </li>
              <li>Tu clave y usuario de Banca web o Banca móvil.</li>
              <li>Tu e-mail registrado en Banco Pichincha.</li>
              <li>Datos para conectarte a internet.</li>
              <li>Hora automática configurada en tu celular.</li>
            </ul>
            <br />
            <p>
              Para mas información de <b>DeUna</b> visite su sitio oficial{' '}
              <a
                href="https://deuna.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                deuna.app
              </a>
            </p>
            <img
              width="220"
              src="https://deuna.app/assets/img/mockups/pagos-con-qr.png"
              alt="ejemplo de pago con app deuna"
            />
          </UncontrolledCollapse>
        </div>

        <br />

        <div className="col-12 border-bottom cursor-pointer" id="content-deUna">
          <h4>
            <img
              width="110"
              height="90"
              src="https://www.pichincha.com/portal/Portals/0/MainPichincha.svg"
              alt="logo banco pichincha"
            />
          </h4>
        </div>
        <div className="col-12 mt-2 p-2">
          <UncontrolledCollapse toggler="#content-deUna">
            <br />
            <p
              className="text-center text-secondary cursor-pointer font-weight-bold"
              onClick={() => {
                toast.success('Guardado en el porta papeles')
                copy('Banco de pichincha - #546512154545 - Cici Beauty Place')
              }}
            >
              Para depósitos o trasferencias <BiShareAlt />
            </p>
            <Input
              type="text"
              value="#546512154545 - Cici Beauty Place"
              className="p-3 font-weight-bold url-invite text-center"
              disabled
            />
            <br />
          </UncontrolledCollapse>
        </div>
      </div>
    </>
  )
}
