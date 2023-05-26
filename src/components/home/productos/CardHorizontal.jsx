import React, {useState, useContext} from 'react';

const CardHorizontal = ({ product , ShoppingContext, onUnitChange  }) => {

  const {cartItems, setCartItems} =useContext(ShoppingContext)
  const [unidad, setUnidad] = useState(1);

  const deleteItemCart = (product)=>{
    const isProductInCart = cartItems.filter((item) => item._id !== product._id);
    setCartItems(isProductInCart);
    
  }

  const addUnidad = () => {
    setUnidad((prevUnidad) => prevUnidad + 1);
    onUnitChange(product._id, unidad + 1);
  };

    const substractUnidad = () => {
    if (unidad > 1) {
      setUnidad((prevUnidad) => prevUnidad - 1);
      onUnitChange(product._id, unidad - 1);
    } else {
      setUnidad(1);
    }
  };


  return (
    <div className='d-flex row justify-content-between mb-2'>
      <div className='d-flex col-3'>
        <img className= " object-fit-scale img-fluid img-thumbnail rounded " src={product.imagenes} alt={product.imagenes} />
      </div>
      <div className='d-flex flex-column col-8'>
        <div>
          <h5>{product.nombre}</h5>
          <span>{unidad}ud por ➡</span>
          <span> ${product.precio * unidad}</span>
        </div>
        <div >

          <button className='btn btn-outline-warning ms-1 btn-sm' onClick={addUnidad }>
            <i className="bi bi-plus-square-fill text-dark"></i>
          </button>

          <button className='btn btn-outline-warning ms-1 btn-sm' onClick={substractUnidad} >
            <i className="bi bi-dash-square-fill text-dark "></i>
          </button>

          <button className='btn btn-outline-warning ms-1 btn-sm' onClick={()=>{deleteItemCart(product)}} >
            <i className="bi bi-trash-fill text-dark"></i>
          </button>

        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;
