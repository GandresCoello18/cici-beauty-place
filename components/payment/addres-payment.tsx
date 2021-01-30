import React, { useContext, useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import CardAddres from '../card/card-addres'
import FormAddres from '../element/formAddres'
import { TokenContext } from '../../context/contextToken'

const AdressPayment = () => {
  const { token } = useContext(TokenContext)
  const [myAddresses, setMyAddres] = useState<boolean>(!!token)

  return (
    <>
      {myAddresses ? (
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
      ) : (
        <>
          <h4>Nueva Direccion:</h4>
          <FormAddres isSession={!!token} />
        </>
      )}

      {token ? (
        <div
          className="btn-link cursor-pointer mt-3"
          aria-hidden="true"
          onClick={() => setMyAddres(!myAddresses)}
        >
          <GrLocation />{' '}
          {myAddresses
            ? 'Seleccionar una direccion guardada'
            : 'Especificar una nueva direccion'}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default AdressPayment
