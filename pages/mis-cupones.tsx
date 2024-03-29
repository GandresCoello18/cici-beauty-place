/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable unicorn/no-nested-ternary */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import { NextSeo } from 'next-seo'
import {
  Alert,
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardHeader,
  CardText,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap'
import { toast } from 'react-toast'
import Skeleton from 'react-loading-skeleton'
import { AxiosError } from 'axios'
import { TokenContext } from '../context/contextToken'
import Layout from '../components/layout'
import {
  GetAssignUserCoupons,
  UpdateAssignUserCoupons,
  getCoupons,
} from '../api/coupons'
import { Coupons, MyCouponsUser } from '../interfaces/coupons'
import { BASE_API_IMAGES_CLOUDINNARY_SCALE, DEFAULT_AVATAR } from '../api'
import { StatusColorCoupons } from '../helpers/statusColor'
import ModalElement from '../components/element/modal'
import SpinnerLoader from '../components/element/spinner-cici'
import { UseNotSesion } from '../hooks/useNotSesion'
import { SourceAvatar } from '../helpers/sourceAvatar'
import PaginationElement from '../components/element/pagination'
import { HandleError } from '../helpers/handleError'

const MisCupones = () => {
  UseNotSesion()
  const { token } = useContext(TokenContext)
  const [dropdownOpen, setOpen] = useState<boolean>(false)
  const [cupones, setCupones] = useState<Coupons[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const [Pages, setPages] = useState<number>(0)
  const [SelectPage, setSelectPage] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false)
  const [loadingCupon, setLoadingCupon] = useState<boolean>(false)
  const [misCupones, setMisCupones] = useState<MyCouponsUser[]>([])
  const [selectOptioon, setSelectOption] = useState<string>('Valido')
  const [selectUserCoupon, setSelectUserCoupon] = useState<string>('')
  const [selectType, setSelectType] = useState<string>('')
  const toggle = () => setOpen(!dropdownOpen)

  const fetchMyCoupons = async (page: number, statusQuery?: string) => {
    setLoading(true)

    try {
      const { myCoupons, pages } = await (
        await GetAssignUserCoupons({
          token,
          status: statusQuery || selectOptioon,
          page,
        })
      ).data

      setPages(pages || 0)
      setMisCupones(myCoupons)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error(HandleError(error as AxiosError))
    }
  }

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const getStatus = query.get('status') as string
    const status = ['Valido', 'No valido aun', 'Usado', 'Expirado']

    if (status.includes(getStatus)) {
      setSelectOption(getStatus)
    } else {
      setSelectOption('Valido')
      Router.push(`/mis-cupones?status=Valido`)
    }

    token && selectOptioon && fetchMyCoupons(1, getStatus)
  }, [token, selectOptioon])

  useEffect(() => {
    token && SelectPage && fetchMyCoupons(SelectPage)
  }, [token, SelectPage])

  useEffect(() => {
    setLoadingCupon(true)
    try {
      const fetchCupones = async () => {
        const { coupons } = await (await getCoupons()).data
        setCupones(coupons)
        setLoadingCupon(false)
      }

      modal && fetchCupones()
    } catch (error) {
      setLoadingCupon(false)
      toast.error(HandleError(error as AxiosError))
    }
  }, [modal])

  const ElegirCupon = async (type: string, idCoupon: string) => {
    setSelectType(type)
    setLoadingUpdate(true)

    try {
      await UpdateAssignUserCoupons({
        token,
        idCoupon,
        id_user_coupons: selectUserCoupon,
      })
      setLoadingUpdate(false)
      setModal(false)
      window.location.reload()
      toast.success('Se agrego un cupon valido.')
    } catch (error) {
      setLoadingUpdate(false)
      toast.error(HandleError(error as AxiosError))
    }
  }

  const renderSkeleton = () => {
    return [0, 1, 2, 3, 4].map((item) => (
      <div className="bg-white p-3" key={item}>
        <Skeleton height={60} />
      </div>
    ))
  }

  const renderMisCupones = () => {
    return misCupones.map((cupon) => (
      <>
        <div
          className="row bg-white border-bottom p-1 p-md-3 text-center"
          key={cupon.id_user_coupons}
        >
          <div className="col border-right">
            {cupon.type ? (
              <Badge className="bg-cici text-dark">{cupon.type}</Badge>
            ) : cupon.status === 'No valido aun' ? (
              <Button
                color="info"
                size="sm"
                onClick={() => {
                  setModal(true)
                  setSelectUserCoupon(cupon.id_user_coupons)
                }}
              >
                Elegir cupón {loadingUpdate && <SpinnerLoader />}
              </Button>
            ) : (
              <Badge color="danger">Ninguno</Badge>
            )}
          </div>
          <div className="col border-right">
            <span className="text-danger">{cupon.expiration_date}</span>
          </div>
          <div className="col">
            <Badge className={StatusColorCoupons(cupon.status)}>
              {cupon.status}
            </Badge>
          </div>
        </div>
        <div className="row">
          {cupon.avatar && (
            <>
              <div className="col-12 col-md-6 p-2 bg-light">
                <span className="font-weight-bold">Invitado el:</span>{' '}
                {cupon.created_at}
              </div>
              <div className="col-12 col-md-6 p-2 bg-light">
                <img
                  width="50"
                  height="50"
                  src={
                    SourceAvatar(cupon.avatar) ||
                    `${BASE_API_IMAGES_CLOUDINNARY_SCALE}/${DEFAULT_AVATAR}`
                  }
                  alt={cupon.userName}
                />
                <span className="p-1 ml-3">{cupon.userName} (Te Invito)</span>
              </div>
            </>
          )}
        </div>
      </>
    ))
  }

  const handleDropdo = (status: string) => {
    setSelectOption(status)
    Router.push(`/mis-cupones?status=${status}`)
  }

  return (
    <>
      <NextSeo
        title="Mis Cupones | Cici beauty place"
        description="Revisa tus cupones, en uso, caducados y pendientes, usalos en tu próxima compra."
        canonical="https://cici.beauty/mis-cupones"
        openGraph={{
          url: 'https://cici.beauty/mis-cupones',
          title: 'Mis cupones',
          description:
            'Revisa tus cupones, en uso, caducados y pendientes, usalos en tu próxima compra.',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 800,
              height: 600,
              alt: 'logo de cici beauty place',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <Layout>
        <section className="container font-arvo mt-md-3 p-md-5">
          <div className="row justify-content-center bg-white">
            <div className="col-12 border-bottom p-3">
              <h3 className="p-1">
                Mis Cupones{' '}
                <ButtonDropdown
                  direction="left"
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  className="float-right"
                >
                  <Button id="caret" size="sm" onClick={toggle}>
                    {selectOptioon}
                  </Button>
                  <DropdownToggle split className="bg-cici" />
                  <DropdownMenu>
                    <DropdownItem onClick={() => handleDropdo('Valido')}>
                      Validos
                    </DropdownItem>
                    <DropdownItem onClick={() => handleDropdo('No valido aun')}>
                      No valido aun
                    </DropdownItem>
                    <DropdownItem onClick={() => handleDropdo('Usado')}>
                      Usados
                    </DropdownItem>
                    <DropdownItem onClick={() => handleDropdo('Expirado')}>
                      Expirados
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </h3>
            </div>
          </div>
          <div className="row bg-white p-3 text-center">
            <div className="col border-right font-weight-bold text-cici">
              Tipo
            </div>
            <div className="col border-right font-weight-bold text-cici">
              Expira
            </div>
            <div className="col font-weight-bold text-cici">Estado</div>
          </div>
          {loading ? renderSkeleton() : renderMisCupones()}
          {!loading && misCupones.length === 0 && (
            <div className="row bg-white p-3">
              <div className="col-12">
                <Alert color="info">
                  No tienes cupones <strong>{selectOptioon}</strong> por el
                  momento.
                </Alert>
              </div>
            </div>
          )}

          <div className="row justify-content-center mt-3">
            <br />

            <div className="col-12">
              <PaginationElement
                pages={Pages}
                setSelectPage={setSelectPage}
                SelectPage={SelectPage}
              />
            </div>
          </div>
        </section>
      </Layout>

      <ModalElement
        title="Elija un cupon"
        visible={modal}
        setVisible={setModal}
      >
        <div className="row">
          {loadingCupon ? (
            <SpinnerLoader />
          ) : (
            cupones.map((cupon) => (
              <div className="col-12 mb-3 p-3" key={cupon.idCoupon}>
                <Card>
                  <CardHeader className="bg-cici text-center font-weight-bold">
                    {cupon.type}
                  </CardHeader>
                  <CardBody>
                    <CardText>{cupon.descripcion}</CardText>
                    <Button
                      outline
                      className="bg-cici text-dark"
                      disabled={loadingUpdate}
                      onClick={() => ElegirCupon(cupon.type, cupon.idCoupon)}
                    >
                      Elegir{' '}
                      {loadingUpdate && selectType === cupon.type && (
                        <SpinnerLoader />
                      )}
                    </Button>
                  </CardBody>
                </Card>
              </div>
            ))
          )}
          {!loadingCupon && cupones.length === 0 && (
            <Alert color="info">
              No hay cupones disponibles por el momento.
            </Alert>
          )}
        </div>
      </ModalElement>
    </>
  )
}

export default MisCupones
