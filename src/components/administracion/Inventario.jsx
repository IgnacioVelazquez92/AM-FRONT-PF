import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/inventario.module.css'

const Inventario = () => {
  return (
      <>
      <div className='col-12 col-md-10 d-flex justify-content-center '>
         <Form className={`d-flex  ${styles.search} mt-2 `}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className={styles.button}>Search</Button>
          </Form>

      </div>
      </>
    );
};

export default Inventario;