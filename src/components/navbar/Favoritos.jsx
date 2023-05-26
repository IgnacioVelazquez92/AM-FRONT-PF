import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { ShoppingContext } from "../../../context/ShoppingContext";

const Favoritos = () => {
  const { favoriteItems, setFavoriteItems } = useContext(ShoppingContext)

  const num = favoriteItems.length
  return (
    <div className='d-flex justify-content-center'>
      <Link to='/favoritos' className="btn nav-link position-relative border-0" >
        <i className="bi bi-star h3"></i>
        <span>Favoritos</span>
        {num === 0 ? (
          <span className="d-none position-absolute top-50 start-75 translate-middle badge rounded-pill bg-danger">
            {num}
          </span>
        ) : (
          <span className="position-absolute top-50 start-75 translate-middle badge rounded-pill bg-danger">
            {num}
          </span>
        )}

      </Link>

    </div>
  )
}

export default Favoritos