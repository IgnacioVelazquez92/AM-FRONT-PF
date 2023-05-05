import React, {useContext, useState, useEffect} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import UserContext from '../../../context/UserContext';


const User = () => {
const {user, setUser} =useContext(UserContext)

  const cerrarSesión = () =>{

    setUser("")
    localStorage.removeItem("token")
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='border-0'>
          <i className="bi bi-person-gear h2 me-1"></i>
          <span >{user.name}</span> 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/#">Action</Dropdown.Item>
        <Dropdown.Item href="/edit-user/:id">Configuraciones</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={cerrarSesión}>Cerrar sesión</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default User