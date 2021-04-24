/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Badge } from 'reactstrap'
import { toast } from 'react-toast'
import { BASE_API } from '../../api'
import { deleteProductCart, newProductCart } from '../../api/cart'
import { Cart } from '../../interfaces/products'
import { RootState } from '../../reducers'
import { setCart } from '../../reducers/cart'
import ActionFavoritePrduct from '../productDetails/action-favorite-product'
import { TokenContext } from '../../context/contextToken'
import ProductPicker from '../productDetails/product-number-picker'
import { calculatePrice } from '../../helpers/calculatePrice'
import SpinnerLoader from '../element/spinner-cici'

interface Props {
  product: Cart
}

const CartProduct = ({ product }: Props) => {
  const dispatch = useDispatch()
  const { token } = useContext(TokenContext)
  const [Loading, setLoading] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(0)

  const cartReducer = useSelector((state: RootState) => state.CartReducer.Cart)

  const QuantityProductReducer = () => {
    const ProductCartReducer = cartReducer.find(
      (item) => item.idProducts === product.idProducts
    )

    if (ProductCartReducer) {
      ProductCartReducer.quantity = quantity
      cartReducer.splice(0, cartReducer.length, ProductCartReducer)

      dispatch(setCart(cartReducer))
    }
  }

  const RemoveProductReducer = () => {
    const setCartReducer = cartReducer.filter(
      (item) => item.idProducts !== product.idProducts
    )

    dispatch(setCart(setCartReducer))
  }

  const RemoveProductCart = async () => {
    if (token) {
      deleteProductCart({ token, idProduct: product.idProducts })
        .then(() => RemoveProductReducer())
        .catch((error) => toast.error(error.message))
    } else {
      RemoveProductReducer()
    }
  }

  useEffect(() => {
    if (token) {
      const fetchAddProduct = async () => {
        setLoading(true)

        try {
          await newProductCart({
            idProduct: product.idProducts,
            quantity: quantity - product.quantity,
            colour: product.colour,
            token,
          })

          QuantityProductReducer()
          setLoading(false)
        } catch (error) {
          toast.error(error.message)
          setLoading(false)
        }
      }

      quantity && fetchAddProduct()
    } else {
      quantity && QuantityProductReducer()
    }
  }, [quantity, token])

  return (
    <>
      <div className="card mb-3" style={{ width: '100%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${BASE_API}/static/${product.source}`}
              width="100%"
              className="p-2"
              alt={product.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <div className="row justify-content-between">
                {product.colour && (
                  <div className="col-12">
                    Color:{' '}
                    <button
                      disabled
                      className="cursor-pointer border-round p-2 ml-2 mb-2"
                      style={{
                        background: product.colour,
                        width: 18,
                        height: 18,
                      }}
                    />
                  </div>
                )}
                <div className="col-12">
                  {Loading ? (
                    <SpinnerLoader />
                  ) : (
                    <ProductPicker
                      loading={false}
                      quantity={product.quantity || 1}
                      available={product.available}
                      setQuantity={setQuantity}
                    />
                  )}
                </div>
                <div className="col-12 p-1">
                  <div className="p-1 mb-2 border-bottom">
                    <strong style={{ fontSize: 20 }}>
                      US $
                      {calculatePrice({
                        discount: product.discount,
                        price: product.price,
                      })}
                    </strong>
                    {product.discount ? (
                      <>
                        <span className="ml-2 tachado">
                          US ${product.price}
                        </span>
                        <span className="tag-discount ml-2">
                          -{product.discount}%
                        </span>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                  <ActionFavoritePrduct idProduct={product.idProducts} />
                </div>
              </div>

              {product.available <= 5 && (
                <small className="text-cici mb-1 mt-1">
                  Solo queda(n) <strong>{product.available}</strong> en stock
                  (hay más unidades en camino)
                </small>
              )}

              <Badge
                color={product.status === 'Disponible' ? 'success' : 'danger'}
              >
                {product.status}
              </Badge>
              <Badge
                color="danger float-right cursor-pointer"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Eliminar del carrito"
                onClick={RemoveProductCart}
              >
                X
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartProduct
