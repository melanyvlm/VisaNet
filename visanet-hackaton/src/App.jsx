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
              {/* <button className="btn-service color-pink">CONOCE NUESTROS SERVICIOS</button>           */}
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
<h4 className="text-center m-5">¿QUÉ ENCONTRARÉ EN JUNTAS?</h4>

    <div className="d-inline-flex ">
  <div className="img1 eq img"></div>
  <div className="img3 eq  img" ></div>
  <div className="img2 eq img"></div>

    
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
   <h4 className="text-center m-5">NUESTROS SERVICIOS</h4>

    </>

  )

} 

export default App;
