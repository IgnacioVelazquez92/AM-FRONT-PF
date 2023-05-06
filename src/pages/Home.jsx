import React,{useState} from 'react';
import Productos from '../components/home/productos/Productos';
import Categoria from '../components/home/categorias/Categorias';
// import Publicidad from '../components/home/publicidad/Publicidad';

const Home = () => {
  const [productos,setProductos]=useState([]);
  return (
      <div className='container-fluid'>
        <div className='row'>
            <Categoria></Categoria>
            <div className='d-flex justify-content-around col-8'>
              <Productos productos={productos} setProductos={setProductos}/>
            </div>
            {/* <Publicidad></Publicidad> */}
        </div>
     </div>
  )
}

export default Home