/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useContext, useEffect, useState } from 'react'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { MdShoppingBasket } from 'react-icons/md'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { toast } from 'react-toast'
import { newProductCart } from '../../api/cart'
import { Cart, Product } from '../../interfaces/products'
import redirect from '../../lib/redirect'
import { RootState } from '../../reducers'
import { setCart } from '../../reducers/cart'
import SpinnerLoader from '../element/spinner-cici'
import ActionFavoritePrduct from './action-favorite-product'
import { TokenContext } from '../../context/contextToken'

interface Props {
  loading: boolean
  available: number
  quantity?: number
  product: Product
}

const ActionsProductDetails = ({
  loading,
  available,
  quantity,
  product,
}: Props) => {
  const { token } = useContext(TokenContext)
  const [loadingAction, setLoadingAction] = useState<boolean>(false)
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
        `Productos disponibles insuficientes: maximo de ${available} productos`
      )
      return false
    }

    toast.success(`Se agrego: ${quantity || 1} productos mas al carrito`)
    return true
  }

  const fetchAddProduct = async (cart: {
    idProducts: string
    quantity: number
  }) => {
    if (token) {
      setLoadingAction(true)
      try {
        await newProductCart({
          idProduct: cart.idProducts,
          quantity: cart.quantity,
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
    }

    if (validate_quantity(cart.quantity)) {
      dispatch(setCart([...cartStorage, ...[cart]]))
      fetchAddProduct({ idProducts: cart.idProducts, quantity: cart.quantity })
    }
  }

  const addCart = () => {
    if (!existCart) {
      addProductCart()
    } else {
      existCart.quantity += quantity || 1
      cartStorage.splice(0, cartStorage.length, existCart)
      if (validate_quantity(existCart.quantity)) {
        dispatch(setCart([...cartStorage]))
        fetchAddProduct({
          idProducts: existCart.idProducts,
          quantity: quantity || 1,
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
    <div className="row justify-content-start">
      {loadingAction ? (
        <SpinnerLoader />
      ) : (
        <>
          <div className="col-6 col-lg-3">
            {loading ? (
              <Skeleton height={40} />
            ) : (
              <Button color="danger" onClick={toBuy}>
                <div className="row">
                  <div className="col-2">
                    <FaMoneyCheckAlt size={20} />
                  </div>
                  <div className="col-6">Comprar</div>
                </div>
              </Button>
            )}
          </div>
          <div className="col-6 col-lg-3">
            {loading ? (
              <Skeleton height={40} />
            ) : (
              <Button color="warning" className="text-white" onClick={addCart}>
                <div className="row">
                  <div className="col-2">
                    <MdShoppingBasket size={20} />
                  </div>
                  <div className="col-7">
                    Añadir{' '}
                    {existCart !== undefined && <>({existCart.quantity})</>}
                  </div>
                </div>
              </Button>
            )}
          </div>
        </>
      )}
      <div className="col-12 col-lg-3 mt-3 mt-md-0">
        <ActionFavoritePrduct idProduct={product.idProducts} />
      </div>
    </div>
  )
}

export default ActionsProductDetails
