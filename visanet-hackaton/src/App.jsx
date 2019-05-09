import React from 'react';
import './App.css';

const App = () => { 
  return (
  // INICIO - HEADER
    <>
    <main>
    <div className="container-fluid">
        <div className="row back-img">
            <div className="col-6">
            <div className="pad">
              <h2 className="bold margin-phrase">MUJER</h2>
              <h2 className="bold margin-phrase">EMPRENDEDORA</h2>
              </div>
              <div className="contenedor ">
              <div className="margin-phrase">
              <h4 className="bold">TE AYUDAMOS A HACER TUS</h4>
              <h4 className="bold"><span className="color-fucsia">SUEÑOS</span> POSIBLES</h4>
              <div className="margin">
              </div>
              <a href="#" className="bold">CONOCE NUESTROS SERVICIOS</a>
              </div>
              </div>
            </div>
            <div className="col-6 ">
            <div class="row justify-content-end">
          <div class="col-3">
            <p class="font-weight-bold ">INICIAR SESIÓN</p>
          </div>
          <div class="col-3">
            <p class="font-weight-bold">REGISTRATE</p>
          </div>
        </div>
            </div>
        </div>
             <p class="color-fucsia text-center bold m-4">"La plataforma colaborativa que busca el empoderamiento femenino mediante el crecimiento económico de las mujeres emprendedoras"</p>

     </div>
     </main>
{/* Segunda section */}
<h4 className="text-center m-5 bold">¿QUÉ ENCONTRARÉ EN JUNTAS?</h4>
   <div className="container">
<div className="row">

<div className="col-md-4">
<div className="img1 eq img"></div>

<p className=" text-center">GARCOAS</p>

</div>
<div className="col-md-4">
<div className="img3 eq  img" ></div>
<p className=" text-center">GARCOAS</p>

</div>
<div className="col-md-4">
<div className="img2 eq img"></div>

<p className=" text-center">GARCOAS</p>

</div>
</div>
</div>




{/* SERVICIOS */}
   <div className="container">
<div className="row">
<div className="col-md-6">
<div className="img7 img"></div>


</div>
<div className="col-md-6">
<div className="img div-fucsia" >
<h2 className="color-yellow">PIDE UN PRÉSTAMO PARA TU NEGOCIO</h2>
<p>Encuentra préstamos a tu medida , sintantos requisitos y de forma rápida</p>
<button className="yellow-btn">PIDE TU PRÉSTAMO</button>
</div>

</div>
</div>
</div>

    {/* <section>
      <div className="contenedor">
      <article>
    <div className="img1 eq img"></div>
<h4>HHHKKKS</h4> 
    </article>
    <article>
    <div className="img1 eq img"></div>
<h4>HHHKKKS</h4> 
    </article>
    <article>
    <div className="img1 eq img"></div>
<h4>HHHKKKS</h4> 
    </article>
      </div>
    </section> */}

    
{/* Servicios */}
   <h4 className="text-center m-5 bold">NUESTROS SERVICIOS</h4>
{/* Tercera sección */}

<h4 className="text-center m-5 bold"> Y TAMBIÉN TE OFRECEMOS SOLUCIONES PARA INCREMENTAR TUS VENTAS</h4>
<div className="container">
<div className="row">

<div className="col-md-4">
<button className="yellow-btn">VENDO POR FACEBOOK</button>
<div className="card border-success mb-3 mt-5" >
  <div className="card-body">
    <h5 className="card-title">CON ESTE PACK AUMENTARÁS UN 20% DE TUS VENTAS</h5>
    <div className="img4 img-little"></div>
  </div>
</div>

</div>
<div className="col-md-4">
<button className="yellow-btn ">TENGO UNA TIENDA FÍSICA Y QUIERO CRECER</button>
<div className="card border-success mb-3 mt-5" >
  <div className="card-body">
    <h5 className="card-title">CON ESTE PACK PODRÁS VENDER DE FORMA ONLINE</h5>
    <div className="img6 img-little"></div>
  </div>
</div>

</div>
<div className="col-md-4 " >
<button className="yellow-btn">BUSCO SERVICIOS DE VALOR AGREGADO</button>
<div className="card border-success mb-3 mt-5" >
  <div className="card-body">
    <h5 className="card-title">CON ESTE PACK PODRÁS OFRECER MÁS SERVICIOS</h5>
    <div className="img4 img-little"></div>
  </div>
</div>

</div>
</div>
</div>

<footer>
  <div className="color-black ">VISANET PERU</div>
</footer>
    </>

  )

} 

export default App;
