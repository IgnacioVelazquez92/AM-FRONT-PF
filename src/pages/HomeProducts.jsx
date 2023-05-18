import React,{useState} from 'react';
import Productos from '../components/home/productos/Productos';
import Publicidad from '../components/home/publicidad/Publicidad';


const HomeProducts = () => {
  const [productos,setProductos]=useState([]);
  const [page,setpage] =useState(1);
  const [limit,setLimit]=useState(5);
  return (
  
    <div className='d-flex align-items-start justify-content-between'>
      <Productos productos={productos} setProductos={setProductos}/>
      <Publicidad className="col-1"></Publicidad>
    </div>
            
  )
}

export default HomeProducts