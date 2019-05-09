import React from 'react';
 
const ViewLoans = ({ amount, setAmount, handleChange, calculateValues, value, setViews }) => {
  return (
    <div>
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
      <select value={value} onChange={handleChange}>
        <option value="12">12 MESES</option>
        <option value="24">24 MESES</option>
        <option value="36">36 MESES</option>
      </select>
      <span>Tienes un prestamo de: S/ {amount}</span>
      <span>TCEA: 12%</span>
      <p>Intereses {calculateValues(amount)[0]} a {value} meses</p>
      <p>Monto total: S/ {calculateValues(amount)[1]}</p>
      <p>¿Cuánto voy a pagar? {calculateValues(amount)[2]} mensuales</p>
      <button type="button" onClick={() => setViews('FourthScreen')}>PIDE TU PRÉSTAMO</button>
        
    </div>
)
};

export default ViewLoans;