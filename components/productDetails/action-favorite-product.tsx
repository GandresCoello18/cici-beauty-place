/* eslint-disable no-unused-expressions */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react'
import { MdFavorite, MdPeople } from 'react-icons/md'
import { Button } from 'reactstrap'
import Millify from 'millify'
import { toast } from 'react-toast'
import { AxiosError } from 'axios'
import { TokenContext } from '../../context/contextToken'
import {
  createLikeProduct,
  deleteLikeProduct,
  getLikeProduct,
  getLikeProductCount,
} from '../../api/favorite'
import SpinnerLoader from '../element/spinner-cici'
import { HandleError } from '../../helpers/handleError'

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
      toast.error(HandleError(error as AxiosError))
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
        toast.error(HandleError(error as AxiosError))
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
        toast.error(HandleError(error as AxiosError))
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
