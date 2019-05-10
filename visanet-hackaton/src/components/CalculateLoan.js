import React from 'react';
import { Link } from 'react-router-dom';
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
    <Layout />
    <p className="pink ml-5 mb-4 mt-5">Calcula tu préstamo</p>
    <div className="contenedor">
            <section className="cuanto-dinero">
              <span>¿Cuantó dinero necesitas?</span>
              <div class="cuanto-dinero-element">
                <button className="more"
                  type="button"
                  onClick={() => {
                    if (amount <= 500) {
                      setAmount(500)
                    } else {
                      setAmount(amount - 500)
                    }
                  }}> -
                </button>

                <span>{amount}</span>
                <button className="less" type="button" onClick={() => setAmount(amount + 500)}> +
                </button>
              </div>
            </section>

            <section className="cuanto-tiempo">
              <span>¿Cuantó tiempo?</span>
              <div>
              <select value={value} onChange={handleChange}>
                <option value="12">12 MESES</option>
                <option value="24">24 MESES</option>
                <option value="36">36 MESES</option>
              </select>
              </div>
            </section>

            <section className="debo-pagar">
              <span>Debo pagar</span>
              <p className="p-debo-pagar">S/. {calculateValues(amount)[2]}</p>
              <p>Mensuales</p>              
            </section>

            <section className="resumen-pago">                
                <span>Resumen de pago:</span>

                <div className="resumen-pago-element">
                  <div className="prestamo">                    
                    <span>Préstamo: {amount}</span>
                  </div>
                  <div className="interes">
                  <span>Interes: {calculateValues(amount)[0]}</span>
                  </div>
                  <div className="total-pagar">
                    <span>Total a pagar: S/ {calculateValues(amount)[1]}</span>
                  </div>                      
                </div>  


            </section>

            <section className="tce">
              <span>Préstamo basado en TCEA 12%</span>
            </section>

            <section className="importante">
              <p>IMPORTANTE</p>
              <p>El préstamo será otorgado por la entidad financiera elegída Juntas y VisaNet no es responsable de la gestión del crédito.</p>
            </section>
      <section className="button-solicitar">
      <button type="button" onClick={() => setViews('SecondScreen')}>SOLICITAR</button>
      </section>
    </div> 
  </>
  )
};

export default CalculateLoan;