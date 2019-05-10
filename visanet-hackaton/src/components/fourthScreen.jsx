import React, {useState} from 'react';
import '../components/fourthScreen.css';
const FourthScreen = ({ setViews, amount, calculateValues }) => {
    const [state, setState] = useState(15);
    const banks =  ['Banco de Crédito', 'Interbank', 'Banco de la Nación', 'BBVA Continental', 'Banco Pichincha', 'Mi banco', 'Scotiabank'];
    const handleChange = (e) => {
        setState(e.target.value)
    };    
    
    const checkbox =()=>{
      setViews('FifthScreen')
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
  <div className="container">
    <h3>¡YA FALTA POCO PARA RECIBIR TU PRÉSTAMO!</h3>
    <div className="container ">
      <div className="row">
        <div className="col-3 align-self-start">
          <p className="title-cuadrum">Cuota</p>
        </div>
        <div className="col-5 align-self-start">
          <p className="title-cuadrum">Resumen del préstamo</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-2 box1">
          <div className="monthText number">{/*calculateValues(amount)[2]*/}1,200</div>
          <span className="monthText">mensuales</span>
        </div>
        <div className="col margin-cuadrum">
          <p>Préstamo</p>
          <div className="num">{/*amount*/1000}</div>
        </div>
        <div className="shortcol">+</div>
        <div className="col">
          <p>Intereses</p>
          <div className="num">{/*calculateValues(amount)[0]*/1000}</div>
        </div>
        <div className="shortcol">=</div>
        <div className="col margin2">
          <p>Total a pagar</p>
          <div className="num2"> {/*calculateValues(amount)[1]*/1000}</div>
        </div>
      </div>
    </div>
  </div>
                <form>
                  <div className="container">
                <p className="title-inputs type1">DATOS</p>
                <p className="description">Ingresa el Nº de cuenta donde se depositará tu préstamo</p>
                <input className="count" pattern ="^[0-9]+$" required="required" maxLength={state}></input>
                <p className="title-inputs type2">BANCO</p>
                <div className="select-box">
                <select className="count" onChange={handleChange}>
                    <option value="15">{banks[0]}</option>
                    <option value="17">{banks[1]}</option>
                    <option value="14">{banks[2]}</option>
                    <option value="18">{banks[3]}</option>
                    <option value="15">{banks[4]}</option>
                    <option value="18">{banks[5]}</option>
                    <option value="20">{banks[6]}</option>
                </select>
                </div>
                <div className="firstCheck">
                 <input id="check" type="checkbox"/>
                 <label for="check">Acepto <p className="under"> términos y condiciones</p></label>
                </div>         
                <div className="secondCheck">
                 <input id="checking" type="checkbox"/>
                 <label for="checking">Acepto <p className="under">compartir los datos de ventas de Visanet con la entidad financiera</p></label>
                </div>                
                <button type="submit" onClick={e=>checkbox()}>RECIBIR MI PRÉSTAMO</button>
                </div>
                </form>
                <div className="container">
                <p className="row justify-content-start title-inputs main">ATENCIÓN AL CLIENTE:</p>
                <div className="container ">
                <div className="row">
                  <div className="col-3 align-self-start">
                    <p className="title-cuadrum">WHATSAPP</p>
                    <i class="fab fa-whatsapp"></i>
<span>978 927 345</span>
                  </div>
                  <div className="col-5 align-self-start">
                    <p className="title-cuadrum">CALL CENTER</p>
                    <i class="fas fa-headset"></i>
                    <span>01 567 3888</span>
                  </div>
                </div>
                </div>
                </div>
            </div>
)
};
export default FourthScreen;