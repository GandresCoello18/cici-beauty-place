import React from 'react'

const BannerClearFix = () => {
  const styles = {
    colorText: {
      color: '#999',
      fontSize: 15,
    },
  }

  return (
    <>
      <div className="row justify-content-around p-3 bg-white text-center font-arvo border-round">
        <div className="col-12 col-md-4 border-right p-4">
          <h6 className="font-weight-bold text-cici">
            <img
              src="img/shopping-movil.svg"
              alt="compra sin moverte - cici"
              width="100"
            />
            <br />
            Compra sin moverte
          </h6>
          <p style={styles.colorText}>
            Encuentra lo que necesitas, y coordina el pago y la entrega con
            nosotros. Es fácil y rápido. ¡Todos podemos hacerlo!
          </p>
        </div>
        <div className="col-12 col-md-4 border-right p-4">
          <h6 className="font-weight-bold text-cici">
            <img
              src="img/shhopping-payment.svg"
              alt="shopping payment - cici"
              width="100"
            />
            <br />
            Compras seguras
          </h6>
          <p style={styles.colorText}>
            Paga desde cualquier lugar del pais utilizando servicios como Paypal
            o con tu banco de confianza
          </p>
        </div>
        <div className="col-12 col-md-4 p-4">
          <h6 className="font-weight-bold text-cici">
            <img
              src="img/shopping-orden.svg"
              alt="shopping orden - cici"
              width="100"
            />
            <br />
            Confirma tu orden
          </h6>
          <p style={styles.colorText}>
            Tus ordenes pueden ser cancelados hasta 15 dias despues de realizar
            el pedido.
          </p>
        </div>
      </div>
    </>
  )
}

export default BannerClearFix
