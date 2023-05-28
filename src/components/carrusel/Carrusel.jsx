import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ImagenDestacado from '../administracion/destacarProducto/ImagenDestacado';
import ("../../styles/slider.css")


const Carrusel=()=> {
  return (
    <div className='container-fluid position-relative mx-0 px-0'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-none d-lg-block w-100"
            src="/assets/img-slider/C1.png"
            alt="1 slide"
          />
          <img
            className="d-block d-lg-none w-100"
            src="/assets/img-slider/R2.png"
            alt="1 slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-none d-lg-block w-100"
            src="/assets/img-slider/C2.png"
            alt="2 slide"
          />
          <img
            className="d-block d-lg-none w-100"
            src="/assets/img-slider/R1.png"
            alt="2 slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-none d-lg-block w-100"
            src="/assets/img-slider/C3.png"
            alt="3 slide"
          />
          <img
            className="d-block d-lg-none w-100"
            src="/assets/img-slider/R3.png"
            alt="3 slide"
          />
        </Carousel.Item>
      </Carousel>
      <ImagenDestacado />
    </div>

  );
}

export default Carrusel






