/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import {
  Alert,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'
import { BiDetail } from 'react-icons/bi'
import { FaRegCommentDots } from 'react-icons/fa'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toast'
import Comentario from '../element/comentario'
import { ProductReview } from '../../interfaces/products'
import { GetProductReviews } from '../../api/products'

interface Props {
  loading: boolean
  idProduct: string
  brand: string
  size: string
  model: string
}

const MoreDetails = ({ idProduct, brand, size, model }: Props) => {
  const Styles = {
    color: {
      color: '#999',
    },
  }

  const [activeTab, setActiveTab] = useState<string>('1')
  const [ProductReviews, setReviews] = useState<ProductReview[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  useEffect(() => {
    setLoading(true)

    try {
      const fetchReviews = async () => {
        const { reviews } = await (await GetProductReviews({ idProduct })).data
        setReviews(reviews)
        setLoading(false)
      }

      idProduct && fetchReviews()
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }, [idProduct])

  return (
    <div>
      <Nav tabs>
        <NavItem className="cursor-pointer">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1')
            }}
          >
            <FaRegCommentDots /> &nbsp; Opiniones
          </NavLink>
        </NavItem>
        <NavItem className="cursor-pointer">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2')
            }}
          >
            <BiDetail /> &nbsp; Detalles
          </NavLink>
        </NavItem>
      </Nav>
      <br />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12" md="6">
              {ProductReviews.map((review) => (
                <div className="p-2 mb-2" key={review.idProductReviews}>
                  <Comentario loading={loading} review={review} />
                </div>
              ))}

              {ProductReviews.length === 0 && !loading && (
                <Alert color="info">
                  Por el momento no existen comentarios de este producto
                </Alert>
              )}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12" md="6">
              <span style={Styles.color} className="p-1 ml-2">
                Marca:{' '}
              </span>
              {loading ? (
                <Skeleton width={70} height={10} />
              ) : (
                <span>{brand}</span>
              )}
            </Col>
            <Col sm="12" md="6">
              <span style={Styles.color} className="p-1 ml-2">
                Origin:{' '}
              </span>
              <span>CN (origien)</span>
            </Col>
            <Col sm="12" md="6">
              <span style={Styles.color} className="p-1 ml-2">
                Tamaño:{' '}
              </span>
              {loading ? (
                <Skeleton width={70} height={10} />
              ) : (
                <span>{size}</span>
              )}
            </Col>
            <Col sm="12" md="6">
              <span style={Styles.color} className="p-1 ml-2">
                Modelo:{' '}
              </span>
              {loading ? (
                <Skeleton width={70} height={10} />
              ) : (
                <span>{model}</span>
              )}
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  )
}

export default MoreDetails
