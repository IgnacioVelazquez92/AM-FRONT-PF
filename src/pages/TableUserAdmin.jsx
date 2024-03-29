import React, {useState , useEffect , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiClient } from "../components/api/services";
import ModalAdminUser from "../components/navbar/ModalAdminUser";
import UserContext from "../../context/UserContext.jsx";
import Loader from '../components/loader/Loader';

const TableUserAdmin =  () => {
  const navigate = useNavigate()
  const [usuarios, setUsuarios]=useState([])
  const apiClient = new ApiClient();
  const {user} = useContext(UserContext);

  useEffect(() => {
    if (!user || (user && !user.isAdmin)) {
      navigate('/');
    }
    else {
      searchAllUser();
    }
  }, [user]);

  const searchAllUser = async() =>{
    try {
      const response = await apiClient.getAllUsers();
      console.log(response.data)
      setUsuarios(response.data)
      console.log(usuarios)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center my-3'>
        <span className='h1'>Actualizar Usuarios</span>
        <button className="btn btn-success ms-2" onClick={searchAllUser} >
        <i className="bi bi-arrow-repeat h2 text-light"></i>
        </button>
      </div>

      {usuarios.length > 0 ? (
        <div className='table-responsive'>
          <table className="table table-sm table-hover table-responsive">
            <thead>
              <tr>
                <th scope="col" className='text-center'>ID</th>
                <th scope="col" className='text-center'>Nombre y Apellido</th>
                <th scope="col" className='text-center'>Mail</th>
                <th scope="col" className='text-center'>Celular</th>
                <th scope="col" className='text-center'>Permisos</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario._id}>
                  <th scope="row" className='h6 fst-italic text-center'>{usuario._id}</th>
                  <td className='text-center'>
                    {usuario.name} {usuario.lastName}
                  </td>
                  <td className='text-center'>{usuario.email}</td>

                  <td className='text-center'>
                    {usuario.cellphone}
                  </td>

                  <td className='text-center'>
                    <ModalAdminUser usuario={usuario} />
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      ) : (
        <Loader />
      )}
    </>
  )
}
export default TableUserAdmin