import React, {useState, useContext} from 'react';
import { ShoppingContext } from '../../context/ShoppingContext';
import '../styles/shoppingCart.css'
import Publicidad from '../components/home/publicidad/Publicidad';
import CardFav from '../components/home/productos/CardFav'

const FavoritosPage = () => {

  const {favoriteItems, setFavoriteItems}= useContext(ShoppingContext)

  return (
    <div className='d-flex align-items-start justify-content-between'>
      {
        favoriteItems.length===0? (<div className='d-flex justify-content-center col-12 col-md-11 my-5 py-5'><h1 className='animate__animated animate__slideInLeft'>No hay productos en favoritos</h1></div>):(
        <div className="mainFav">
        <ul className="cardsFav">
          {
          favoriteItems.map((product) => (
            
            <CardFav product={product} ShoppingContext={ShoppingContext} key={product._id} />
          ))
          }
        </ul>
        </div>
        )
      }
    <Publicidad className="col-1"/>
  </div>
  )
}

export default FavoritosPage