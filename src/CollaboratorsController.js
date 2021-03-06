import React, { useState, useEffect } from 'react';
import firebase from './services/firebase';
import { Link } from 'react-router-dom';
import './collaborators.css';
import Colab from './components/Colab';
import Header from './layout/Header.jsx';


const CollaboratorsController = () => {
  const [result, setResult] = useState([]);
  const [professionals, setProfessionals] = useState([]);
  const [profesionOption, setProfesionOption] = useState('SELECCIONAR');
  const [experienceOption, setExperienceOption] = useState('SELECCION');

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('collaborators').onSnapshot((snap) => {
      const data = [];
      snap.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setResult(data);
      setProfessionals(data);
    });
    return unsubscribe;
  }, []);

  const handleProfesionChange = (e) => {
    setProfesionOption(e.target.value);
    setResult(professionals.filter(option => option.profession === e.target.value))
  };

  const handleExperienceChange = (e) => {
    setExperienceOption(e.target.value);
    setResult(professionals.filter(option => option.experience === e.target.value))
  };

  return (
    <>
      <Header /> 
      <div className="container mt-5">
      <Link to="/contactos"><i className="fas fa-arrow-left arrow mb-5"></i></Link>
      <h4 className="bold mb-5">COLABORADORES</h4>
      <p className="text1 mb-3">FILTROS</p>
      <select value={profesionOption} onChange={handleProfesionChange} className="mb-5 mr-3">
        <option value="SELECCIONAR" disabled>PROFESIÓN</option>
        <option value="Administradora">ADMINISTRADORA</option>
        <option value="Contadora">CONTADORA</option>
        <option value="Comunicadora">COMUNICADORA</option>
        <option value="Arquitecta">ARQUITECTA</option>
        <option value="Chef">CHEF</option>
        <option value="Abogada">ABOGADA</option>
        <option value="Ingeniera">INGENIERA</option>
        <option value="Mesera">MESERA</option>
      </select>
      <select value={experienceOption} onChange={handleExperienceChange} >
        <option value="SELECCION" disabled>EXPERIENCIA</option>
        <option value="1 año de Experiencia">01 AÑO</option>
        <option value="2 años de Experiencia">02 AÑOS</option>
        <option value="3 años de Experiencia">03 AÑOS</option>
        <option value="4 años de Experiencia">04 AÑOS</option>
        <option value="5 años de Experiencia">05 AÑOS</option>
        <option value="6 años de Experiencia">06 AÑOS</option>
        <option value="15 años de Experiencia">15 AÑOS</option>
      </select>
      </div>
      <Colab result={result} />

    </>
  );
};
export default CollaboratorsController;