import React from 'react';
import './calculateLoan.css';
import Layout from './layout';

const CalculateLoan = ({amount, setAmount, handleChange, calculateValues, value, setViews }) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/#" >MUJER EMPRENDEDORA</a>      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/#">PIDE PRÉSTAMO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">RED DE CONTACTOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">HAZ CRECER TU NEGOCIO</a>
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
    <Layout />
    <p className="pink ml-5 mb-4 mt-5">Calcula tu préstamo</p>
    <div>
      <span className="ml-5">¿Cuantó dinero necesitas?</span>
      <button 
        type="button" 
        onClick={() => {
          if(amount <= 500 ) {
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
      <p>Debo pagar: {calculateValues(amount)[2]} Mensuales</p>
      <div>
      <p>Interes: {calculateValues(amount)[0]}</p>
      <p>Debo pagar: S/ {calculateValues(amount)[1]} </p>
      <p>Cuota: {calculateValues(amount)[2]}</p>
      </div>
      <span>Prestamo basado en TCEA 12%</span>
      <div>
        <h4>IMPORTANTE</h4>
        <div>El préstamo será otorgado por la entidad financiera elegída Juntas y VisaNet no es responsable de la gestión del crédito.
        </div>
      </div>
      <button type="button" onClick={() => setViews('SecondScreen')}>SOLICITAR</button>
    </div> 
  </>
  )
};

export default CalculateLoan;