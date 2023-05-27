import React, {useContext} from 'react';
import '../../../styles/shoppingCart.css'


function CardFav({product, ShoppingContext}) {

const {favoriteItems, setFavoriteItems} = useContext(ShoppingContext)

const deleteItemFav = (product)=>{
  const isProductInCart = favoriteItems.filter((item) => item._id !== product._id);
  setFavoriteItems(isProductInCart);
  
}
  return (
    <>
      <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src={product.imagenes} alt={product.imagenes} />
            <span className="card_price"><span>$</span>{product.precio}</span>
          </div>
          <div className="card_content">
            <h2 className="card_title">{product.nombre}</h2>
            <div className="card_text">
              <p>{product.descripcion}</p>
              <hr />
            <p>
              <button className='btn btn-outline-warning ms-1 btn-sm' onClick={()=>{deleteItemFav(product)}} >
                Borrar de favoritos <i className="bi bi-trash-fill text-dark"></i>
              </button>
            </p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardFav;

