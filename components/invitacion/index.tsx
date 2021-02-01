import React from 'react'
import { Users } from '../../interfaces/users'
import BannerInvitacion from './bannerInvite'
import ContainerCupones from './card-cupones'

interface Props {
  user?: Users | undefined
}

const Invitacion = ({ user }: Props): JSX.Element => {
  return (
    <>
      <BannerInvitacion />
      <ContainerCupones user={user} />
    </>
  )
}

export default Invitacion
