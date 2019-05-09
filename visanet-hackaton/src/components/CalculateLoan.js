import React from 'react';

const CalculateLoan = ({amount, setAmount, handleChange, calculateValues, value, setViews }) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

    <div>
      <h2>Hola emprendedora</h2>
      <p>Te otorgamos un préstamo para que puedas seguir creciendo</p>
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
    </>
  )
};

export default CalculateLoan;