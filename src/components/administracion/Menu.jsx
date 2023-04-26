import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import styles from '../../styles/menu.module.css'

const Menu = () => {
  return (
        <div className={`d-flex  col-12 col-md-2 border-end ${styles.contenedorNav}`}>
            <Nav  defaultActiveKey="/productos" className={`${styles.nav}`}>
                <Link to="/"className={styles.link} >Productos</Link>
                <Link to="/pedidos" className={styles.link}>Pedidos</Link>
                <Link to="/gestionUsuarios" className={styles.link}>Gestion de usuarios</Link>
            </Nav>
        </div>
  );
};

export default Menu;