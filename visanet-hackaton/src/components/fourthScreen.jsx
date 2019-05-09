import React, {useState} from 'react';
const FourthScreen = ({ setViews, amount, calculateValues }) => {
    const [state, setState] = useState(15);
    const banks =  ['Banco de Crédito', 'Interbank', 'Banco de la Nación', 'BBVA Continental', 'Banco Pichincha', 'Mi banco', 'Scotiabank'];
    const handleChange = (e) => {
        setState(e.target.value)
    };    
    
    const checkbox =()=>{
        const box1= document.getElementById("check");
        const box2= document.getElementById("checking");

if(box1.checked && box2.checked){
    alert("cool");
}else{
    alert("not cool");
}
    };
    return (
            <div>
                <h2>YA FALTA POCO PARA RECIBIR TU PRÉSTAMO</h2>
                <span>Cuota {calculateValues(amount)[2]}</span>
                <div>Aqui va la cantidad mensuales</div>
                <span>Resumen del préstamo</span>
                <div>
                    <div>
                      <div>Préstamo</div>
                      <div>Intereses</div>
                      <div>Total a pagar</div>
                    </div>
                    <div>
                      <div>{amount}</div>
                      <div>{calculateValues(amount)[0]}</div>
                      <div> {calculateValues(amount)[1]}</div>
                    </div>
                </div>
                <form>
                <span>DATOS</span>
                <span>Ingresa el Nº de cuenta donde se depositará tu préstamo</span>
                <input pattern ="^[0-9]+$" maxLength={state}></input>
                <span>Banco</span>
                <select onChange={handleChange}>
                    <option value="15">{banks[0]}</option>
                    <option value="17">{banks[1]}</option>
                    <option value="14">{banks[2]}</option>
                    <option value="18">{banks[3]}</option>
                    <option value="15">{banks[4]}</option>
                    <option value="18">{banks[5]}</option>
                    <option value="20">{banks[6]}</option>
                </select>
                <input className="check" id="check" type="checkbox"/><span>Acepto<span>términos y condiciones</span></span>
                <input className="check" id="checking" type="checkbox"/><span>Acepto<span>compartir los datos de ventas de Visanet con la entidad financiera</span></span>
                <button type="submit" onClick={e=>checkbox()}>RECIBIR MI PRÉSTAMO</button>
                </form>
                <span>ATENCIÓN AL CLIENTE:</span>
                <span>WHATSAPP</span>
                <div>
                <div alt="whatsapp">logo whatsapp</div>
                <span>978927345</span>
                </div>
                <span>CALL CENTER</span>
                <div>
                <div alt="callCenter">logo whatsapp</div>
                <span>015673888</span>
                </div>
            </div>
)
};
export default FourthScreen;