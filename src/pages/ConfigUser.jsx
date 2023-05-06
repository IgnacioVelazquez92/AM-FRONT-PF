import React from 'react'
import EditUser from '../components/navbar/EditUser'
import EditMailPass from '../components/navbar/EditMailPass'

const ConfigUser = () => {
  return (
    <div className='container row justify-content-lg-evenly justify-content-center my-3 mx-auto'>
      <h3> Configuraciones de usuario</h3>
      <article className='col-lg-6 col-10'>
        <EditUser />
      </article>
      <article className='col-lg-6 col-10'>
        <EditMailPass />
        </article>
    </div>
  )
}

export default ConfigUser