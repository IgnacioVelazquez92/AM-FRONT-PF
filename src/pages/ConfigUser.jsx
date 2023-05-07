import React from 'react'
import EditUser from '../components/navbar/EditUser'
import EditMailPass from '../components/navbar/EditMailPass'

const ConfigUser = () => {
  return (
    <div className='container row justify-content-lg-evenly justify-content-center my-3 mx-auto'>
      <h3 className='text-center'> Configuraciones de usuario</h3>
      <article className='col-lg-6 col-10 row justify-content-center align-items-stretch'>
        <h5 className='mt-3 mb-1'> Aqui podras configurar tus datos personales</h5>
        <EditUser />
      </article>
      <article className='col-lg-6 col-10 row justify-content-center align-items-stretch'>
      <h5 className='mt-3 mb-4'> Aqui podras configurar tus datos de logueo</h5>
        <EditMailPass />
        </article>
    </div>
  )
}

export default ConfigUser