/* eslint-disable no-console */
import React from 'react'
import { PayPalButton } from 'react-paypal-button'
import { UncontrolledCollapse } from 'reactstrap'

const Payment = () => {
  return (
    <>
      <div className="row">
        <strong>Paga con los siguientes metodos de pago.</strong>
        <div className="col-12 border-bottom" id="content-paypal">
          <h4>
            Paypal{' '}
            <img
              width="80"
              height="60"
              alt="logo paypal"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABuCAMAAAAd3HGaAAAAyVBMVEX///8ALIsBm+EAH2oAmeAABIEAl+C5vNUAAIAAK4YAlN8AKYoAkt8AJIgAJokAGoWPkbsAjd3h8fsAAHn4+v0AFYQAIIcAG2cBh8tstukAC4Lj5vDy9PhCUJnCx9sAFGSws8+eze/Lz+DO5ve73PSp0vHZ3OgsPpJpbac3RpQoOI+Umb55fK9ZYaECJXgAG3cAWp0ACl8AfMABAFoBPINOrOWDwOwAK3QBc7ozouMBSpEBP5cAU6cAXq0ASJ0AbLpDldMAAGwAhtz8C0K/AAADzUlEQVR4nO2Z2XKjOhBAQZZlzGqEwDEIx/GC423W4DvcffL/H3WbLWP7knljOlOjU+UCzAOnWq1WCzRNoVAoFAqFQqFQKBSKXxo5umKZSGyjmtQYXmAYxvZxhO0EiECvGTdH3XKMXYatpWWG/n8cB11sEXZ46c4e2+vgdXnpBnaOHaNOr+iIqyVSt9PLeUT2ehnGcUV7cE+4XklbJt4NLnn3Hnkc502ZGA+uuf+wQfU6hN1eHz+ZD5he7XS89fpMCOWIXienK70G06eCMMSAyZ3V6XX/CeI1w/NKmnDpN1pPBLxyPK/lsCu9ptM7ZK9F3OX1GUaREHbG8zp6deN16XV/X0aLEBOxgt1Ox+n04/QDrbQIXeF5bdvpOC0ZDH57+lIHC7QKPK1kXHu5v99VMPINzHq/bKq9Rdsg1ScUTgqB5zWqV0frD0puMRGzq121rT/JjRg114ha2mM9ju5f11LUJpjR0jS9Tnvny0uYTNO26Qw1WEDTrEZ3bWnYrNcrjpjwNW0THTbZhVnhL5k3q7bTDKONm1UvNHta6++qZIEX+gjWHK+nIyXYQg2n2CuJ/2m8EBuuK5aTmn8bL8SGq5Ocvqnp2CKaMsGwy+kN0mcUYDbmhrEDcZ5VvLFhVPyMJCXf+XTAS27WI8F7nxGTwACG4/kr98++XVJcreC57/ctBh1qGIe6E3W/oBdQYpnJCL1awgvKetbSUjdeLKGtjxfdXgWl69WZXvf3Zu97Sbm1hhCJsRWCl1xC0ISof1p14KAAyUdJ6SVXMHpwi5us71dOmetu4VmG7i3lyYiN9DT8mk2CACy1QxBMuF02FZwRX/LcNu0i922+Zr3vceehlY4WqePs5NjzxtvQ1WOZDZ0TNBeOsxcbk+brDeRTzgljBYEFqpAPrPdd2yLW3Th2onA+Cb1jIg+etZfa1tkn2i6Kl9qZlXsiyhifMXbmHK5z+LP3VyhHTzeCwHjMhO6mkDpy75yENvHi+SEMJ1XHY/s+m3HhV7kOhxn8WfRdJnZuWFcuGVRfWrKo/BCUxW4aRWk1HZumYmVXr+Xg8KD9gEbWseKk9jKsbSaSUxQe4GpvuboHk5MX1KznJod4ccFzaq+F3fsb4MTTh/WZSCPLOrkwrGX8yoJW+q3oS6WCjCc5ZcTmTej6ZB4E7QfPJDSGweM2+FrGbxSWo6hp62e/Dc3KtE1/Vvi+fHh+7ns6ioslW8wXmSaTUkuGVlQNLyzQ3+6vNlyTcP0DVu1XgCxbID36eyyCGPkr6CuIN7L/VygUCoVCoVAoFAqFQvEz8h8BOE5B9OxmEQAAAABJRU5ErkJggg=="
            />
          </h4>
        </div>
        <div className="col-12 mt-2 p-2">
          <UncontrolledCollapse toggler="#content-paypal">
            <PayPalButton
              paypalOptions={{
                clientId:
                  'AZZhW-vY_amLDLO0H8tZuaPpoF0--0b8b2N4qJaqNESaFBJNZTsn4uZbAprsy-y_GcDCz05XCwukctKq',
                intent: 'capture',
                currency: 'USD',
              }}
              buttonStyles={{
                layout: 'vertical',
                shape: 'rect',
              }}
              amount={100}
              onPaymentStart={() => console.log('payment')}
              onPaymentSuccess={(data) => console.log(data)}
              onPaymentError={(error) => console.log(error)}
              onPaymentCancel={(data) => console.log(data)}
            />
          </UncontrolledCollapse>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-12 border-bottom" id="content-deUna">
          <h4>
            DeUna!{' '}
            <img
              width="80"
              height="60"
              src="https://deuna.app/assets/images/deuna-logo.svg"
              alt="logo deuna"
            />
          </h4>
        </div>
        <div className="col-12 mt-2 p-2">
          <UncontrolledCollapse toggler="#content-deUna">
            <div className="text-center">
              <strong className="p-2">Acanea el siguiente codigo QR</strong>
              <p className="text-left">
                <b>Tener encuenta:</b> luego de hacer la transacion se necesita
                que alguien del equipo de{' '}
                <b className="text-cici">Cici Beauty place</b> confirme el pago,
                mientras eso puedes seguir con el siguiente paso.
              </p>
              <br />
              <img
                className="border p-2"
                alt="codigo qr"
                width="70%"
                src="data:image/png;base64,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"
              />
            </div>
            <br />
            <h5>¿Qué es Deuna!?</h5>
            <p>
              Deuna! es la app perfecta para hacer pagos y pasar dinero desde tu
              celular. Olvídate de una vez por todas de los billetes y las
              monedas. Deuna! cuenta, además, con el respaldo de{' '}
              <b>Banco Pichincha</b>.
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
              Para mas informacion de <b>DeUna</b> visite su sitio oficil{' '}
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
      </div>
    </>
  )
}

export default Payment
