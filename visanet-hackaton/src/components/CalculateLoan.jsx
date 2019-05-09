import React from 'react';
import './CalculateLoan.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

const CalculateLoan = ({ amount, setAmount, handleChange, calculateValues, value, setViews }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className ="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      ,
    <div className="">
        <h2 className="h2">Hola emprendedora</h2>
        <p className="p">Te otorgamos un préstamo para que puedas seguir creciendo</p>
        <div>
          <span style={{ color: 'red' }}>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <div>
          <span>¿Cuantó dinero necesitas?</span>
          <button
            type="button"
            onClick={() => {
              if (amount <= 500) {
                setAmount(500)
              } else {
                setAmount(amount - 500)
              }
            }}> - </button>
          <span>{amount}</span>
          <button type="button" onClick={() => setAmount(amount + 500)}> + </button>
          <span>¿Cuantó tiempo?</span>
          <select value={value} onChange={handleChange}>
            <option value="12">12 MESES</option>
            <option value="24">24 MESES</option>
            <option value="36">36 MESES</option>
          </select>
          <p>Interes: {calculateValues(amount)[0]}</p>
          <p>Monto a pagar: S/ {calculateValues(amount)[1]}</p>
          <p>Cuota: {calculateValues(amount)[2]}</p>
          <span>Prestamo basado en TCEA 12%</span>
          <div>
            <h4>IMPORTANTE</h4>
            <div>El préstamo será otorgado por la entidad financiera elegída Juntas y VisaNet no es responsable de la gestión del crédito.
          </div>
          </div>
          <button type="button" onClick={() => setViews('viewLoans')}>SOLICITAR</button>
        </div>
      </div>

    </>
  )
};

export default CalculateLoan;