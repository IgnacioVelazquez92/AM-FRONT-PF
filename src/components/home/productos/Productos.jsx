import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import styles from "./productos.module.css";
import Detalles from "./Detalles";

const MostrarProductos = ({ productos, setProductos }) => {
  useEffect(() => {
    getProducts();
  }, []);

  const URL_PROD = "http://localhost:8080/products/get-all-products";
  const getProducts = async () => {
    try {
      const response = await axios(`${URL_PROD}`);
      setProductos(response.data);
    } catch (error) {
      alert("algo ha salido mal.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mx-1 my-5 flex-wrap">
      {productos.length >= 1 ? (
        productos.map((product) => {
          return (
            <div
              className="col-9 col-sm-3 col-md-3 col-lg-2 mx-1 my-2 d-flex align-self-stretch "
              key={product._id}
            >
              <Card className={`${styles.card}`}>
                <div className="d-flex flex-column justify-content-between">
                  <Card.Title className=" text-center my-2">
                    {product.nombre}
                  </Card.Title>
                </div>
                <div>
                  <Card.Body className="w-100 d-flex flex-column    align-items-center justify-content-between p-0">
                    <Card.Img
                      src={product.imagenes}
                      className={styles.img + " p-2"}
                    />
                    <div className="d-flex justify-content-between align-items-center w-100 px-2">
                      <strong className="fs-5 ms-1">${product.precio}</strong>
                      <div className="d-flex justify-content-center me-1">
                        <Button className={styles.Button + " p-2 m-0"}>
                          <BsCartPlusFill className="fs-5" />
                        </Button>
                        <Button className={styles.Button + " p-2 m-0"}>
                          <AiFillHeart className=" fs-5" />
                        </Button>
                      </div>
                    </div>
                    <hr className={styles.linea + " m-1"} />
                    <Button
                      className={styles.Button + " p-1 m-2"}
                    >
                      Ver mas detalles
                    </Button>
                  </Card.Body>
                </div>
              </Card>
            </div>
          );
        })
      ) : (
        <p>NO HAY DATOS PARA MOSTRAR</p>
      )}
    </div>
  );
};

export default MostrarProductos;
