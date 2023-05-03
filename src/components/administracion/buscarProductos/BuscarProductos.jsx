import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsSearch } from "react-icons/bs";
import styles from './buscarProducto.module.css';

const BuscarProductos = () => {
  return (
    <>
        <Form className={`col-10 ${styles.search} mt-2`}>
          <Form.Control
            type="search"
            placeholder="Buscar producto"
            className={`me-2 ${styles.formSearch}`}
            aria-label="Search"
          />
          <Button className={styles.button}><BsSearch className={styles.icono}/></Button>
        </Form>
    </>
  );
};

export default BuscarProductos;