/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardText } from 'reactstrap'
import { useSelector } from 'react-redux'
import { toast } from 'react-toast'
import { BASE_API, DEFAULT_AVATAR } from '../../api'
import { AssignUserCoupons, getCoupons } from '../../api/coupons'
import { Coupons } from '../../interfaces/coupons'
import { Users } from '../../interfaces/users'
import SpinnerLoader from '../element/spinner-cici'
import { TokenContext } from '../../context/contextToken'
import redirect from '../../lib/redirect'
import { RootState } from '../../reducers'

interface Props {
  user?: Users
}

const ContainerCupones = ({ user }: Props) => {
  const { token } = useContext(TokenContext)
  const [cupones, setCupones] = useState<Coupons[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [selectType, setSelectType] = useState<string>('')

  const { User } = useSelector((state: RootState) => state.UserReducer)

  useEffect(() => {
    try {
      const fetchCoupns = async () => {
        const { coupons } = await (await getCoupons()).data
        setCupones(coupons)
      }

      fetchCoupns()
    } catch (error) {
      toast.error(error.message)
    }
  }, [])

  const ElegirCupon = async (type: string, idCoupon: string) => {
    setSelectType(type)
    setLoading(true)

    if (!token) {
      window.open('/login', '_blank')
      setLoading(false)
      return
    }

    try {
      if (user) {
        if (User.idUser !== user.idUser) {
          await AssignUserCoupons({ token, idUser: user.idUser })
        } else {
          setLoading(false)
          toast.warn('No puedes invitarte a ti mismo.')
          return
        }
      }

      await AssignUserCoupons({ token, idCoupon, idUser: User.idUser })

      setLoading(false)
      redirect('/mis-cupones')
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <section className="container font-arvo mt-4 mb-4">
      <div className="row justify-content-center p-2">
        {user !== undefined && (
          <div className="col-12 col-md-3 mb-3 mb-md-0 bg-white border-round">
            <div className="border-bottom mb-2 text-center">
              <img
                width={100}
                height={100}
                className="p-2 border-round"
                src={
                  user.avatar !== 'null'
                    ? user.avatar
                    : `${BASE_API}/static/${DEFAULT_AVATAR}`
                }
                alt={user.userName}
              />
            </div>
            <p>
              <strong>{user.userName}</strong>, te acaba de invitar para que te
              unas a <strong className="text-cici">Cici Beauty Place</strong>{' '}
              crea una cuenta y recibes un cupòn totalmente gratis.
            </p>
          </div>
        )}
        {cupones.map((cupon) => (
          <div
            className={`col-12 ${
              user !== undefined ? 'col-md-3' : 'col-md-4'
            } mb-3 mb-md-0`}
            key={cupon.idCoupon}
          >
            <Card>
              <CardHeader className="bg-cici text-center">
                {cupon.type}
              </CardHeader>
              <CardBody>
                <CardText>{cupon.descripcion}</CardText>
                <Button
                  outline
                  block
                  className="bg-cici text-dark"
                  disabled={loading}
                  onClick={() => ElegirCupon(cupon.type, cupon.idCoupon)}
                >
                  Elegir{' '}
                  {loading && selectType === cupon.type && <SpinnerLoader />}
                </Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContainerCupones
