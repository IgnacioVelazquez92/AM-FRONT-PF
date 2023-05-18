import React, {useContext, useState, useEffect} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import UserContext from '../../../context/UserContext';


const User = () => {
const {user, setUser} =useContext(UserContext)

  const cerrarSesión = () =>{

    setUser("")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  }

  return (
    <div className="dropdown">
      <button className="btn btn-transparent border-0 text-center"  data-bs-toggle="dropdown" aria-expanded="false">
        <div>
          <i className="bi bi-person-gear h2 me-1"></i>
          <span >{user.name}</span> 
        </div>
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="/edit-user">Configuraciones</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" onClick={cerrarSesión} >Cerrar sesión</a></li>
      </ul>
  </div>
  );
}

export default User