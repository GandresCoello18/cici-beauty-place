/* eslint-disable unicorn/consistent-function-scoping */
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
import { AxiosError } from 'axios'
import Comentario from '../element/comentario'
import { ProductReview, SourcesProduct } from '../../interfaces/products'
import { GetProductReviews } from '../../api/products'
import { GetReviewCombo } from '../../api/combos'
import { BASE_API_IMAGES_CLOUDINNARY } from '../../api'
import { HandleError } from '../../helpers/handleError'
import PaginationElement from '../element/pagination'

interface Props {
  idProduct?: string
  idCombo?: string
  brand?: string
  size?: string
  model?: string
  sourcesProduct?: SourcesProduct[]
}

const MoreDetails = ({
  idProduct,
  idCombo,
  brand,
  size,
  model,
  sourcesProduct,
}: Props) => {
  const Styles = {
    color: {
      color: '#999',
    },
  }

  const [activeTab, setActiveTab] = useState<string>('1')
  const [Count, setCount] = useState<number>(0)
  const [SelectPage, setSelectPage] = useState<number>(1)
  const [ProductReviews, setReviews] = useState<ProductReview[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  useEffect(() => {
    if (!idCombo) {
      setActiveTab('2')
    }
  }, [idCombo])

  useEffect(() => {
    const fetchReviews = async (page: number) => {
      setLoading(true)

      try {
        const { reviews, pages } = await (
          await GetProductReviews({ idProduct: idProduct || '', page })
        ).data
        setReviews(reviews)
        setCount(pages || 1)
        setLoading(false)
      } catch (error) {
        toast.error(HandleError(error as AxiosError))
        setLoading(false)
      }
    }

    const fetchReviewsCombo = async (page: number) => {
      setLoading(true)

      try {
        const { reviews, pages } = await (
          await GetReviewCombo({ idCombo: idCombo || '', page })
        ).data
        setReviews(reviews)
        setCount(pages || 1)
        setLoading(false)
      } catch (error) {
        toast.error(HandleError(error as AxiosError))
        setLoading(false)
      }
    }

    idProduct && fetchReviews(SelectPage || 1)
    idCombo && fetchReviewsCombo(SelectPage || 1)

    SelectPage > 1 && setActiveTab('1')
  }, [idProduct, idCombo, SelectPage])

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
            <FaRegCommentDots /> &nbsp; Valoraciones
          </NavLink>
        </NavItem>
        {!idCombo ? (
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
        ) : (
          ''
        )}
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
          <Row className="justify-content-center">
            <Col className="col-auto">
              <PaginationElement
                pages={Count}
                setSelectPage={setSelectPage}
                SelectPage={SelectPage}
              />
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
                Origen:{' '}
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
          <Row className="justify-content-center mt-3 p-2">
            {sourcesProduct &&
              sourcesProduct.map((source) => (
                <Col
                  key={source.idProduct}
                  className="col-12 col-md-10 col-lg-8 mb-3"
                >
                  <img
                    src={`${BASE_API_IMAGES_CLOUDINNARY}/${source.source}`}
                    width="100%"
                    alt={source.kind}
                  />
                </Col>
              ))}
          </Row>
        </TabPane>
      </TabContent>
    </div>
  )
}

export default MoreDetails
