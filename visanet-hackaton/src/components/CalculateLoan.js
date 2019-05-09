import React from 'react';

const CalculateLoan = ({amount, setAmount, handleChange, calculateValues, value, setViews }) => {
  return (
    <div>
      <h2>Hola emprendedora</h2>
      <p>Te otorgamos un préstamo para que puedas seguir creciendo</p>
      <div>
        <span style={{color: 'red'}}>1</span>
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
        <p>Interes: {calculateValues(amount)[0]}</p>
        <p>Monto a pagar: S/ {calculateValues(amount)[1]}</p>
        <p>Cuota: {calculateValues(amount)[2]}</p>
        <span>Prestamo basado en TCEA 12%</span>
        <div>
          <h4>IMPORTANTE</h4>
          <div>El préstamo será otorgado por la entidad financiera elegída Juntas y VisaNet no es responsable de la gestión del crédito.
          </div>
        </div>
        <button type="button" onClick={() => setViews('SecondScreen')}>SOLICITAR</button>
      </div>
    </div> 
  )
};

export default CalculateLoan;