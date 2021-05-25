/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { useCallback, useEffect } from 'react'
import dynamic from 'next/dynamic'
/* import {
  addLinkSnippet,
  addResponseMessage,
  addUserMessage,
  setQuickButtons,
} from 'react-chat-widget' */
import socketIOClient from 'socket.io-client'
import { BASE_API } from '../../api'

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

const socket = socketIOClient(BASE_API)

const ChatWidget = ({ IsCart }: Props) => {
  const NewMessage = (newMessage: any) => {
    socket.emit('new-message', {
      text: newMessage,
    })
  }

  const Rapid = (option: any) => {
    addUserMessage(option)

    if (option === '¿Como invito a alguien?') {
      addLinkSnippet({
        title: 'Invita a un amigo',
        link: 'https://cici.beauty/configuracion/invitar',
        target: '_blank',
      })

      return
    }

    socket.emit('new-message', {
      text: option,
    })
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

  const ListenMessate = useCallback(() => {
    let LastSms1 = ''

    socket.on('new-message', (data) => {
      if (LastSms1 !== data.text) {
        addResponseMessage(data.text)
        LastSms1 = data.text
      }
    })
  }, [])

  useEffect(() => {
    ListenMessate()
  }, [ListenMessate])

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
