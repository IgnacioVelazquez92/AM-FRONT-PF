import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Header className='container-fluid'/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout