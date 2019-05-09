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
              <a href="#" className="bold boldy-size">CONOCE NUESTROS SERVICIOS</a>
              </div>
              </div>
            </div>
            <div className="col-6 ">
            <div className="row justify-content-end">
          <div className="col-3">
            <p className="font-weight-bold ">INICIAR SESIÓN</p>
          </div>
          <div className="col-3">
            <p className="font-weight-bold">REGISTRATE</p>
          </div>
        </div>
            </div>
        </div>
             <p className="color-fucsia text-center bold bold-size m-4">"La plataforma colaborativa que busca el empoderamiento femenino mediante el crecimiento económico de las mujeres emprendedoras"</p>

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
   
{/* Servicios */}
   <h4 className="text-center m-5 bold">NUESTROS SERVICIOS</h4>
   <div className="container">
<div className="card-group">
<div className="card img7">
      </div>
    <div className="card div-fucsia">
      <div className="card-body mt-5">
      <div className="ml-5">
        <h5 className="card-title mt-5 ml-5 color-yellow bold">PIDE UN PRÉSTAMO PARA TU </h5>
        <h5 className="card-title  ml-5 color-yellow bold"> NEGOCIO</h5>
        <p className="card-text mt-4 ml-5 color-white">Encuentra préstamos a tu medida, sin tantos
          requisitos y de forma rápida.</p>
        <button  href="#" class=" loan-btn ml-5 mt-3 bold">PIDE TU PRÉSTAMO</button>
      </div>
      </div>
    </div>
  </div>
  <div className="card-group">
    <div className="card div-fucsia">
      <div class="card-body">
        <h5 class="card-title mt-5 ml-5 color-yellow bold">ENCUENTRA UN PERSONAL DE CONFIANZA</h5>
        <p class="card-text mt-5 ml-5 color-white">Ingresa tu perfil , cuéntanos qué necesitas (proveedores, colaborados) y te conectamos con la persona ideal para tu negocio</p>
        <button href="#" class="btn-services color-yellow ml-5 bold">INCREMENTA TU RED DE 
        <p>CONTACTOS</p></button>
        
      </div>
    </div>
    <div class="card img9">
        </div>
  </div>
  <div class="card-group">
<div class="card img8">
      </div>
    <div class="card div-fucsia">
      <div class="card-body">
        <h5 class="card-title mt-5 ml-5 color-yellow bold">HAZ CRECER TU NEGOCIO</h5>
        <p class="card-text mt-5 ml-5 color-white"> Te brindamos información del sector de tu negocio y te recomendamos soluciones para hacerlo crecer</p>
        <button href="#" class="btn-services color-yellow ml-5 mt-3 bold">HAZ CRECER TU NEGOCIO</button>
      </div>
    </div>
  </div>
  </div>

{/* Tercera sección */}

<h4 className="text-center m-5 bold black"> Y TAMBIÉN TE OFRECEMOS SOLUCIONES PARA INCREMENTAR TUS VENTAS</h4>
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
