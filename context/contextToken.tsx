/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from 'js-cookie'
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface Props {
  children: ReactNode
  value?: Values
}

interface Values {
  token: string
  setToken: Dispatch<SetStateAction<string>>
}

export const TokenContext = createContext<Values>({
  token: '',
  setToken: () => '',
})

export const TokenContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string>(Cookies.get('access-token') || '')

  const Values: Values = {
    token,
    setToken,
  }

  return (
    <TokenContext.Provider value={Values}>{children}</TokenContext.Provider>
  )
}
