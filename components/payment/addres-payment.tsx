import React, { useContext, useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { useSelector } from 'react-redux'
import CardAddres from '../card/card-addres'
import FormAddres from '../element/formAddres'
import { TokenContext } from '../../context/contextToken'
import { RootState } from '../../reducers'

const AdressPayment = () => {
  const { token } = useContext(TokenContext)
  const [myAddresses, setMyAddres] = useState<boolean>(!!token)

  const { Addresses } = useSelector((state: RootState) => state.AddressReducer)

  return (
    <>
      {myAddresses ? (
        <>
          <h4>Mis Direcciones:</h4>
          <div className="row justify-content-center">
            {Addresses.map((address) => (
              <div className="col-12 col-md-6 mb-2" key={address.idAddresses}>
                <div className="cursor-pointer">
                  <CardAddres address={address} />
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
            ? 'Especificar una nueva direccion'
            : 'Seleccionar una direccion guardada'}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default AdressPayment
