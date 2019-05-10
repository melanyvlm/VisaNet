import React from 'react';
import './CalculateLoan.css';
import Layout from './layout';

const CalculateLoan = ({amount, setAmount, handleChange, calculateValues, value, setViews }) => {
  return (
   <>
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