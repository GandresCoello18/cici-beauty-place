import React from 'react'

const SpinnerLoader = () => {
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
    </div>
  )
}

export default SpinnerLoader
