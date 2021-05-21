/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { useCallback, useEffect } from 'react'
import { Widget, addResponseMessage } from 'react-chat-widget'
import { useSelector } from 'react-redux'
import socketIOClient from 'socket.io-client'
import { BASE_API } from '../../api'
import { RootState } from '../../reducers'

interface Props {
  IsCart?: boolean
}

const socket = socketIOClient(BASE_API)

export const ChatWidget = ({ IsCart }: Props) => {
  const { User } = useSelector((state: RootState) => state.UserReducer)

  const NewMessage = (newMessage: any) => {
    socket.emit('new-message', {
      text: newMessage,
      userName: User.userName,
    })
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

  const ListenMessate = useCallback(() => {
    let LastSms1 = ''

    socket.on('new-message', (data) => {
      console.log(data)
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
