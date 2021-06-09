/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, CardBody, CardText, Modal } from 'reactstrap'
import { BASE_API_IMAGES_CLOUDINNARY } from '../../api'
import { MyCouponsUser } from '../../interfaces/coupons'
import { SetCoupon } from '../../reducers/coupon'

interface Props {
  coupon: MyCouponsUser[]
  setIdCoupon: Dispatch<SetStateAction<string>>
  selectCoupon: string
  setSelectCoupon: Dispatch<SetStateAction<string>>
}

export const SelectApplyCoupon = ({
  coupon,
  setIdCoupon,
  selectCoupon,
  setSelectCoupon,
}: Props) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState<boolean>(false)

  return (
    <>
      <div className="text-center">
        {selectCoupon && (
          <span className="p-2">
            Aplicado: <strong>{selectCoupon}</strong>
            <br />
            <span
              className="text-danger cursor-pointer"
              onClick={() => {
                setIdCoupon('')
                setSelectCoupon('')
                dispatch(SetCoupon(undefined))
              }}
            >
              Eliminar
            </span>
          </span>
        )}

        {!selectCoupon && coupon.length === 1 ? (
          <Button color="danger" className="p-1" onClick={() => setModal(true)}>
            {selectCoupon && coupon.length > 1
              ? 'Cambiar Cupón'
              : 'Aplicar Cupón'}
          </Button>
        ) : (
          ''
        )}
      </div>

      <Modal title="Elige algún cupón" visible={modal} setVisible={setModal}>
        <div className="row justify-content-center">
          {coupon.map((cupon) => (
            <div className="col-12 col-md-10" key={cupon.id_user_coupons}>
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
                    onClick={() => {
                      setIdCoupon(cupon.id_user_coupons)
                      setSelectCoupon(cupon.type)
                      setModal(false)
                      dispatch(SetCoupon(cupon))
                    }}
                  >
                    Elegir
                  </Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </Modal>
    </>
  )
}
