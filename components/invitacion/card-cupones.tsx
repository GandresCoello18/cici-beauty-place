/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardText } from 'reactstrap'
import { BASE_API, DEFAULT_AVATAR } from '../../api'
import { getCoupons } from '../../api/coupons'
import { Coupons } from '../../interfaces/coupons'
import { Users } from '../../interfaces/users'

interface Props {
  user?: Users
}

const ContainerCupones = ({ user }: Props) => {
  const [cupones, setCupones] = useState<Coupons[]>([])

  useEffect(() => {
    try {
      const fetchCoupns = async () => {
        const { coupons } = await (await getCoupons()).data
        setCupones(coupons)
      }

      fetchCoupns()
    } catch (error) {
      console.log(error.message)
    }
  }, [])

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
              <CardHeader className="bg-cici">{cupon.type}</CardHeader>
              <CardBody>
                <CardText>{cupon.descripcion}</CardText>
                <Button outline block className="bg-cici text-dark">
                  Elegir
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
