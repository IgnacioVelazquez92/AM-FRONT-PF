import React from 'react'

const SocialIcons = () => {
  return (
    <div className='d-flex align-items-center bg-header'>
      <div className=''>
        <a href="https://www.facebook.com/Amcreacionesss?mibextid=ZbWKwL" target="_blank">
          <i className="bi bi-facebook mx-2 h5 fw-bold redes"></i>
        </a>
        <a href="https://instagram.com/am.creacioness?igshid=YmMyMTA2M2Y=" target="_blank">
          <i className="bi bi-instagram mx-2 h5 fw-bold redes"></i>
        </a>

      </div>
      <div className="flex-grow-1 text-center">
        <span className=' envio-pais'>Envíos a todo el País 
          <i className="bi bi-truck mx-1 h5"></i>
        </span>
      </div>
    </div>
  )
}

export default SocialIcons