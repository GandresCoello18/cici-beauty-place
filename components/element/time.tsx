/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { useTimer } from 'react-timer-hook'

interface Props {
  expiryTimestamp: number
  SetIsRunning: Dispatch<SetStateAction<boolean>>
}

const Time = ({ expiryTimestamp, SetIsRunning }: Props) => {
  const { seconds, minutes, hours, days, start, pause } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      SetIsRunning(true)
      pause()
    },
  })

  useEffect(() => {
    start()
  }, [])

  return (
    <div className="time">
      <span className="dice">Días: {days}</span>
      <span className="split">:</span>
      <span className="dice">Horas: {hours}</span>
      <span className="split">:</span>
      <span className="dice">M: {minutes}</span>
      <span className="split">:</span>
      <span className="dice">S: {seconds}</span>
    </div>
  )
}

export default Time
