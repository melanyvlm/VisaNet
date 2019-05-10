import React from 'react';
import Header from '../layout/Header.jsx';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <>
      <Header />
      <section className="container" style={style}>
          <h4>¿Qué necesita tu negocio?</h4>
          <div className="mt-5">
            <button style={btnStyle} type="button">SOCIOS</button>
            <button style={btnStyle} type="button">PROVEEDORES</button>
            <Link to="/colaboradores" style={btnStyle}>COLABORADORES</Link>
          </div>
      </section>
    </>
  )
};
export default Contacts; 

const btnStyle = {
  borderRadius: '10px',
  backgroundColor: '#CF387A',
  paddingLeft: '45px',
  paddingRight: '45px',
  paddingTop: '25px',
  paddingBottom: '25px',
  color: '#fff',
  border: 'none',
  marginRight: '5%'
}
const style = {
    position: 'absolute',
    top: '30%',
    left: '20%'
}
