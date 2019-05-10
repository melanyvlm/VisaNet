import React from 'react';
import './calculateLoan.css';
import Layout from './layout';
import './ViewLoan.css';
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
        <div className="container mt-5">
        <div class="row">
  <div class="col-sm-6">

      <div className="loan-need">
      <section>
        <p className="text-center color-yellow bold mt-3">REQUISITOS</p>
        <ul className="mt-3 ml-3">
        <li> Ser mayor de 18 años</li>
        <li>Recibo de Agua o Luz </li>
        <li>DNI de la solicitante y copia</li>
        </ul>
        </section>
        </div>

  </div>
  <div class="col-sm-6">
    <div className="loan-need">  
     <section>
        <p className="text-center color-yellow bold mt-3">BENEFICIOS</p>
        <ul className="mt-3 ml-3">
        <li> Facilidades en canales de cobro</li>
          <li>Rápido y sin tanto papeleo </li>
          <li>Tus ventas con VISA son el sustento crediticio</li>
        </ul>
        </section>
  </div>
  </div>
</div>
</div>

        <h5 className="text-center mt-5">¿Cómo me entregarán mi dinero?</h5>
        <div className="container mt-5 mb-5">
          <div class="row">
            <div class="col-sm-6 ">
              <div className="img-cont img ml-5"></div>
            </div>
          <div class="col-sm-6">
        <div className="img-money img">

</div>
  </div>
</div>
</div>

  </>
  )
};

export default CalculateLoan;