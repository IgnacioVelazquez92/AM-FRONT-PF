import React from 'react'
import {Link} from 'react-router-dom'

const Dropdowns = () => {
  return (
  <>
    <ul className="nav justify-content-center border-top border-bottom fw-semibold">
      <li className="nav-item hov">
        <a className="nav-link text-dark" href="/#">Inicio</a>
      </li>
      <li className="nav-item hov">
        <Link className="nav-link text-dark" to="/AboutUs">¿Quiénes Somos?</Link>
      </li>
      <li className="nav-item dropdown hov">
        <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Productos</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/*">Bolsos y Mochilas</a></li>
          <li><a className="dropdown-item" href="/*">Porta Cosméticos y Cartucheras</a></li>
          <li><a className="dropdown-item" href="/*">Fundas para Notebook</a></li>
          <li><a className="dropdown-item" href="/*">Productos para bebé</a></li>
        </ul>
      </li>
      <li className="nav-item hov">
        <a className="nav-link text-dark" href="/*">¿Cómo comprar?</a>
      </li>
      <li className="nav-item hov">
        <a className="nav-link text-dark" href="/*">Contactos</a>
      </li>
    </ul>
  </>
  )
}

export default Dropdowns