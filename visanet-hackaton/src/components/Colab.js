import React from 'react';

const Colab = ({ result, filtered }) => {
    return (
    <div className="container">
          <div className="row">
          {result.map(item => (              
            <div key={item.id} className="col-lg-6 mb-5 d-flex ">
              <img src={item.image} alt={item.name} className="picture p-2 flex-fill" />
              <ul className="p-2 flex-fill">
                <li className="data transform">{item.name} {item.lastname}</li>            
                <li className="data transform">{item.profession}</li>
                <li className="data">{item.experience}</li>
                <li className="data">{item.nearness} de cercanía</li>
                <button type="button" className="color mt-4 p-2">CONTÁCTATE</button>
              </ul>
              
            </div>
          ))}

          </div>
        </div>
    )
};
export default Colab;