import React, { useContext, useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import {
  Alert,
  Badge,
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap'
import { toast } from 'react-toast'
import Skeleton from 'react-loading-skeleton'
import { TokenContext } from '../context/contextToken'
import Layout from '../components/layout'
import { GetAssignUserCoupons } from '../api/coupons'
import { MyCouponsUser } from '../interfaces/coupons'
import { BASE_API, DEFAULT_AVATAR } from '../api'
import { StatusColorCoupons } from '../helpers/statusColor'

const MisCupones = () => {
  const { token } = useContext(TokenContext)
  const [dropdownOpen, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [misCupones, setMisCupones] = useState<MyCouponsUser[]>([])
  const [selectOptioon, setSelectOption] = useState<string>('Todas')
  const toggle = () => setOpen(!dropdownOpen)

  useEffect(() => {
    setLoading(true)
    try {
      const fetchMyCoupons = async () => {
        const { myCoupons } = await (await GetAssignUserCoupons({ token })).data
        setMisCupones(myCoupons)
        setLoading(false)
      }

      fetchMyCoupons()
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }, [token])

  const renderSkeleton = () => {
    return [0, 1, 2, 3, 4].map((item) => (
      <div className="bg-white" key={item}>
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
          <Badge className="bg-cici text-dark">{cupon.type}</Badge>
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
      </div>
    ))
  }

  return (
    <>
      <NextSeo
        title="Mis Cupones | Cici beauty place"
        description="Mis cupones, en uso, caducados y pendienntes."
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
                    <DropdownItem onClick={() => setSelectOption('Todas')}>
                      Todas
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectOption('Validos')}>
                      Validos
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => setSelectOption('No valido aun')}
                    >
                      No valido aun
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectOption('Usados')}>
                      Usados
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectOption('Expirados')}>
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
                <Alert color="info">No tienes cupones por el momento.</Alert>
              </div>
            </div>
          )}
        </section>
      </Layout>
    </>
  )
}

export default MisCupones
