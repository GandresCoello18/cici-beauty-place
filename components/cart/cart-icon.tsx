/* eslint-disable unicorn/explicit-length-check */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Badge, Tooltip } from 'reactstrap'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import { BASE_API_IMAGES_CLOUDINNARY_SCALE } from '../../api'

const CartIcon = () => {
  const { Cart } = useSelector((state: RootState) => state.CartReducer)

  const [tooltipOpen, setTooltipOpen] = useState(false)

  const toggle = () => setTooltipOpen(!tooltipOpen)
  return (
    <>
      <Link href="/compra">
        <a className="text-dark" id="cart">
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

      <Tooltip
        placement="bottom"
        isOpen={tooltipOpen}
        target="cart"
        style={{ backgroundColor: 'rgb(239 222 226)', color: '#696969' }}
        toggle={toggle}
      >
        <div className="row">
          {Cart.length ? (
            Cart.map((item) => (
              <div className="col-12 mt-2" key={item.idProducts}>
                <img
                  src={`${BASE_API_IMAGES_CLOUDINNARY_SCALE}/${item.source}`}
                  alt={item.title}
                  width="50%"
                />
                <br />
                <p className="p-2">
                  {item.title} <strong className="ml-2">${item.price}</strong>
                </p>
              </div>
            ))
          ) : (
            <div className="col-12">Carrito Vacío</div>
          )}
        </div>
      </Tooltip>
    </>
  )
}

export default CartIcon
