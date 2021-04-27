/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable unicorn/no-nested-ternary */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect, useState } from 'react'
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
import { TokenContext } from '../context/contextToken'
import Layout from '../components/layout'
import {
  GetAssignUserCoupons,
  UpdateAssignUserCoupons,
  getCoupons,
} from '../api/coupons'
import { Coupons, MyCouponsUser } from '../interfaces/coupons'
import { BASE_API, DEFAULT_AVATAR } from '../api'
import { StatusColorCoupons } from '../helpers/statusColor'
import ModalElement from '../components/element/modal'
import SpinnerLoader from '../components/element/spinner-cici'
import { UseNotSesion } from '../hooks/useNotSesion'

const MisCupones = () => {
  UseNotSesion()
  const { token } = useContext(TokenContext)
  const [dropdownOpen, setOpen] = useState<boolean>(false)
  const [cupones, setCupones] = useState<Coupons[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false)
  const [loadingCupon, setLoadingCupon] = useState<boolean>(false)
  const [misCupones, setMisCupones] = useState<MyCouponsUser[]>([])
  const [selectOptioon, setSelectOption] = useState<string>('Valido')
  const [selectUserCoupon, setSelectUserCoupon] = useState<string>('')
  const [selectType, setSelectType] = useState<string>('')
  const toggle = () => setOpen(!dropdownOpen)

  useEffect(() => {
    setLoading(true)
    try {
      const fetchMyCoupons = async () => {
        const { myCoupons } = await (
          await GetAssignUserCoupons({ token, status: selectOptioon })
        ).data
        setMisCupones(myCoupons)
        setLoading(false)
      }

      token && fetchMyCoupons()
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }, [token, selectOptioon])

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
      toast.error(error.message)
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
      toast.error(error.message)
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
      <div
        className="row bg-white border-bottom p-1 p-md-3 text-center"
        key={cupon.id_user_coupons}
      >
        <div className="col-4 border-right">
          {cupon.type ? (
            <Badge className="bg-cici text-dark">{cupon.type}</Badge>
          ) : cupon.status === 'Pendiente' ? (
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
            <Badge color="danger">No Especificado</Badge>
          )}
        </div>
        <div className="col-5 border-right">
          <span
            className={
              cupon.expiration_date === 'No Expira' ? 'text-danger' : ''
            }
          >
            {cupon.expiration_date}
          </span>
        </div>
        <div className="col-3">
          <Badge className={StatusColorCoupons(cupon.status)}>
            {cupon.status}
          </Badge>
        </div>
        {cupon.avatar && (
          <>
            <div className="col-12 col-md-6 mt-2 p-2 bg-light">
              <span className="font-weight-bold">Invitado el:</span>{' '}
              {cupon.created_at}
            </div>
            <div className="col-12 col-md-6 mt-2 p-2 bg-light">
              <img
                width="50"
                height="50"
                src={cupon.avatar || `${BASE_API}/static/${DEFAULT_AVATAR}`}
                alt={cupon.userName}
              />
              <span className="p-1 ml-3">{cupon.userName} (Invitado)</span>
            </div>
          </>
        )}
      </div>
    ))
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
                  <Button id="caret" size="sm">
                    {selectOptioon}
                  </Button>
                  <DropdownToggle split className="bg-cici" />
                  <DropdownMenu>
                    <DropdownItem onClick={() => setSelectOption('Valido')}>
                      Validos
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => setSelectOption('No valido aun')}
                    >
                      No valido aun
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectOption('Usado')}>
                      Usados
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectOption('Expirado')}>
                      Expirados
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </h3>
            </div>
          </div>
          <div className="row bg-white border-bottom p-3 text-center">
            <div className="col-4 border-right font-weight-bold text-cici">
              Tipo
            </div>
            <div className="col-5 border-right font-weight-bold text-cici">
              Expira
            </div>
            <div className="col-3 font-weight-bold text-cici">Estado</div>
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
