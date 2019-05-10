import React from 'react';
import Header from '../layout/Header.jsx';
import '../App.css';
import './business.css';
const Business = () => {
    return (
      <>
        <Header />


<div className="container mt-5">
<div className="row">
<div className="col-2">
<div className="img-business "> 
        </div>
</div>
<div className="col-10">
<h4 className="bold">HAZ CRECER TU NEGOCIO</h4>
<section className="mt-5">En esta sección encontrás información de tu negocio, tips y recomendaciones para hacerlo crecer y productos seleccionados especialmente para ti.</section>
<h4 className="bold mt-5">ESTADÍSTICAS DE TU NEGOCIO</h4>
<h5 className="mt-5 bold">VENTAS</h5>

<div className="container "> 
<div className="row">
<div className="col-4 green-div gross-div">
<p>s/1,000</p>
</div>
<div className="square green-div"></div>

<div className="col-4 green-div2 gross-div">
<p>s/.2,000</p>
</div><div className="col-4 gray gross-div">


</div>
</div>
</div>
   
<div className="container mt-5 "> 
<div className="row">
<div className="col-4">
<div className="green-div little-div"><p className="ml-5"> TU NEGOCIO</p></div>
</div>
<div className="square green-div"></div>

<div className="col-4 ">
<div className="green-div little-div"><p className="ml-5"> OTROS NEGOCIOS </p></div>

</div><div className="col-4 ">


</div>
</div>
</div>
<h5 className="mt-5 bold">CANTIDADES DE TRANSACCIONES</h5>

<div className="container "> 
<div className="row">
<div className="col-4 blue gross-div">
<p>s/500 AL MES</p>
</div>
<div className="square green-div"></div>

<div className="col-4 dark-blue gross-div">
<p>s/.1,300 AL MES</p>
</div><div className="col-4 gray gross-div">


</div>
</div>
</div>
   
<div className="container mt-5 "> 
<div className="row">
<div className="col-4">
<div className="blue little-div"><p className="ml-5"> TU NEGOCIO</p></div>
</div>
<div className="square green-div"></div>

<div className="col-4 ">
<div className="dark-blue little-div"><p className="ml-5 text-center">OTROS NEGOCIOS </p></div>

</div><div className="col-4 ">


</div>
</div>
</div>

<h5 className="mt-5 bold">TICKET PROMEDIO</h5>

<div className="container "> 
<div className="row">
<div className="col-4 orange gross-div">
<p>s/20.00</p>
</div>
<div className="square green-div"></div>

<div className="col-4 dark-orange gross-div">
<p>s/30.00 AL MES</p>
</div><div className="col-4 gray gross-div">


</div>
</div>
</div>
   
<div className="container mt-5 "> 
<div className="row">
<div className="col-4">
<div className="orange little-div"><p className="ml-5"> TU NEGOCIO</p></div>
</div>
<div className="square green-div"></div>

<div className="col-4 ">
<div className="dark-orange little-div"><p className="ml-5 text-center">OTROS NEGOCIOS </p></div>

</div><div className="col-4 ">


</div>
</div>
</div>

</div>
</div>
</div>

   
      </>
    )
  };
  export default Business; 
  