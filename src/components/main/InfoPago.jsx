import React from 'react'
import '../../styles/info-pago.css'

const InfoPago = () => {
  return (
    <div className='row justify-content-evenly py-2 mx-0 px-0 bg-info-pago'>
      <div className="col-12 col-lg-4 mb-3">
        <div className="d-flex justify-content-center align-items-center">
          <i class="bi bi-house-heart-fill display-1 me-2 iconos_infoPago"></i>
        <div className='d-flex flex-column align-items-center'>
          <span className='h4 fw-bold mb-0'>COMPRA DESDE CASA</span>
          <span className='h5 mb-0'>y te lo llevamos a casa</span>
        </div>
        </div>
      </div>

      <div className="col-12 col-lg-4 mb-3">
        <div className="d-flex justify-content-center align-items-center">
          <i class="bi bi-credit-card-fill display-1 me-2 iconos_infoPago"></i>
        <div className='d-flex flex-column align-items-center'>
          <span className='h4 fw-bold mb-0'>3 PAGOS SIN INTERES</span>
          <span className='h5 mb-0'>por mercado pago</span>
        </div>
        </div>
      </div>

      <div className="col-12 col-lg-4 mb-3">
        <div className="d-flex justify-content-center align-items-center">
          <i class="bi bi-currency-dollar display-1 me-2 iconos_infoPago"></i>
        <div className='d-flex flex-column align-items-center'>
          <span className='h4 fw-bold mb-0'>10% DESCUENTO</span>
          <span className='h5 mb-0'>con pago en efectivo</span>
        </div>
        </div>
      </div>

    </div>
  )
}

export default InfoPago