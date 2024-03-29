/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

const WidgetD: any = dynamic(
  () => import('react-chat-widget').then((mod) => mod.Widget) as any,
  {
    ssr: false,
  }
)

const addLinkSnippet = (obj: any) =>
  import('react-chat-widget').then((mod) => mod.addLinkSnippet(obj))

const addResponseMessage = (text: string) =>
  import('react-chat-widget').then((mod) => mod.addResponseMessage(text))

const addUserMessage = (text: string) =>
  import('react-chat-widget').then((mod) => mod.addUserMessage(text))

const setQuickButtons = (buttons: any) =>
  import('react-chat-widget').then((mod) => mod.setQuickButtons(buttons))

interface Props {
  IsCart?: boolean
}

const ChatWidget = ({ IsCart }: Props) => {
  const NewMessage = () => {
    addResponseMessage('Selcciona una de las opciones de abajo.')
  }

  const Rapid = (option: any) => {
    addUserMessage(option)

    if (option === '¿Como invito a alguien?') {
      addLinkSnippet({
        title: 'Invita a un amigo copiando tu enlace de referido',
        link: 'https://cici.beauty/configuracion/invitar',
        target: '_blank',
      })

      return
    }

    if (option === '¿Con que metodos puedo pagar?') {
      addResponseMessage(
        'Puedes pagar directamente con Paypal o mediante trasferencia bancaria, para esto se necesita la confirmacion del pago.'
      )

      return
    }

    if (option === '¿Como llega mi orden a su lugar de destino?') {
      addResponseMessage(
        'Usamos los servicios de servientrega para hacer llegar tu orden y te notificaremos cada movimiento de tu orden por correo.'
      )

      return
    }

    if (option === '¿Como obtengo cupones para mis compras?') {
      addResponseMessage(
        'Recibiras un cupón gratis cuando te registres por primera vez, tambien puedes invitar a un amigo y recibiras cupones por las ordenes de tu invitado.'
      )

      return
    }

    if (option === '¿Quiero hablar con algun encargado de la tienda?') {
      addResponseMessage(
        'Puedes escribirnos a nuestra linea de WhatsApp (0980 378 869) o en nuestro email (team@cici.beauty).'
      )

      return
    }

    addResponseMessage(
      'Cualquier otra duda que tengas escribenos en nuestra lina de WhatsApp (0980 378 869).'
    )
  }

  useEffect(() => {
    const isNew = localStorage.getItem('IsNew')

    setQuickButtons([
      {
        label: 'Metodos de pago',
        value: '¿Con que metodos puedo pagar?',
      },
      {
        label: 'Envios',
        value: '¿Como llega mi orden a su lugar de destino?',
      },
      {
        label: 'Contacto',
        value: '¿Quiero hablar con algun encargado de la tienda?',
      },
      {
        label: 'Quiero un cupón',
        value: '¿Como obtengo cupones para mis compras?',
      },
      {
        label: 'Inivitar a alguien',
        value: '¿Como invito a alguien?',
      },
    ])

    if (!isNew) {
      addResponseMessage(
        'Bienvenido a Cici beauty place, estamos para ayudarte en tu busqueda o duda.'
      )

      localStorage.setItem('IsNew', 'true')
    }

    if (IsCart) {
      addResponseMessage(
        'Si tienes alguna dudas o preguntas sobre pagos, no dudes en escribirnos.'
      )
    }
  }, [IsCart])

  return (
    <div className="d-none d-md-block">
      <WidgetD
        handleNewUserMessage={NewMessage}
        profileAvatar="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
        title="Cici Beauty Place"
        subtitle="Servicio al cliente"
        autofocus
        showTimeStamp
        handleQuickButtonClicked={Rapid}
      />
    </div>
  )
}

export default ChatWidget
