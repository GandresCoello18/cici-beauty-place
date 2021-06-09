/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable unicorn/explicit-length-check */
/* eslint-disable unicorn/no-nested-ternary */
/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import Skeleton from 'react-loading-skeleton'
import { ReactPhotoCollage } from 'react-photo-collage'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { GetAssignUserCoupons } from '../../api/coupons'
import { TokenContext } from '../../context/contextToken'
import { calculatePrice } from '../../helpers/calculatePrice'
import { ProductsCombo } from '../../interfaces/combo'
import { Coupons, MyCouponsUser } from '../../interfaces/coupons'
import { ResumenCart } from '../../interfaces/products'
import { RootState } from '../../reducers'
import CaroselCardCombo from '../carousel/CaroselCombo'
import CartResumne from '../cart/cart-resumen'
import { SelectApplyCoupon } from '../coupons/SelectApplyCoupon'
import MigasPan from '../element/breadcrumbs'
import ModalElement from '../element/modal'
import Share from '../element/share'
import AdressPayment from '../payment/addres-payment'
import MoreDetails from '../productDetails/moreDetails'
import { ListProductCombo } from './ListProduct'
import { PaymentCombo } from './PaymentCombo'

interface Props {
  combo: ProductsCombo
  loading: boolean
}

export const DetailsCombo = ({ combo, loading }: Props) => {
  const { token } = useContext(TokenContext)
  const [modal, setModal] = useState<boolean>(false)
  const [isOrden, setIsOrden] = useState<boolean>(false)
  const [urlShare, setUrlShare] = useState<string>('')
  const [coupon, setCoupon] = useState<MyCouponsUser[]>([])
  const [selectCoupon, setSelectCoupon] = useState<string>('')
  const [idCoupon, setIdCoupon] = useState<string>('')
  const [resumen, setResumen] = useState<ResumenCart>()

  const ComboReducer = useSelector((state: RootState) => state.ComboReducer)
  const { Combo } = ComboReducer

  useEffect(() => {
    setUrlShare(window.location.href)

    const fetchCoupon = async () => {
      const { myCoupons } = await (
        await GetAssignUserCoupons({ token, status: 'Valido', page: 1 })
      ).data

      const NoDuplicate = myCoupons.filter(
        (cupon: Coupons, index: number) => myCoupons.indexOf(cupon) === index
      )

      setCoupon(NoDuplicate)
    }

    token && fetchCoupon()
  }, [token])

  useEffect(() => {
    const subTotal = calculatePrice({
      discount: combo.discount,
      price: combo.price,
    })

    let envio = 5
    let text = ''
    let total = 0
    let discount = 0

    if ((subTotal && envio <= 0) || subTotal >= 40) {
      envio = 0
      text = 'Gratis'
    }

    if (subTotal) {
      total = subTotal + envio
    }

    if (selectCoupon === '15% Descuento') {
      discount = 15
      const porcent: number = (total * discount) / 100
      total = Number((total - porcent).toFixed(2))
    }

    if (selectCoupon === 'Envio gratis') {
      envio = 0
      text = 'Gratis'
    }

    setResumen({
      subTotal,
      envio,
      text,
      discount,
      total,
    })
  }, [combo, selectCoupon])

  const setting = {
    width: '100%',
    height: ['250px', '170px'],
    layout: [1, 2],
    photos: combo.photos,
    showNumOfRemainingPhotos: true,
  }

  return (
    <section className="container font-arvo">
      <div className="row mt-3" style={{ backgroundColor: '#e9ecef' }}>
        <div className="col-12">
          {loading ? (
            <Skeleton height={40} />
          ) : (
            <MigasPan
              migas={[
                { text: 'Home', href: '/' },
                { text: 'combos', href: '/combos' },
                { text: combo.name, active: true },
              ]}
            />
          )}
        </div>
      </div>
      <div className="row justify-content-center bg-white p-3">
        <div className="col-12 col-md-4">
          <div className="row">
            <div className="col-12">
              {loading && <Skeleton height={240} />}

              {!loading && <ReactPhotoCollage {...setting} />}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="border-bottom">
            {loading ? (
              <Skeleton height={16} />
            ) : (
              <>
                <h3 className="text-center p-1 text-cici">
                  <span role="img">💟</span> {combo.name}{' '}
                  <span role="img">💕</span>
                </h3>
                {combo.products.map((product, index) => (
                  <p key={product.idProducts}>
                    <span className="font-weight-bold ml-2">{index + 1})</span>{' '}
                    {product.description}
                  </p>
                ))}
              </>
            )}
            <div className="row">
              <div className="col-10 col-lg-3" style={{ color: '#999' }}>
                {loading ? (
                  <Skeleton height={16} />
                ) : (
                  <>{combo.sold} vendidos</>
                )}
              </div>
            </div>
          </div>

          <div className="p-3 border-bottom">
            <div className="row">
              <div className="col-6 col-lg-3">
                <strong style={{ fontSize: 20 }}>
                  {loading ? (
                    <Skeleton height={16} />
                  ) : (
                    <>
                      US $
                      {calculatePrice({
                        discount: combo.discount,
                        price: combo.price,
                      })}
                    </>
                  )}
                </strong>
              </div>
              {combo.discount ? (
                <>
                  <div className="col-4 col-md-2">
                    {loading ? (
                      <Skeleton height={5} />
                    ) : (
                      <span className="tachado">US ${combo.price}</span>
                    )}
                  </div>
                  <div className="col-1">
                    {loading ? (
                      <Skeleton height={15} />
                    ) : (
                      <span className="tag-discount">-{combo.discount}%</span>
                    )}
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="p-3 border-bottom">
            {loading ? <Skeleton height={20} /> : <Share ShareUrl={urlShare} />}
          </div>
          <div className="p-2">
            <Button block color="danger" onClick={() => setModal(true)}>
              <FaMoneyCheckAlt
                size={20}
                className="position-relative mr-2"
                style={{ top: 4 }}
              />
              <span className="mb-1">Comprar</span>
            </Button>

            {coupon.length ? (
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
        <div className="col-12">
          <CartResumne
            subTotal={resumen?.subTotal || 0}
            envio={resumen?.envio || 0}
            text={resumen?.text || ''}
            total={resumen?.total || 0}
            discount={resumen?.discount || 0}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {combo.products.length ? (
            loading ? (
              <div className="row">
                {[0, 1, 2].map((item) => (
                  <div className="col-3 ml-2" key={item}>
                    <Skeleton width={80} height={80} />
                  </div>
                ))}
              </div>
            ) : (
              <ListProductCombo combo={combo} />
            )
          ) : (
            ''
          )}
        </div>
      </div>

      <br />

      <div className="row bg-white">
        <div className="col-12 p-2 font-arvo">
          {combo.idCombo && <MoreDetails idCombo={combo.idCombo} />}
        </div>
      </div>

      <div className="row mt-3 mb-3 bg-white p-3">
        <div className="col-12 p-2">
          <AiTwotoneHeart color="pink" /> &nbsp;{' '}
          <strong>Combos recomendados</strong>
        </div>
        <div className="col-12 font-arvo">
          <CaroselCardCombo combos={Combo} />
        </div>
      </div>

      <ModalElement
        visible={modal}
        setVisible={setModal}
        title="Completa tu compra"
      >
        {resumen && !isOrden ? (
          <PaymentCombo
            resumen={resumen}
            setIsOrden={setIsOrden}
            idCoupon={idCoupon}
            idCombo={combo.idCombo}
          />
        ) : (
          <>
            <AdressPayment isModal />
            <br />
            <Button
              block
              onClick={() => (window.location.href = `/mis-pedidos`)}
            >
              Terminar Compra
            </Button>
          </>
        )}
      </ModalElement>
    </section>
  )
}
