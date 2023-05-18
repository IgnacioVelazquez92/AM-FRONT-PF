import React from 'react'
import '../../styles/error404.css'

const Error404 = () => {
  return (
    <div className='bodydel404'>
      <div className="error-container">
        <h1 className='h1del404 animate__hinge'>Error 404</h1>
        <img className='widthdel404' src={`../../../../src/assets/Marca_de_agua_2.png`} alt="logo" />
        <p className='pdel404 animate__bounceOut'>Lo sentimos, la página que estás buscando no ha sido encontrada.</p>
        <br/>
        <a className='adel404' href="/">Volver a la página principal</a>

    </div>
    </div>
  )
}

export default Error404