import React from 'react'
import { Button } from 'reactstrap'
import { MdShoppingBasket } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../../interfaces/products'
import { RootState } from '../../reducers'
import { setCart } from '../../reducers/cart'

interface Props {
  product: Product
}

const CartAddProduct = ({ product }: Props) => {
  const dispatch = useDispatch()
  const { Cart } = useSelector((state: RootState) => state.CartReducer)

  const addCart = () => {
    dispatch(setCart([...Cart, ...[product]]))
  }

  return (
    <Button color="warning" className="text-white" onClick={addCart}>
      <div className="row">
        <div className="col-2">
          <MdShoppingBasket size={20} />
        </div>
        <div className="col-6">Añadir</div>
      </div>
    </Button>
  )
}

export default CartAddProduct
