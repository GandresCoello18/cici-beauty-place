/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { AiOutlineBank } from 'react-icons/ai'
import { OnCaptureData, PayPalButton } from 'react-paypal-button'
import { toast } from 'react-toast'
import { Button, UncontrolledCollapse } from 'reactstrap'

interface Props {
  amount: number
  PaymentPaypal: any
  PaymentBank: () => void
}

export const AccionPayment = ({
  amount,
  PaymentPaypal,
  PaymentBank,
}: Props) => {
  return (
    <div className="row">
      <div className="col-12">
        <strong>Paga con los siguientes métodos.</strong>
      </div>
      <div className="col-12 border-bottom cursor-pointer" id="content-paypal">
        <h4>
          <img
            width="100"
            height="80"
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
                'ATlJBRTGGr5d9A4Q_FLgdCQlvJQIkzQc73hp4Nye9ESEdlpGwLQj-RWvjDEzyki31QUj40J84F2khBbl',
              intent: 'capture',
              currency: 'USD',
            }}
            buttonStyles={{
              layout: 'vertical',
              shape: 'rect',
            }}
            amount={amount}
            onPaymentStart={() => console.log('payment')}
            onPaymentSuccess={async (response: OnCaptureData) => {
              await PaymentPaypal(response)
            }}
            onPaymentError={(error) => toast.error(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </UncontrolledCollapse>
      </div>

      <br />

      <div className="col-12 border-bottom cursor-pointer" id="content-deUna">
        <h4>
          <img
            width="90"
            height="70"
            src="https://deuna.app/assets/images/deuna-logo.svg"
            alt="logo deuna"
          />
          <img
            className="float-right"
            width="90"
            height="70"
            src="https://www.pichincha.com/portal/Portals/0/MainPichincha.svg"
            alt="logo banco pichincha"
          />
        </h4>
      </div>
      <div className="col-12 mt-2 p-2">
        <UncontrolledCollapse toggler="#content-deUna">
          <div className="text-center">
            <br />
            <Button outline className="bg-cici text-dark" onClick={PaymentBank}>
              <AiOutlineBank size={18} /> Deposito o trasferencia
            </Button>
          </div>
          <br />
        </UncontrolledCollapse>
      </div>
    </div>
  )
}
