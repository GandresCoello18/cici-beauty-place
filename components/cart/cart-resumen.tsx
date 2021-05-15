/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-shadow */
import React, { useState } from 'react'
import { BiTrendingDown } from 'react-icons/bi'
import Skeleton from 'react-loading-skeleton'
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap'

interface Props {
  loading?: boolean
  subTotal?: number
  discount: number
  envio: number
  text: string
  total: number
}

const CartResumne = ({
  loading,
  subTotal,
  discount,
  envio,
  text,
  total,
}: Props) => {
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false)

  return (
    <>
      <div className="p-3">
        <div className="p-1 border-bottom">
          <h3>Resumen</h3>
        </div>
        {subTotal ? (
          <div className="p-1 border-bottom">
            {loading ? (
              <Skeleton width="100%" height={20} />
            ) : (
              <>
                <span>Sub total</span>
                <span className="float-right">${subTotal}</span>
              </>
            )}
          </div>
        ) : (
          ''
        )}
        <div className="p-1 border-bottom">
          {loading ? (
            <Skeleton width="100%" height={20} />
          ) : (
            <>
              <span>Descuento</span>
              <span className="float-right">-{discount}%</span>
            </>
          )}
        </div>
        <div className="p-1 border-bottom">
          {loading ? (
            <Skeleton width="100%" height={20} />
          ) : (
            <>
              <span id="shippingCart" className="cursor-pointer">
                Envió <BiTrendingDown color="green" size={20} />{' '}
              </span>
              <span className={`float-right ${text && 'text-success'}`}>
                {text || `$${envio}`}
              </span>
            </>
          )}
        </div>
        <div className="p-1 bg-cici">
          {loading ? (
            <Skeleton width="100%" height={20} />
          ) : (
            <>
              <span>Monto a pagar</span>
              <span className="float-right">${total}</span>
            </>
          )}
        </div>
      </div>

      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="shippingCart"
        toggle={() => setPopoverOpen(!popoverOpen)}
      >
        <PopoverHeader>Precio de envio</PopoverHeader>
        <PopoverBody>
          Mientas mas productos agreges a tu carrito tendras rebajas en el
          precio de envio, si tu compra es mayoro igual a $40, el envio sera
          totalmente gratis.
        </PopoverBody>
      </Popover>
    </>
  )
}

export default CartResumne
