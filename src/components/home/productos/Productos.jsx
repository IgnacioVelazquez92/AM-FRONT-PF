import React,{useEffect} from 'react';
import {endpoints} from '../../endpoints';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import{BsCartPlusFill} from 'react-icons/bs';
import{AiFillHeart} from 'react-icons/ai'
import styles from './productos.module.css'

const MostrarProductos = ({productos,setProductos}) => {
    useEffect(()=>{
        getProducts();
    },[]);

    const URL_PROD = 'http://localhost:8080/products';
    const getProducts = async () =>{
        try {
            const response = await axios(`${URL_PROD}${endpoints.getAllProducts}`)
            setProductos(response.data);  
        } catch (error) {
            alert('algo ha salido mal.');
        }
    }
  return (
    
    <div className='d-flex justify-content-center align-items-center mx-1 my-5 flex-wrap'>
            {productos.length >= 1 ? (
                productos.map((product) => {
                    return (
                        <div className='col-3 mx-1 my-2 d-flex align-self-stretch '>
                            <Card className={`${styles.card}`}>
                                <div className='d-flex flex-column justify-content-between'>
                                <Card.Title className=' text-center my-2'>{product.nombre}</Card.Title>
                                </div>
                                <div>
                                <Card.Body className='w-100 d-flex flex-column align-items-center justify-content-between p-0'>
                                <Card.Img src={product.imagenes} className={styles.img + ' p-2'}/>
                                    <div className='d-flex justify-content-around align-items-center w-100'>
                                        <strong className='fs-5'>
                                            $ {product.precio}
                                        </strong>
                                        <Button className={styles.Button}><BsCartPlusFill className='fs-5'/></Button>
                                    </div>
                                    <hr className={styles.linea}/>
                                    <Button className={styles.Button + ' p-2 mb-3'}><AiFillHeart className='me-2'/> añadir a favoritos</Button>
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
  )
}

export default MostrarProductos