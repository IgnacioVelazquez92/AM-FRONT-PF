import React,{useState} from 'react';
import Productos from '../components/home/productos/Productos';
import Publicidad from '../components/home/publicidad/publicidad';


const Home = () => {
  const [productos,setProductos]=useState([]);
  return (
      <div className='container-fluid p-0'>
        <div className='row m-0'>
            <div className='d-flex align-items-center justify-content-center col-12 col-sm-10 '>
              <Productos productos={productos} setProductos={setProductos}/>
            </div>
            <Publicidad></Publicidad>
        </div>
     </div>
  )
}

export default Home