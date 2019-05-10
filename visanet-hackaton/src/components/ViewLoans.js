import React from 'react';
 import '../App.css';
 import './ViewLoan.css';
const ViewLoans = ({ amount, setAmount, handleChange, calculateValues, value, setViews }) => {
  return (
    <div className="">
     <div class="container col-8">
        <h3 class="color-yellow ">¡FELICITACIONES ANITA!</h3>
        <p class="bold">TE OFRECEMOS LOS MEJORES PRÉSTAMOS PARA TI</p>
    </div>
    <div class="container col-8 padd">
        <div class="card ">
            <div class="card-header">
                <p class="bold">FILTRO</p>
            </div>
            <div class="card-body">

                <div class="container">
                <div class="row"> 
<div class="col-4">
<p class="light-gray bold ml-5">BÚSQUEDA</p>
<input type="text" class="light-gray bold ml-5"  placeholder="ENTIDAD"></input>
</div>
<div class="col-4">
        <p class="light-gray bold ml-5">MONTO</p>
        <div class="ml-5">
      <button class="amount-btn bold"
          type="button" 
          onClick={() => {
            if(amount <= 500 ) {
              setAmount(500)
            } else {
              setAmount(amount - 500)
            }
        }}> - </button>
      <span className>{amount}</span>
      <button class="amount-btn bold" type="button" onClick={() => setAmount(amount + 500)}> + </button>
      </div>
        </div>
        <div class="col-4">
                <p class="light-gray bold ml-5">TIEMPO</p>
      <select class ="ml-5" value={value} onChange={handleChange}>
        <option value="12">12 MESES</option>
        <option value="24">24 MESES</option>
        <option value="36">36 MESES</option>
      </select>
      </div>
                </div>
              
            </div>
        </div>
          </div>
        
    </div>
    <div class="container col-8 mb">
    <div class="companies">

              <div class="card-body">
                <div class="container">
                <div class="row"> 
                <div class="col-2">
     </div>
     <div class="col-2">
            <p class="font-si"> TIENES UN PRÉSTAMO DE:</p>
                 </div>
                 <div class="col-2">
                        <p>¿ CUÁNTO VOY A PAGAR?</p>
                             </div>
                             <div class="col-2">
                                    <p>INTERESES</p>
                                         </div>
                                         <div class="col-2">
                                                <p>MONTO TOTAL</p>
                                               
                                                     </div>
                                                     <div class="col-2">
                                                                 </div>      
            
                </div>
              
            </div>
        </div>
        <div class="card-body">
                <div class="container">
                <div class="row"> 
                <div class="col-2">
<p class="bold "> PRESTAMYPE</p>
     </div>
     <div class="col-2">
            <p class="font-si"> S/ {amount}</p>
            <span>TCEA: 12%</span>
                 </div>
                 <div class="col-2">
                  <p>{calculateValues(amount)[2]} mensuales</p>   
                             </div>
                             <div class="col-2">
                                    <p>{calculateValues(amount)[0]} </p>
                                    <p> a {value} meses</p>
                                         </div>
                                         <div class="col-2">
                                                <p>S/ {calculateValues(amount)[1]}</p>
                                               
                                                     </div>
                                                     <div class="col-2">
                                                     <button type="button" onClick={() => setViews('FourthScreen')}>PIDE TU PRÉSTAMO</button>
                                                                 </div>      
            
                </div>
              
            </div>
        </div>
        <div class="card-body">
                <div class="container">
                <div class="row"> 
                <div class="col-2">
<p class="bold"> BCP </p>
     </div>
     <div class="col-2">
            <p class="font-si"> S/ {amount}</p>
            <span>TCEA: 12%</span>
                 </div>
                 <div class="col-2">
                  <p>{calculateValues(amount)[2]} mensuales</p>   
                             </div>
                             <div class="col-2">
                                    <p>{calculateValues(amount)[0]} </p>
                                    <p> a {value} meses</p>
                                         </div>
                                         <div class="col-2">
                                                <p>S/ {calculateValues(amount)[1]}</p>
                                               
                                                     </div>
                                                     <div class="col-2">
                                                     <button type="button" onClick={() => setViews('FourthScreen')}>PIDE TU PRÉSTAMO</button>
                                                                 </div>      
            
                </div>
              
            </div>
        </div>
        <div class="card-body">
                <div class="container">
                <div class="row"> 
                <div class="col-2">
<p class="bold"> INTERBANK </p>
     </div>
     <div class="col-2">
            <p class="font-si"> S/ {amount}</p>
            <span>TCEA: 12%</span>
                 </div>
                 <div class="col-2">
                  <p>{calculateValues(amount)[2]} mensuales</p>   
                             </div>
                             <div class="col-2">
                                    <p>{calculateValues(amount)[0]} </p>
                                    <p> a {value} meses</p>
                                         </div>
                                         <div class="col-2">
                                                <p>S/ {calculateValues(amount)[1]}</p>
                                               
                                                     </div>
                                                     <div class="col-2">
                                                     <button type="button" onClick={() => setViews('FourthScreen')}>PIDE TU PRÉSTAMO</button>
                                                                 </div>      
            
                </div>
              
            </div>
        </div>
        <div class="card-body">
                <div class="container">
                <div class="row"> 
                <div class="col-2">
<p class="bold"> BANCO DE LA NACION</p>
     </div>
     <div class="col-2">
            <p class="font-si"> S/ {amount}</p>
            <span>TCEA: 12%</span>
                 </div>
                 <div class="col-2">
                  <p>{calculateValues(amount)[2]} mensuales</p>   
                             </div>
                             <div class="col-2">
                                    <p>{calculateValues(amount)[0]} </p>
                                    <p> a {value} meses</p>
                                         </div>
                                         <div class="col-2">
                                                <p>S/ {calculateValues(amount)[1]}</p>
                                               
                                                     </div>
                                                     <div class="col-2">
                                                     <button type="button" onClick={() => setViews('FourthScreen')}>PIDE TU PRÉSTAMO</button>
                                                                 </div>      
            
                </div>
              
            </div>
        </div>
        <div class="card-body">
                <div class="container">
                <div class="row"> 
                <div class="col-2">
<p class="bold"> BBVA </p>
     </div>
     <div class="col-2">
            <p class="font-si"> S/ {amount}</p>
            <span>TCEA: 12%</span>
                 </div>
                 <div class="col-2">
                  <p>{calculateValues(amount)[2]} mensuales</p>   
                             </div>
                             <div class="col-2">
                                    <p>{calculateValues(amount)[0]} </p>
                                    <p> a {value} meses</p>
                                         </div>
                                         <div class="col-2">
                                                <p>S/ {calculateValues(amount)[1]}</p>
                                               
                                                     </div>
                                                     <div class="col-2">
                                                     <button type="button" onClick={() => setViews('FourthScreen')}>PIDE TU PRÉSTAMO</button>
                                                                 </div>      
            
                </div>
              
            </div>
        </div>
        <div class="card-body">
                <div class="container">
                <div class="row"> 
                <div class="col-2">
<p class="bold"> PICHINCHA</p>
     </div>
     <div class="col-2">
            <p class="font-si"> S/ {amount}</p>
            <span>TCEA: 12%</span>
                 </div>
                 <div class="col-2">
                  <p>{calculateValues(amount)[2]} mensuales</p>   
                             </div>
                             <div class="col-2">
                                    <p>{calculateValues(amount)[0]} </p>
                                    <p> a {value} meses</p>
                                         </div>
                                         <div class="col-2">
                                                <p>S/ {calculateValues(amount)[1]}</p>
                                               
                                                     </div>
                                                     <div class="col-2">
                                                     <button type="button" onClick={() => setViews('FourthScreen')}>PIDE TU PRÉSTAMO</button>
                                                                 </div>      
            
                </div>
              
            </div>
        </div>
{/*         
      <span>Tienes un prestamo de: S/ {amount}</span>
      <span>TCEA: 12%</span>
      <p>Intereses {calculateValues(amount)[0]} a {value} meses</p>
      <p>Monto total: S/ {calculateValues(amount)[1]}</p>
      <p>¿Cuánto voy a pagar? {calculateValues(amount)[2]} mensuales</p>
      <button type="button" onClick={() => setViews('FourthScreen')}>PIDE TU PRÉSTAMO</button>
         */}
    </div>
    </div>
    </div>

)
};

export default ViewLoans;