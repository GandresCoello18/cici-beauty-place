import React from 'react'
import { ImPriceTags } from 'react-icons/im'
import { FaMoneyBillWave, FaShippingFast } from 'react-icons/fa'

const BannerClearFix = () => {
  const styles = {
    colorText: {
      color: '#999',
    },
  }

  return (
    <>
      <div className="row justify-content-around p-3 bg-white text-center font-arvo border-round">
        <div className="col-12 col-md-4 border-right p-2 p-md-0">
          <h6 className="font-weight-bold">
            <ImPriceTags /> &nbsp; Grandes precios
          </h6>
          <p style={styles.colorText}>Siempre hay algo en ofertas</p>
        </div>
        <div className="col-12 col-md-4 border-right p-2 p-md-0">
          <h6 className="font-weight-bold">
            <FaMoneyBillWave /> &nbsp; Compras seguras
          </h6>
          <p style={styles.colorText}>Paga con los mètodos màs avanzados</p>
        </div>
        <div className="col-12 col-md-4 p-2 p-md-0">
          <h6 className="font-weight-bold">
            <FaShippingFast /> &nbsp; Envio a todo el pais
          </h6>
          <p style={styles.colorText}>
            Lo que requires, se envia donde quieras.
          </p>
        </div>
      </div>
    </>
  )
}

export default BannerClearFix
