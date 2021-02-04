/* eslint-disable no-unused-expressions */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react'
import { MdFavorite, MdPeople } from 'react-icons/md'
import { Button } from 'reactstrap'
import Millify from 'millify'
import { toast } from 'react-toast'
import { TokenContext } from '../../context/contextToken'
import {
  createLikeProduct,
  deleteLikeProduct,
  getLikeProduct,
  getLikeProductCount,
} from '../../api/favorite'
import SpinnerLoader from '../element/spinner-cici'

interface Props {
  idProduct: string
}

const ActionFavoritePrduct = ({ idProduct }: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [countFav, setCountFav] = useState<number>(0)
  const [isLike, setIsLike] = useState<boolean>(false)
  const { token } = useContext(TokenContext)

  useEffect(() => {
    try {
      const fetchFav = async () => {
        const { isFav } = await (await getLikeProduct({ token, idProduct }))
          .data
        setIsLike(isFav)
      }

      const fetchCountFav = async () => {
        const { count } = await (await getLikeProductCount({ idProduct })).data
        console.log(count)
        setCountFav(count)
      }

      token && fetchFav()
      fetchCountFav()
    } catch (error) {
      toast.error(error.message)
    }
  }, [idProduct, token])

  const likeProduct = async () => {
    if (token) {
      setLoading(true)
      try {
        await createLikeProduct({ token, idProduct })
        setLoading(false)
        setIsLike(true)
      } catch (error) {
        toast.error(error.message)
      }
    } else {
      window.open('/login', '_blank')
    }
  }

  const deleteLike = async () => {
    if (token) {
      setLoading(true)
      try {
        await deleteLikeProduct({ token, idProduct })
        setLoading(false)
        setIsLike(false)
      } catch (error) {
        toast.error(error.message)
      }
    }
  }

  const renderText = () => {
    return (
      <>
        <MdFavorite /> {isLike ? 'Te gusta' : '¿Te gusta?'}{' '}
        {countFav ? (
          <>
            | {Millify(countFav)} <MdPeople />
          </>
        ) : (
          ''
        )}
      </>
    )
  }

  return (
    <Button
      outline
      color={isLike ? 'danger' : 'secondary'}
      size="sm"
      onClick={isLike ? deleteLike : likeProduct}
    >
      {loading ? <SpinnerLoader /> : renderText()}
    </Button>
  )
}

export default ActionFavoritePrduct
