import React from 'react';
import { Link } from 'react-router-dom';
import '../components/sequenceController.css'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/#" >MUJER EMPRENDEDORA</a>      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="ml collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/prestamo">PIDE PRÉSTAMO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactos">RED DE CONTACTOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/negocio">HAZ CRECER TU NEGOCIO</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">INICIAR SESION</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">REGÍSTRATE</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
    )
}
export default Header;