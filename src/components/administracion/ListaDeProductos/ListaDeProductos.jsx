import Table from 'react-bootstrap/Table';
import styles from './listaDeProductos.module.css';
import DestacarProducto from '../destacarProducto/DestacarProducto';
import EditarProducto from '../editarProductos/EditarProducto';
import { endpoints } from '../../../helpers/endpointProductos';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import{AiOutlineDelete} from 'react-icons/ai'
import { Alert } from 'bootstrap';

const ListaDeProductos = ({productos,setProductos}) => {
  const [productoAEditar, setProductoAEditar] = useState(null);
    
  useEffect(()=>{
      getProducts();
    },[]);
    
    const URL_PROD = 'http://localhost:8080/products';
    const getProducts = async () =>{
      try{
        const response = await axios(`${URL_PROD}${endpoints.getAllProducts}`)
        setProductos(response.data);  
        }catch(error){
        alert('algo ha salido mal.')
    }
    }
// funcion para eliminar un producto

      const eliminar = async (id) =>{
        try{
          const response = await axios.delete(`${URL_PROD}${endpoints.deleteProducts}${id}`);
          if(response.statusText === 'OK'){
            let productosActualizados = productos.filter(producto=> producto._id !==id);
            setProductos(productosActualizados);
          }
           }catch(error){
          alert('algo ha salido mal.')
      }
    }


    return(
      <div className='mt-3 mb-5 d-flex justify-content-center align-items-center w-100'>
        {
          productos.length >= 1 ? (
          <Table responsive className={`${styles.table} table-bordered`}>
                <thead className='text-center'>
                  <tr>
                    <th>Nombre</th>
                    <th>imagen</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                    <th>Descripcion</th>
                    <th>Publicado</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((product,index) =>{
                     return(<tr key={`${product._id}-${index}`}>
                    <td> {product.nombre} </td>
                    <td><img src={product.imagenes} className={styles.imagen} alt="imagen"  /></td>
                    <td> {product.categoria} </td>
                    <td>{product.precio}</td>
                    <td className={styles.descripcion}> {product.descripcion}</td>
                    <td><input type="checkbox"/></td>
                    <td>
                      <div className='d-flex justify-content-center align-items-center'>
                      
                      <EditarProducto   producto={product}
                      setProductoAEditar={setProductoAEditar} setProductos={setProductos}/>
                      
                      <Button className={`${styles.Button} me-2 border-0`}onClick={()=>{
                        const swalWithBootstrapButtons = Swal.mixin({
                          customClass: {
                            confirmButton: 'btn btn-success ms-2',
                            cancelButton: 'btn btn-danger'
                          },
                          buttonsStyling: false
                        })
                        
                        swalWithBootstrapButtons.fire({
                          title: `Estas seguro que quiere eliminar ${product.nombre}?`,
                          text: "no podras recuperar los datos",
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonText: 'Si, eliminar!',
                          cancelButtonText: 'No, cancelar!',
                          reverseButtons: true
                        }).then((result) => {
                          if (result.isConfirmed) {
                            eliminar(product._id)
                            swalWithBootstrapButtons.fire(
                              'Eliminado!',
                              `${product.nombre} fue eliminado`,
                              'success'
                            )
                          } else if (
                            /* Read more about handling dismissals below */
                            result.dismiss === Swal.DismissReason.cancel
                          ) {
                            swalWithBootstrapButtons.fire(
                              'Cancelado'
                            )
                          }
                        })
                        
                       }}><AiOutlineDelete className={`${styles.icono} fs-4`}/>
                      </Button>
                      <DestacarProducto></DestacarProducto>
                      </div>
                    </td>
                     </tr>)
                  })}
                </tbody>
          </Table>
          ):(
              <p>NO HAY DATOS PARA MOSTRAR</p>
          )
        }
      </div>
    );
  }
  export default ListaDeProductos;