import React, { useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import styles from "./productos.module.css";
import Detalles from "./Detalles";
import Swal from "sweetalert2";
import Loader from "../../loader/Loader";
import { ApiClient } from "../../api/services";
import { useState } from "react";
import { ShoppingContext } from "../../../../context/ShoppingContext";
// import ToastCart from "./ToastCart";

const MostrarProductos = ({ productos, setProductos }) => {
  const {cartItems, setCartItems, favoriteItems, setFavoriteItems } = useContext(ShoppingContext)

  const apiClient = new ApiClient();

  useEffect(() => {
    getProducts();
  }, []);


  const addToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item._id === product._id);
    if (!isProductInCart) {
      setCartItems((prevCartItems) => [...prevCartItems, product]);
    }
  };

  useEffect(() => {
    console.log("Carrito",cartItems);
  }, [cartItems]);


  const addToFavorite = (product) => {
    const isProductInFavorites = favoriteItems.some((item) => item._id === product._id);
    if (!isProductInFavorites) {
      setFavoriteItems((prevFavoriteItems) => [...prevFavoriteItems, product]);
    }
  };


  useEffect(() => {
    console.log("favorito",favoriteItems);
  }, [favoriteItems]);

  const getProducts = async () => {
    try {
      const response = await apiClient.getAllProducts();
      const productos = response.data;
      const producto = productos.filter(product => product.disable);
      if(productos.length > 0){
        setProductos(producto)
      }
      // setProductos(response.data);
      return producto
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'error del servidor!',
        footer: error
      })
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mx-1 my-5 flex-wrap w-100">
      {productos.length >= 1 ? (
        productos.map((product) => {
          return (
            <div
              className="col-8 col-sm-3 col-md-3 col-lg-2 mx-1 my-2 d-flex align-self-stretch "
              key={product._id}
            >
              <Card className={`${styles.card}`}>
                <div className="d-flex flex-column justify-content-between">
                  <Card.Title className=" text-center my-2">
                    {product.nombre}
                  </Card.Title>
                </div>
                <div>
                  <Card.Body className="w-100 d-flex flex-column align-items-center justify-content-between p-0">
                    <Card.Img
                      src={product.imagenes}
                      className={styles.img + " p-2"}
                    />
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100 px-3 px-sm-2">
                      <strong className="fs-5 ms-1">${product.precio}</strong>
                      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                        <Button onClick={() => addToCart(product)} className={`${styles.ButtonIcon} p-1 m-1 d-flex justify-content-center align-items-center`}>
                          <p className="p-1 m-0 d-md-none h6">Agregar al carrito</p>
                          <BsCartPlusFill className="fs-5" />
                        </Button>
                        
                        <Button onClick={()=> addToFavorite(product)} className={`${styles.ButtonIcon} p-1 m-1 d-flex justify-content-center align-items-center  d-md-block`}>
                          <p className="p-1 m-0 d-md-none h6">Añadir a favorito</p>
                          <AiFillHeart className= " fs-5" />
                        </Button>
                      </div>
                    </div>
                    <hr className={styles.linea + " m-1"} />
                    <Detalles product={product} addToCart={addToCart} addToFavorite={addToFavorite} ></Detalles>
                  </Card.Body>
                </div>
              </Card>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MostrarProductos;
