import React from 'react';
import styles from './categoria.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Categoria = () => {
  return (
  <div className={styles.border + ' d-flex justify-content-center align-items-start col-2 border-end g-0'}>
    <Navbar bg="light" expand="md" className={`${styles.bg} col-12 bg-primary`}>
      <Container className={`${styles.bg}flex-column justify-content-center g-0`}>
        <Navbar.Brand href="#home" className='g-0 m-0 p-0 d-none d-block-sm'>Categorias</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"className={`${styles.bg} g-0 p-0 `} />
        <Navbar.Collapse id="basic-navbar-nav" className={`${styles.bg} mt-2`}>
          <Nav className="m-0 d-flex flex-column">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div> 

)
  }
export default Categoria;   

        // <ul className={style.ul + ' mt-5 p-0'}>
        //   <li className={style.li}>
        //     <a  className='nav-link' href="http://">Bolsos y mochilas</a>
        //   </li>
        //   <li className={style.li}>
        //     <a className='nav-link' href="http://">Fundas para notebook</a>
        //   </li>
        //   <li className={style.li}>
        //     <a  className='nav-link' href="http://">Portacosmeticos y cartucheras</a>
        //   </li>
        //   <li className={style.li}>
        //     <a className='nav-link' href="http://">Productos para bebé</a>
        //   </li>
        // </ul>