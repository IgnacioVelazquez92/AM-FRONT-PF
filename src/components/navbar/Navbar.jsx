import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';
import ModalLogin from "./Modal";
import SearchProducts from "./SearchProducts";
import OffCanvasCarrito from "./OffCanvasCarrito";
import Favoritos from "./Favoritos";
import User from "./User";
import UserContext from '../../../context/UserContext';
import AdminUser from "./AdminUser";
import AdminProducts from "./AdminProducts";

function NavBar() {
const {user} =useContext(UserContext)


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid nav-contenedor">
        <div className="mx-0 px-0 navbar-logo col-2 col-lg-3">
          <Link className="navbar-logo" to="/" >
            <img src="../../../src/assets/Marca_de_agua_2.png" alt="Logo" className="img-fluid bg-navbar-logo"/>
          </Link>
        </div>

        <div className="col-5 col-lg-7 px-lg-4">
          <SearchProducts/>
        </div>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-center text-dark" to="/ayuda">
                  <i className="bi bi-chat-square-text-fill h3"></i>
                  <span>Ayuda</span>
                </Link>
              </li>
              <li className="nav-item mx-2 text-center">
                {
                  user && user.name ? (<User />) :(<ModalLogin />)
                }
                
              </li>
              <li  className="nav-item mx-2 text-decoration-none">
                {
                  user && user.isAdmin? (<AdminUser />) :(<Favoritos />)
                }
              </li>

              <li  className="nav-item text-decoration-none">
                {
                  user && user.isAdmin? (<AdminProducts />) :(<OffCanvasCarrito />)
                }
              </li>

            </ul>
          </div>
        </div>
      </div>
  </nav>
  );
}

export default NavBar;