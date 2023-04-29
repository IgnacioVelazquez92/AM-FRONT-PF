import { Link } from 'react-router-dom';
import { RxDashboard} from "react-icons/rx";
import { MdBorderColor } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
import styles from '../../styles/menu.module.css'


const Menu = () => {
  return (
    <div className={`col-auto col-md-3 col-lg-2 d-flex justify-content-between ${styles.menu} min-vh-100`}>
        <div>
            <ul className='nav nav-pills flex-column mt-3 mt-sm-0'>
                  <li className='nav-item fs-3 my-1 py-2 py-sm-0'>
                    <Link to="/" className={`nav-link ${styles.link} fs-4 col-12`}>
                        <RxDashboard className='fs-2'/>
                        <span className='ms-2 d-none d-md-inline'>Productos</span>
                    </Link>
                  </li>
                  <li className='nav-item fs-3 my-1 py-2 py-sm-0'>  
                    <Link to="/gestionUsuarios" className={`nav-link ${styles.link} fs-4 `}>
                        <BiUserCheck className='fs-2'/>
                        <span className='ms-3 d-none d-md-inline'>Gestion de Usuarios</span>
                    </Link>
                  </li>
                  <li className='nav-item fs-3 my-1 py-2 py-sm-0'>
                    <Link to="/pedidos" className={`nav-link ${styles.link}  fs-4 `}>
                        <MdBorderColor className='fs-2'/>
                        <span className='ms-2 d-none d-md-inline'>Pedidos</span>
                    </Link>
                  </li>
            </ul>
        </div>
    </div>

  );
};

export default Menu;