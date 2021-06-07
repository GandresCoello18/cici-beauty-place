import React from 'react'

interface Props {
  text?: string
}

const SpinnerLoader = ({ text }: Props) => {
  return (
    <div
      className="p-2"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <div className="spiner-cici" />
      <br />
      {text && <span>{text}</span>}
    </div>
  )
}

export default SpinnerLoader
