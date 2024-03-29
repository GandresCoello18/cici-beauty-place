/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, CardBody, CardText } from 'reactstrap'
import { useSelector } from 'react-redux'
import { toast } from 'react-toast'
import Link from 'next/link'
import { AxiosError } from 'axios'
import { BASE_API_IMAGES_CLOUDINNARY } from '../../api'
import { AssignUserCoupons, getCoupons } from '../../api/coupons'
import { Coupons } from '../../interfaces/coupons'
import { Users } from '../../interfaces/users'
import SpinnerLoader from '../element/spinner-cici'
import { TokenContext } from '../../context/contextToken'
import redirect from '../../lib/redirect'
import { RootState } from '../../reducers'
import { SourceAvatar } from '../../helpers/sourceAvatar'
import { HandleError } from '../../helpers/handleError'

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
      toast.error(HandleError(error as AxiosError))
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
          await AssignUserCoupons({ token, idUser: user.idUser, idCoupon })
        } else {
          setLoading(false)
          toast.warn('No puedes invitarte a ti mismo.')
          return
        }
      }

      setLoading(false)
      redirect('/mis-cupones')
    } catch (error) {
      toast.error(HandleError(error as AxiosError))
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
                src={SourceAvatar(user.avatar)}
                alt={user.userName}
              />
            </div>
            {token ? (
              <>
                <p>
                  <strong>{user.userName}</strong>, te acaba de invitar para que
                  le regales <strong className="text-cici">1 Cupón</strong> este
                  sera valido a partir de tu próxima compra mayor o igual a $40.
                </p>

                <p>
                  Tu también puedes invitar a alguien y{' '}
                  <Link href="/configuracion/invitar">recibir cupos</Link>.
                </p>
              </>
            ) : (
              <p>
                <strong>{user.userName}</strong>, te acaba de invitar para que
                te unas a{' '}
                <strong className="text-cici">Cici Beauty Place</strong>, crea
                una cuenta y recibes un cupón totalmente gratis.
              </p>
            )}
          </div>
        )}

        {cupones.map((cupon) => (
          <div
            className={`col-12 ${
              user !== undefined ? 'col-md-3' : 'col-md-4'
            } mb-3 mb-md-0`}
            key={cupon.idCoupon}
          >
            <Card style={{ borderRadius: 12 }}>
              <CardBody>
                <div className="text-center ">
                  <img
                    src={`${BASE_API_IMAGES_CLOUDINNARY}/${cupon.source}`}
                    alt={cupon.type}
                    width={150}
                    height={150}
                  />
                  <h6 className="text-cici font-weight-bold mt-2">
                    {cupon.type}
                  </h6>
                </div>
                <CardText style={{ fontSize: 14 }}>
                  {cupon.descripcion}
                </CardText>
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
