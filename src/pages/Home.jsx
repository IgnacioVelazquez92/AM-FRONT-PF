import React from 'react'
import Carrusel from '../components/carrusel/Carrusel'
import InfoPago from '../components/main/InfoPago'
import HomeProducts from './HomeProducts'
const Home = () => {
  return (
    <div>
      <Carrusel />
      <InfoPago/>
      <HomeProducts />
    </div>
  )
}

export default Home
