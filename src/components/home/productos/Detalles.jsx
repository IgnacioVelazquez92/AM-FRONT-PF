import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './productos.module.css'
import { BsCartPlusFill } from "react-icons/bs";

const Detalles = ({ product}) => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>

      <Button onClick={() => setLgShow(true)} className={styles.Button + " p-1 my-1 mb-2"}>Ver mas detalles</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className='p-0'
      >
        <Modal.Header closeButton className='p-3 border-0'>
        </Modal.Header>
        <Modal.Body className='container-fluid mb-4'>
          <div className='row d-flex align-self-stretch'>
           <div className='col-12 col-md-6'>
                <img src={product.imagenes} alt={product.nombre} className={styles.imgModal}/>
            </div>
            <div className={`${styles.modalText} col-12 col-md-6`}>
                <p>Categoria: {product.categoria}</p>
                <h3>{product.nombre}</h3>
                <p><strong>$ {product.precio}</strong></p>
                <hr className={styles.linea}/>
                <p>{product.descripcion}</p>
                <Button className={`${styles.ButtonCart} w-100 d-flex justify-content-center align-items-center`}> <BsCartPlusFill className="fs-5 me-2" />Añadir al carrito</Button>
                <Button className={`${styles.ButtonFav} w-100 d-flex justify-content-center align-items-center`}> añadir a favoritos</Button>
            </div>
          </div>
 
        </Modal.Body>
      </Modal>
    </>
  )
};

export default Detalles