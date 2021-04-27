/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import Router from 'next/router'
import { toast } from 'react-toast'
import Layout from '../../components/layout'
import Invitacion from '../../components/invitacion'
import { GetInviteUser } from '../../api/users'
import { Users } from '../../interfaces/users'
import redirect from '../../lib/redirect'

const Index = () => {
  const [userInvite, setUserInvite] = useState<Users>()

  useEffect(() => {
    try {
      const fetchUserInvite = async (username: string) => {
        const { user } = await (await GetInviteUser({ username })).data

        if (!user) {
          redirect('/invitacion')
        } else {
          setUserInvite(user)
        }
      }

      const username = Router.query.username as string

      if (username) {
        fetchUserInvite(username)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }, [])

  return (
    <>
      <NextSeo
        title={`${
          userInvite && userInvite.userName
        } te invita | Cici beauty place`}
        description="Encuentra todo sobre cosméticos y belleza."
      />

      <Layout>
        <Invitacion user={userInvite} />
      </Layout>
    </>
  )
}

export default Index
