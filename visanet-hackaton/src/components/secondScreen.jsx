import React from 'react';
import './secondScreen.css'
const SecondScreen = ({setViews}) => {
        return (
          <>
            <form onSubmit={() => setViews('viewLoans')} className="container mt-5 pt-5 mb-5">
              <div className="row justify-content-center mainTitle">INGRESA TUS DATOS</div>
              <div className="row justify-content-center">
                <div className="column1">
                  <p className="title-input">NOMBRE</p>
                  <input className="yellow-underline1" required="required" type="text" pattern ="^[A-Z]+([a-zA-Z]*)" title="Debe ingresar solo letras y la primera letra debe ser mayúscula"></input>
                </div>
                <div className="column3">
                  <p className="title-input">APELLIDO</p>
                  <input className="yellow-underline2" required="required" type="text" pattern ="^[A-Z]+([a-zA-Z]*)" title="Debe ingresar solo letras y la primera letra debe ser mayúscula"></input>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="column1">
                <p className="title-input">EMAIL</p>
                <input className="yellow-underline1" required="required" type="email" pattern ="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" title="Debe ingresar un correo electrónico válido"></input>
                </div>
                <div className="column3">
                <p className="title-input">DNI</p>
                <input className="yellow-underline2" required="required" type="text" pattern="^[0-9]+$" maxLength="8" title="Debe ingresar solo números"></input>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="column1">
                <p className="title-input">CELULAR</p>
                <input className="yellow-underline1" required="required" type="text" pattern="^[0-9]+$" maxLength="9" title="Debe ingresar solo números"></input>
                </div>
                <div className="column3">
                <p className="title-input">RUC</p>
                <input className="yellow-underline2" required="required" type="text" pattern="^[0-9]+$" maxLength="10" title="Debe ingresar solo números"></input>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="column1">
                <p className="title-input">CÓDIGO DEL CLIENTE VISANET</p>
                <input className="yellow-underline1" type="text" pattern="^[0-9]+$" maxLength="9" title="Debe ingresar solo números"></input>
                </div>
                <div className="column3">
                <p className="title-input">RUBRO DEL NEGOCIO</p>
                <input className="yellow-underline2" required="required" type="text"></input>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="column1">
                <p className="title-input">CONTRASEÑA</p>
                <input className="yellow-underline1" required="required" type="password" pattern="^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,15}$" minLength="6" maxLength="15" title="Debe contener al menos una letra mayúscula, un número y debe ser mayor de 6 dígitos"></input>
                </div>
                <div className="column2">
                 <input id="chk" type="checkbox"/>
                 <label for="chk">NO SOY CLIENTE VISANET</label>
                </div>
              </div>
              <div className="row justify-content-center">
                <button type="submit" className="request">SOLICITAR</button>
              </div>
            </form>
            </>
)
};
export default SecondScreen;