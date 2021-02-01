import React from 'react'
import { RiCouponLine } from 'react-icons/ri'

const BannerInvitacion = () => {
  return (
    <section className="container-fluid font-arvo">
      <div className="row banenr-invitacion">
        <div className="col-12 text-center">
          <span>
            <RiCouponLine className="ml-2" /> Crea tu cuenta hoy y recibe{' '}
            <strong style={{ color: '#232f3e' }}>1 cupon gratis</strong> para tu
            proxima compra.
          </span>
        </div>
      </div>
    </section>
  )
}

export default BannerInvitacion
