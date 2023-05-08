import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ("../../styles/slider.css")


const Carrusel=()=> {
  return (
    <div className='container-fluid position-relative mx-0 px-0'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-none d-lg-block w-100"
            src="../../../src/assets/img-slider/C1.png"
            alt="First slide"
          />
          <img
            className="d-block d-lg-none w-100"
            src="../../../src/assets/img-slider/R2.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-none d-lg-block w-100"
            src="../../../src/assets/img-slider/C2.png"
            alt="First slide"
          />
          <img
            className="d-block d-lg-none w-100"
            src="../../../src/assets/img-slider/R1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-none d-lg-block w-100"
            src="../../../src/assets/img-slider/C3.png"
            alt="First slide"
          />
          <img
            className="d-block d-lg-none w-100"
            src="../../../src/assets/img-slider/R3.png"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <img src="../../../src/assets/Marca_de_agua_2.png" alt="producto-destacado" className='img-fluid destacado'/>
    </div>

  );
}

export default Carrusel






