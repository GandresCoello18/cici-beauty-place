import React, { useContext, useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { useSelector } from 'react-redux'
import CardAddres from '../card/card-addres'
import FormAddres from '../element/formAddres'
import { TokenContext } from '../../context/contextToken'
import { RootState } from '../../reducers'

interface Props {
  isModal: boolean
}

const AdressPayment = ({ isModal }: Props) => {
  const { token } = useContext(TokenContext)
  const [myAddresses, setMyAddres] = useState<boolean>(!!token)

  const { Addresses } = useSelector((state: RootState) => state.AddressReducer)

  return (
    <>
      {myAddresses ? (
        <>
          <h4 className="text-center p-2">Mis Direcciones:</h4>
          <div className="row justify-content-center">
            {Addresses.map((address) => (
              <div
                className={`col-12 ${!isModal ? 'col-md-6' : ''} mb-2`}
                key={address.idAddresses}
              >
                <div className="cursor-pointer">
                  <CardAddres address={address} />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h4 className="text-center p-2 mb-2">Nueva Dirección:</h4>
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
            ? 'Especificar una nueva dirección'
            : 'Seleccionar una dirección guardada'}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default AdressPayment
