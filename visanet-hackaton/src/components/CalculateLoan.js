import React from 'react';
import './CalculateLoan.css';
import Layout from './layout';

const CalculateLoan = ({amount, setAmount, handleChange, calculateValues, value, setViews }) => {
  return (
   <>
    <Layout />
    <p className="pink ml1 mb-4 mt-5 pink">Calcula tu préstamo</p>
    <div className="contenedor ">
            <section className="cuanto-dinero">
              <span>¿Cuantó dinero necesitas?</span>
              <div className="cuanto-dinero-element mt-3">
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

                <span>S/ {amount}</span>
                <button className="less" type="button" onClick={() => setAmount(amount + 500)}> +
                </button>
              </div>
            </section>

            <section className="cuanto-tiempo">
              <span>¿Cuantó tiempo?</span>
              <div className="mt-3">
              <select className="select" value={value} onChange={handleChange}>
                <option value="6">06 MESES</option>
                <option value="12">12 MESES</option>
                <option value="18">18 MESES</option>
                <option value="24">24 MESES</option>
                <option value="36">36 MESES</option>
              </select>
              </div>
            </section>

            <section className="debo-pagar">
              <span>Debo pagar</span>
              <p className="p-debo-pagar mt-1">S/. {calculateValues(amount)[2]}</p>
              <p className="month">Mensuales</p>              
            </section>

            <section className="resumen-pago">                
                <span>Resumen de pago:</span>

                <div className="resumen-pago-element mt-3">
                  <div className="prestamo">                    
                    <span>Préstamo: {amount}</span>
                  </div>
                  <div className="interes">
                  <span>Interes: {calculateValues(amount)[0]}</span>
                  </div>
                  <div className="total-pagar">
                    <span>Total a pagar:  S/{calculateValues(amount)[1]}</span>
                  </div>                      
                </div>  


            </section>

            <section className="tce">
              <span className="tce1">Préstamo basado en TCEA 12%</span>
            </section>

            <section className="importante">
              <p className="import"> IMPORTANTE</p>
              <p>El préstamo será otorgado por la entidad financiera elegída Juntas y VisaNet no es responsable de la gestión del crédito.</p>
            </section>

            <section className="button-solicitar">
              <button type="button" className="btn-solicitar"  onClick={() => setViews('SecondScreen')}>SOLICITAR</button>
            </section>
        </div>
        <h5 className="text-center h5 mt-5">¿Qué necesito para pedir mi préstamo?</h5>
        <div className="container mb-5">
          <div className="img03 col-md-6"></div> 
          <div className="img04 col-md-6"></div> 
        </div>
        <h5 className="text-center">¿Cómo me entregarán mi dinero?</h5>
        <div className="container mb-5">
          <div className="img01 col-lg-6"></div>
          <div className="img02 col-lg-6"></div>
        </div>
        
  </>
  )
};

export default CalculateLoan;