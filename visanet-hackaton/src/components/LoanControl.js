import React, { useState } from 'react';

const LoanControl = () => {
    const [amount, setAmount] = useState(1000);
    const [value, setValue] = useState('12');
    const [button, setButton] = useState(false);


    const calculateValues = (values) => {
        const interest = values * 0.12;
        const totalPaid = values + interest;
        const cuote = totalPaid/Number(value);
        return [interest.toFixed(2), totalPaid.toFixed(2), cuote.toFixed(2)];
    };

    const handleChange = (e) => {
        setValue(e.target.value)
    };

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
                   <div>El préstamo será otorgado por la entidad financiera elegída Juntas y VisaNet
                       no es responsable de la gestión del crédito.
                   </div>
               </div>
               <button type="button">SOLICITAR</button>
           </div>
       </div> 
    )
};
export default LoanControl;