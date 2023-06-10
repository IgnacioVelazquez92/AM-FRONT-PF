import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { ShoppingContext } from "../../../context/ShoppingContext";
import "../../styles/cartFav.css"

const Favoritos = () => {
  const { favoriteItems, setFavoriteItems } = useContext(ShoppingContext)

  const num = favoriteItems.length
  return (
    <div className='d-flex justify-content-center'>
      <Link to='/favoritos' className="btn nav-link position-relative border-0" >
        <i className="bi bi-star h3"></i>
        <span>Favoritos</span>
        {num === 0 ? (
          <span className="d-none translate-middle fav-badge ">
            {num}
          </span>
        ) : (
          <span className=" translate-middle fav-badge">
            {num}
          </span>
        )}

      </Link>

    </div>
  )
}

export default Favoritos