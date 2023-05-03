import React from 'react';
import {Link} from 'react-router-dom';


const RecuperoPass = () => {
  return (
    <div className='d-flex justify-contetn-center align-items-center'>
      ¿Olvidaste tu clave? 👉
      <Link href="/recupero" target="_blank" > 
        Recuperar Contraseña
      </Link>

    </div>
  )
}

export default RecuperoPass