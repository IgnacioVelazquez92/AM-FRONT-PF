import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';
import ModalLogin from "./Modal";
import SearchProducts from "./SearchProducts";
import OffCanvasCarrito from "./OffCanvasCarrito";
import Favoritos from "./Favoritos";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid nav-contenedor ">
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link  text-dark" to="/ayuda">
                <i className="bi bi-chat-square-text-fill h3"></i>
                <span>Ayuda</span>
              </Link>
            </li>
            <li className="nav-item">
              <ModalLogin />
            </li>
            <li className="nav-item mx-2">
              <Favoritos />
            </li>

            <li className="nav-item">
              <OffCanvasCarrito />
            </li>

          </ul>
        </div>
      </div>
  </nav>
  );
}

export default NavBar;