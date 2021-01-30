/* eslint-disable no-unused-expressions */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react'
import { MdFavorite } from 'react-icons/md'
import { Button } from 'reactstrap'
import { TokenContext } from '../../context/contextToken'
import {
  createLikeProduct,
  deleteLikeProduct,
  getLikeProduct,
} from '../../api/favorite'
import SpinnerLoader from '../element/spinner-cici'

interface Props {
  idProduct: string
}

const ActionFavoritePrduct = ({ idProduct }: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [isLike, setIsLike] = useState<boolean>(false)
  const { token } = useContext(TokenContext)

  useEffect(() => {
    try {
      const fetchFav = async () => {
        const { isFav } = await (await getLikeProduct({ token, idProduct }))
          .data
        setIsLike(isFav)
      }

      token && fetchFav()
    } catch (error) {
      console.log(error.message)
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
        console.log(error.message)
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
        console.log(error.message)
      }
    }
  }

  const renderText = () => {
    return (
      <>
        {isLike ? (
          <span>
            <MdFavorite /> Te gusta
          </span>
        ) : (
          <span>
            <MdFavorite /> ¿Te gusta?
          </span>
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
