import { SetStateAction } from 'next-server/node_modules/@types/react'
import React, { Dispatch, useContext, useState } from 'react'
import { toast } from 'react-toast'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { CreateRewardUserCoupons } from '../../api/coupons'
import { TokenContext } from '../../context/contextToken'
import { Users } from '../../interfaces/users'
import SpinnerLoader from '../element/spinner-cici'

interface Props {
  RewarUser: Users[]
  setModal: Dispatch<SetStateAction<boolean>>
}

export const UsersRewar = ({ RewarUser, setModal }: Props) => {
  const { token } = useContext(TokenContext)
  const [Loading, setLoading] = useState<boolean>(false)

  const SelectRewar = async (idUser: string) => {
    setLoading(true)

    try {
      await CreateRewardUserCoupons({ token, idUser })

      toast.success('Se registro la asignación del cupón')
      setLoading(false)

      setModal(false)
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  return Loading ? (
    <SpinnerLoader />
  ) : (
    <ListGroup>
      {RewarUser.map((user) => (
        <ListGroupItem
          key={user.idUser}
          className="cursor-pointer mb-3"
          onClick={() => SelectRewar(user.idUser)}
        >
          {user.userName} - <strong>{user.email}</strong>
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}
