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
import { useSelector } from 'react-redux'
import { toast } from 'react-toast'
import { Alert } from 'reactstrap'
import { GetAssignUserCoupons } from '../../api/coupons'
import { Coupons, MyCouponsUser } from '../../interfaces/coupons'
import { RootState } from '../../reducers'
import CartProduct from './cart-product'
import CartResumne from './cart-resumen'
import { TokenContext } from '../../context/contextToken'
import { ResumenPaymen } from '../../hooks/useResumenPayment'
import { SelectApplyCoupon } from '../coupons/SelectApplyCoupon'

interface Props {
  setIdCoupon: Dispatch<SetStateAction<string>>
}

const CartContainer = ({ setIdCoupon }: Props) => {
  const { Cart } = useSelector((state: RootState) => state.CartReducer)
  const resumen = ResumenPaymen()
  const { token } = useContext(TokenContext)
  const [coupon, setCoupon] = useState<MyCouponsUser[]>([])
  const [selectCoupon, setSelectCoupon] = useState<string>('')

  useEffect(() => {
    try {
      const fetchCoupon = async () => {
        const { myCoupons } = await (
          await GetAssignUserCoupons({ token, status: 'Valido', page: 1 })
        ).data

        const NoDuplicate = myCoupons.filter(
          (cupon: Coupons, index: number) => myCoupons.indexOf(cupon) === index
        )

        setCoupon(NoDuplicate)
      }

      Cart.length && token && fetchCoupon()
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
                <SelectApplyCoupon
                  coupon={coupon}
                  setIdCoupon={setIdCoupon}
                  selectCoupon={selectCoupon}
                  setSelectCoupon={setSelectCoupon}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartContainer
