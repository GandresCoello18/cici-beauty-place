/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/camelcase */
import React, { Dispatch, SetStateAction } from 'react'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { MdShoppingBasket } from 'react-icons/md'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { Cart, Product } from '../../interfaces/products'
import redirect from '../../lib/redirect'
import { RootState } from '../../reducers'
import { setCart } from '../../reducers/cart'

interface Props {
  loading: boolean
  available: number
  quantity?: number
  product: Product
  setFeedback: Dispatch<SetStateAction<{ content: string; type: string }>>
}

const ActionsProductDetails = ({
  loading,
  available,
  quantity,
  product,
  setFeedback,
}: Props) => {
  const dispatch = useDispatch()
  const cartStorage = useSelector((state: RootState) => state.CartReducer.Cart)

  const validate_quantity = (ProductQuantity: number): boolean => {
    if (ProductQuantity > available) {
      setFeedback({
        type: 'danger',
        content: `Productos disponibles insuficientes: maximo de ${available} productos`,
      })
      return false
    }

    setFeedback({
      type: 'success',
      content: `Se agrego: ${quantity || 1} productos mas al carrito`,
    })
    return true
  }

  const ProductExitCart = (): Cart | undefined => {
    const productExist = cartStorage.find(
      (cart) => cart.idProducts === product.idProducts
    )

    return productExist
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

    validate_quantity(cart.quantity) &&
      dispatch(setCart([...cartStorage, ...[cart]]))
  }

  const addCart = () => {
    const productExist = ProductExitCart()

    if (!productExist) {
      addProductCart()
    } else {
      productExist.quantity += quantity || 1
      cartStorage.splice(0, cartStorage.length, productExist)
      validate_quantity(productExist.quantity) &&
        dispatch(setCart([...cartStorage]))
    }
  }

  const toBuy = () => {
    const productExist = ProductExitCart()

    if (!productExist) {
      addProductCart()
    }

    redirect('/compra')
  }

  return (
    <div className="row justify-content-start">
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
      <div className="col-6 col-lg-4">
        {loading ? (
          <Skeleton height={40} />
        ) : (
          <Button color="warning" className="text-white" onClick={addCart}>
            <div className="row">
              <div className="col-2">
                <MdShoppingBasket size={20} />
              </div>
              <div className="col-6">Añadir</div>
            </div>
          </Button>
        )}
      </div>
    </div>
  )
}

export default ActionsProductDetails
