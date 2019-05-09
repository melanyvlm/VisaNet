import React from 'react';
import './secondScreen.css'
const SecondScreen = ({setViews}) => {
        return (
            <form onSubmit={() => setViews('viewLoans')} className="container">
              <div className="row justify-content-center mainTitle">INGRESA TUS DATOS</div>
              <div className="row justify-content-center">
                <div className="hey">
                  <p className="title-input">NOMBRE</p>
                  <input className="yellow-underline" required="required" type="text" pattern ="^[A-Z]+([a-zA-Z]*)" title="Debe ingresar solo letras y la primera letra debe ser mayúscula"></input>
                </div>
                <div className="hey">
                  <p className="title-input">APELLIDO</p>
                  <input className="yellow-underline" required="required" type="text" pattern ="^[A-Z]+([a-zA-Z]*)" title="Debe ingresar solo letras y la primera letra debe ser mayúscula"></input>
                </div>
              </div>
              <div className="row justify-content-center">
                <div class="hey">
                <p className="title-input">EMAIL</p>
                <input className="yellow-underline" required="required" type="email" pattern ="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" title="Debe ingresar un correo electrónico válido"></input>
                </div>
                <div class="hey">
                <p className="title-input">DNI</p>
                <input className="yellow-underline" required="required" type="text" pattern="^[0-9]+$" maxLength="8" title="Debe ingresar solo números"></input>
                </div>
              </div>
              <div className="row justify-content-center">
                <div class="hey">
                <p className="title-input">CELULAR</p>
                <input className="yellow-underline" required="required" type="text" pattern="^[0-9]+$" maxLength="9" title="Debe ingresar solo números"></input>
                </div>
                <div class="hey">
                <p className="title-input">RUC</p>
                <input className="yellow-underline" required="required" type="text" pattern="^[0-9]+$" maxLength="10" title="Debe ingresar solo números"></input>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="hey">
                <p className="title-input">CÓDIGO DEL CLIENTE VISANET</p>
                <input className="yellow-underline" type="text" pattern="^[0-9]+$" maxLength="9" title="Debe ingresar solo números"></input>
                </div>
                <div className="hey">
                <p className="title-input">RUBRO DEL NEGOCIO</p>
                <input className="yellow-underline" required="required" type="text"></input>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="hey">
                <p className="title-input">CONTRASEÑA</p>
                <input className="yellow-underline" required="required" type="password" pattern="^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,15}$" minLength="6" maxLength="15" title="Debe contener al menos una letra mayúscula, un número y debe ser mayor de 6 dígitos"></input>
                </div>
                <div className="hey">
                <input type="checkbox"/><span>NO SOY CLIENTE VISANET</span>
                </div>
              </div>
              <div className="row justify-content-center">
                <button type="submit">SOLICITAR</button>
              </div>
            </form>
)
};
export default SecondScreen;