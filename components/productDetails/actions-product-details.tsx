/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable unicorn/no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useContext, useEffect, useState } from 'react'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { MdShoppingBasket } from 'react-icons/md'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal, ModalBody } from 'reactstrap'
import { toast } from 'react-toast'
import { FcApproval } from 'react-icons/fc'
import Link from 'next/link'
import { newProductCart } from '../../api/cart'
import { Cart, Product } from '../../interfaces/products'
import redirect from '../../lib/redirect'
import { RootState } from '../../reducers'
import { setCart } from '../../reducers/cart'
import SpinnerLoader from '../element/spinner-cici'
import ActionFavoritePrduct from './action-favorite-product'
import { TokenContext } from '../../context/contextToken'
import { BASE_API_IMAGES_CLOUDINNARY } from '../../api'
import { calculatePrice } from '../../helpers/calculatePrice'

interface Props {
  loading: boolean
  available: number
  quantity?: number
  product: Product
  colour: string | undefined
}

const ActionsProductDetails = ({
  loading,
  available,
  quantity,
  product,
  colour,
}: Props) => {
  const { token } = useContext(TokenContext)
  const [loadingAction, setLoadingAction] = useState<boolean>(false)
  const [Visible, setVisible] = useState<boolean>(false)
  const [existCart, setExistCart] = useState<Cart | undefined>()
  const dispatch = useDispatch()

  const cartStorage = useSelector((state: RootState) => state.CartReducer.Cart)

  useEffect(() => {
    const productExist = cartStorage.find(
      (cart) => cart.idProducts === product.idProducts
    )

    setExistCart(productExist)
  }, [cartStorage, product])

  const validate_quantity = (ProductQuantity: number): boolean => {
    if (ProductQuantity > available) {
      toast.error(
        `Productos disponibles insuficientes: máximo de ${available} productos`
      )
      return false
    }

    toast.success(`Se agrego: ${quantity || 1} productos mas al carrito`)
    return true
  }

  const fetchAddProduct = async (cart: {
    idProducts: string
    quantity: number
    colour: string | undefined
  }) => {
    if (token) {
      setLoadingAction(true)
      try {
        await newProductCart({
          idProduct: cart.idProducts,
          quantity: cart.quantity,
          colour: cart.colour,
          token,
        })
        setLoadingAction(false)
      } catch (error) {
        toast.error(error.message)
      }
    }
  }

  const addProductCart = () => {
    const cart: Cart = {
      idProducts: product.idProducts,
      title: product.title,
      source: product.source,
      price: product.price,
      status: product.status,
      available: product.available,
      created_at: product.created_at,
      discount: product.discount,
      quantity: quantity || 1,
      colour,
    }

    if (validate_quantity(cart.quantity)) {
      dispatch(setCart([...cartStorage, ...[cart]]))
      fetchAddProduct({
        idProducts: cart.idProducts,
        quantity: cart.quantity,
        colour,
      })
    }
  }

  const addCart = () => {
    if (!existCart) {
      addProductCart()
      setVisible(true)
    } else {
      existCart.quantity += quantity || 1
      cartStorage.splice(0, cartStorage.length, existCart)

      if (validate_quantity(existCart.quantity)) {
        dispatch(setCart([...cartStorage]))
        fetchAddProduct({
          idProducts: existCart.idProducts,
          quantity: quantity || 1,
          colour,
        })
      } else {
        existCart.quantity -= quantity || 1
      }
    }
  }

  const toBuy = () => {
    if (!existCart) {
      addProductCart()
    }

    redirect('/compra')
  }

  return (
    <>
      <div className="row justify-content-start">
        {loadingAction ? (
          <SpinnerLoader />
        ) : product.available < 4 ? (
          <div className="bg-secondary text-center text-white w-50 font-weight-bold p-3">
            AGOTADO
          </div>
        ) : (
          <>
            <div className="col-6 col-lg-3">
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <Button color="danger" onClick={toBuy}>
                  <FaMoneyCheckAlt
                    size={20}
                    className="position-relative mr-2"
                    style={{ top: 4 }}
                  />
                  <span className="mb-1">Comprar</span>
                </Button>
              )}
            </div>
            <div className="col-6 col-lg-3">
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <Button
                  color="warning"
                  className="text-white"
                  onClick={addCart}
                >
                  <MdShoppingBasket
                    size={20}
                    className="position-relative mr-2"
                    style={{ top: 4 }}
                  />
                  Añadir{' '}
                  {existCart !== undefined && <>({existCart.quantity})</>}
                </Button>
              )}
            </div>
          </>
        )}
        <div className="col-12 col-lg-3 mt-3 mt-md-0">
          <ActionFavoritePrduct idProduct={product.idProducts} />
        </div>
      </div>

      <Modal
        size="lg"
        isOpen={Visible}
        toggle={() => setVisible(false)}
        className="font-arvo"
      >
        <ModalBody>
          <h6>
            <FcApproval size={21} /> Producto agregado al carrito de compras
          </h6>
          <div className="row justify-content-center p-2">
            <div className="col-12 col-md-3">
              <img
                width="100%"
                src={`${BASE_API_IMAGES_CLOUDINNARY}/${product.source}`}
                alt={product.title}
              />
            </div>
            <div className="col-12 col-md-9">
              <h5 className="p-1">{product.title}</h5>
              <strong style={{ fontSize: 20, color: '#999' }}>
                US $
                {calculatePrice({
                  discount: product.discount,
                  price: product.price,
                })}
              </strong>
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="col-6 col-md-2 mr-md-5">
              <Link href="/productos">
                <Button color="link" className="text-cici">
                  Seguir comprando
                </Button>
              </Link>
            </div>
            <div className="col-6 col-md-2">
              <Link href="/compra">
                <Button className="bg-secundary">Ver carrito</Button>
              </Link>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default ActionsProductDetails
