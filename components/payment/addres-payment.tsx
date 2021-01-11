import React, { useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import CardAddres from '../card/card-addres'
import FormAddres from '../element/formAddres'

const AdressPayment = () => {
  const [newAddres, setNewAddres] = useState<boolean>(false)

  return (
    <>
      {newAddres ? (
        <>
          <h4>Nueva Direccion:</h4>
          <FormAddres />
        </>
      ) : (
        <>
          <h4>Mis Direcciones:</h4>
          <div className="row justify-content-center">
            {[0, 1].map((item) => (
              <div className="col-12 col-md-6 col-xl-4 mb-2" key={item}>
                <div className="cursor-pointer">
                  <CardAddres item={item} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <div
        className="btn-link cursor-pointer mt-3"
        aria-hidden="true"
        onClick={() => setNewAddres(!newAddres)}
      >
        <GrLocation />{' '}
        {newAddres
          ? 'Seleccionar una direccion guardada'
          : 'Especificar una nueva direccion'}
      </div>
    </>
  )
}

export default AdressPayment
