/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { Widget, addResponseMessage } from 'react-chat-widget'

interface Props {
  IsCart?: boolean
}

export const ChatWidget = ({ IsCart }: Props) => {
  const NewMessage = (newMessage: any) => {
    console.log(`New message incoming! ${newMessage}`)
  }

  useEffect(() => {
    const isNew = localStorage.getItem('IsNew')

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
    <div className="App">
      <Widget
        handleNewUserMessage={NewMessage}
        profileAvatar="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
        title="Cici Beauty Place"
        subtitle="Servicio al cliente"
        autofocus
        showTimeStamp
      />
    </div>
  )
}
