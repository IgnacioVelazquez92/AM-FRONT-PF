import React from 'react'
import Emailjs from '../components/navbar/Emailjs'

const Recupero = () => {
  return (
    <div className='row justify-content-center align-items-center container mx-auto px-0 py-4'>
      <div className='col-lg-4 col-10 '>
        <img className="img-fluid" src="/assets/RecuperoClave.png" alt="recupero"  />
      </div>
      <div className='col-lg-5 col-10 '>
        <h3 className='my-2 text-center text-lg-start'>Recupero de clave</h3>
        <Emailjs />
      </div>
      
    

    </div>
  )
}

export default Recupero