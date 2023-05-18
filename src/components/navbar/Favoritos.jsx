import React, {useState} from 'react'

const Favoritos = () => {
  
  return (
    <div className='d-flex justify-content-center'>
      <button type="button" className="btn nav-link position-relative border-0" >
        <i className="bi bi-star h3"></i>
        <span>Favoritos</span> 
        <span className="position-absolute  top-50 start-75 translate-middle badge rounded-pill bg-danger">
        1
        </span>
      </button>

    </div>
  )
}

export default Favoritos