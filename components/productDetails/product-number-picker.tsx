import React, { Dispatch, SetStateAction } from 'react'
import { GoPlus } from 'react-icons/go'
import { RiSubtractLine } from 'react-icons/ri'
import Skeleton from 'react-loading-skeleton'
import { Badge } from 'reactstrap'

interface Props {
  loading: boolean
  quantity: number
  available: number
  setQuantity: Dispatch<SetStateAction<number>>
}

const ProductPicker = ({
  loading,
  quantity,
  available,
  setQuantity,
}: Props) => {
  return (
    <>
      {loading ? <Skeleton height={20} width={60} /> : <span>Cantidad: </span>}
      {loading ? (
        <Skeleton height={30} width={30} circle />
      ) : (
        <Badge
          color="dark"
          className="p-1 cursor-pointer"
          pill
          style={{ fontSize: 17 }}
          onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        >
          <RiSubtractLine color="#fff" />
        </Badge>
      )}
      <strong className="p-2" style={{ fontSize: 20 }}>
        {loading ? <Skeleton height={35} width={35} circle /> : quantity}
      </strong>
      {loading ? (
        <Skeleton height={30} width={30} circle />
      ) : (
        <Badge
          color="dark"
          className="p-1 cursor-pointer"
          pill
          style={{ fontSize: 17 }}
          onClick={() => {
            if (quantity >= 1 && quantity < available) {
              setQuantity(quantity + 1)
            }
          }}
        >
          <GoPlus />
        </Badge>
      )}
      <span style={{ color: '#999' }} className="ml-1 ml-md-3">
        {loading ? <Skeleton height={15} /> : <>{available} disponibles</>}
      </span>
    </>
  )
}

export default ProductPicker
