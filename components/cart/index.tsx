/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-unused-expressions */
/* eslint-disable unicorn/explicit-length-check */
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toast'
import { Alert, Button, Card, CardBody, CardText } from 'reactstrap'
import { GetAssignUserCoupons } from '../../api/coupons'
import { Coupons, MyCouponsUser } from '../../interfaces/coupons'
import { RootState } from '../../reducers'
import { SetCoupon } from '../../reducers/coupon'
import CartProduct from './cart-product'
import CartResumne from './cart-resumen'
import Modal from '../element/modal'
import { TokenContext } from '../../context/contextToken'
import { ResumenPaymen } from '../../hooks/useResumenPayment'
import { BASE_API_IMAGES_CLOUDINNARY } from '../../api'

interface Props {
  setIdCoupon: Dispatch<SetStateAction<string>>
}

const CartContainer = ({ setIdCoupon }: Props) => {
  const { Cart } = useSelector((state: RootState) => state.CartReducer)
  const resumen = ResumenPaymen()

  const dispatch = useDispatch()
  const { token } = useContext(TokenContext)
  const [coupon, setCoupon] = useState<MyCouponsUser[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const [selectCoupon, setSelectCoupon] = useState<string>('')

  useEffect(() => {
    try {
      const fetchCoupon = async () => {
        const { myCoupons } = await (
          await GetAssignUserCoupons({ token, status: 'Valido' })
        ).data

        const NoDuplicate = myCoupons.filter(
          (cupon: Coupons, index: number) => myCoupons.indexOf(cupon) === index
        )

        setCoupon(NoDuplicate)
      }

      Cart.length && token && fetchCoupon()
      // setResument(ResumenPaymen())
    } catch (error) {
      toast.error(error.message)
    }
  }, [Cart, token])

  return (
    <>
      <div className="card border-0">
        <h5 className="card-header bg-cici">Tus artículos ({Cart.length})</h5>
        <div className="card-body">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-8">
              {Cart.length ? (
                Cart.map((item) => (
                  <CartProduct product={item} key={item.idProducts} />
                ))
              ) : (
                <>
                  <div className="text-center p-2 mb-2">
                    <img
                      src="img/empty_cart.svg"
                      alt="empty cart product"
                      width="100%"
                      height={300}
                    />
                  </div>
                  <Alert color="info">
                    Por el momento no tienes productos en tu carrito.
                  </Alert>
                </>
              )}
            </div>
            <div className="col-12 col-lg-4">
              <CartResumne
                subTotal={resumen.subTotal}
                envio={resumen.envio}
                text={resumen.text || ''}
                total={resumen.total}
                discount={resumen.discount}
              />
              {Cart.length && coupon.length ? (
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
                    <Button
                      color="danger"
                      className="p-1"
                      onClick={() => setModal(true)}
                    >
                      {selectCoupon && coupon.length > 1
                        ? 'Cambiar Cupón'
                        : 'Aplicar Cupón'}
                    </Button>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
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

export default CartContainer
