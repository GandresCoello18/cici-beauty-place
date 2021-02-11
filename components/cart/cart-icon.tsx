/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Badge } from 'reactstrap'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'

const CartIcon = () => {
  const { Cart } = useSelector((state: RootState) => state.CartReducer)

  return (
    <Link href="/compra">
      <a className="text-dark">
        <AiOutlineShopping size={25} />
        <Badge
          color="dark"
          pill
          className="position-relative"
          style={{ top: -10 }}
        >
          {Cart.length}
        </Badge>
      </a>
    </Link>
  )
}

export default CartIcon
