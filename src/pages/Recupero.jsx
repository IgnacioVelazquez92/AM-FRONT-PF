import React from 'react'
import Emailjs from '../components/navbar/Emailjs'

const Recupero = () => {
  return (
    <div className='row justify-content-center align-items-center container mx-auto'>
      <div className='col-lg-4 col-12 '>
        <img className="img-fluid" src="../../src/assets/RecuperoClave.png" alt="recupero"  />
      </div>
      <div className='col-lg-5 col-12 '>
        <h3 className='my-2'>Recupero de clave</h3>
        <Emailjs />
      </div>
      
    

    </div>
  )
}

export default Recupero