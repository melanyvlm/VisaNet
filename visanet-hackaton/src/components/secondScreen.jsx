import React from 'react';
const SecondScreen = ({setViews}) => {
        return (
            <div>
                <form onSubmit={() => setViews('viewLoans')}>
                <h2>Ingresa tus datos</h2>
                <p>NOMBRE</p>
                <input required="required" type="text" pattern ="^[A-Z]+([a-zA-Z]*)" title="Debe ingresar solo letras y la primera letra debe ser mayúscula"></input>
                <p>APELLIDO</p>
                <input required="required" type="text" pattern ="^[A-Z]+([a-zA-Z]*)" title="Debe ingresar solo letras y la primera letra debe ser mayúscula"></input>
                <p>EMAIL</p>
                <input required="required" type="email" pattern ="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" title="Debe ingresar un correo electrónico válido"></input>
                <p>DNI</p>
                <input required="required" type="text" pattern="^[0-9]+$" maxLength="8" title="Debe ingresar solo números"></input>
                <p>CELULAR</p>
                <input required="required" type="text" pattern="^[0-9]+$" maxLength="9" title="Debe ingresar solo números"></input>
                <p>RUC</p>
                <input required="required" type="text" pattern="^[0-9]+$" maxLength="10" title="Debe ingresar solo números"></input>
                <p>CÓDIGO DEL CLIENTE VISANET</p>
                <input type="text" pattern="^[0-9]+$" maxLength="9" title="Debe ingresar solo números"></input>
                <p>RUBRO DEL NEGOCIO</p>
                <input required="required" type="text"></input>
                <p>CONTRASEÑA</p>
                <input required="required" type="password" pattern="^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,15}$" minLength="6" maxLength="15" title="Debe contener al menos una letra mayúscula, un número y debe ser mayor de 6 dígitos"></input>
                <input type="checkbox"/><span>NO SOY CLIENTE VISANET</span>
                <button type="submit">SOLICITAR</button>
            </form>
            </div>
)
};
export default SecondScreen;