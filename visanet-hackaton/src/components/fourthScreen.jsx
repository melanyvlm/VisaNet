import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../components/fourthScreen.css';
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
                    <div className="monthText number">{/*calculateValues(amount)[2]*/}S/. 377.77</div>
                    <span className="monthText">mensuales</span>
                  </div>
                  <div className="col margin-cuadrum">
                    <p>Préstamo</p>
                    <div className="num">{/*amount*/10000}</div>
                  </div>
                  <div className="shortcol">+</div>
                  <div className="col">
                  <p>Intereses</p>
                  <div className="num">{/*calculateValues(amount)[0]*/}1,200</div>
                  </div>
                  <div className="shortcol">=</div>
                  <div className="col margin2">
                  <p>Total a pagar</p>
                  <div className="num2"> {/*calculateValues(amount)[1]*/}11,200</div>
                  </div>
                </div>
              </div>
                </div>
                <form>
                <p>DATOS</p>
                <p>Ingresa el Nº de cuenta donde se depositará tu préstamo</p>
                <input pattern ="^[0-9]+$" required="required" maxLength={state}></input>
                <p>Banco</p>
                <select onChange={handleChange}>
                    <option value="15">{banks[0]}</option>
                    <option value="17">{banks[1]}</option>
                    <option value="14">{banks[2]}</option>
                    <option value="18">{banks[3]}</option>
                    <option value="15">{banks[4]}</option>
                    <option value="18">{banks[5]}</option>
                    <option value="20">{banks[6]}</option>
                </select>
                <div>
                 <input id="check" type="checkbox"/>
                 <label for="check">Acepto<span> términos y condiciones</span></label>
                </div>         
                <div>
                 <input id="checking" type="checkbox"/>
                 <label for="checking">Acepto<span>compartir los datos de ventas de Visanet con la entidad financiera</span></label>
                </div>                
                <button type="submit" onClick={e=>checkbox()}>RECIBIR MI PRÉSTAMO</button>
                </form>
                <p>ATENCIÓN AL CLIENTE:</p>
                <div className="container ">
                <div className="row">
                  <div className="col-3 align-self-start">
                    <p className="title-cuadrum">WHATSAPP</p>
                  </div>
                  <div className="col-5 align-self-start">
                    <p className="title-cuadrum">CALL CENTER</p>
                  </div>
                </div>
                <div className="row">
                  <div>
                  <i class="fab fa-whatsapp"></i>
                  <span>978 927 345</span>
                  </div>
                  <div className="call">
                  <i class="fas fa-headset"></i>
                    <span>01 567 3888</span>
                  </div>
                </div>
              </div>
            </div>
)
};
export default FourthScreen;