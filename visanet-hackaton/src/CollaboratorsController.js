import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import './collaborators.css';
import Colab from './components/Colab';



const CollaboratorsController = () => {
  const [result, setResult] = useState([]);
  const [professionals, setProfessionals] = useState([]);
  const [profesionOption, setProfesionOption] = useState('SELECCIONAR');
  const [experienceOption, setExperienceOption] = useState('SELECCION');

  console.log(result);

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
    console.log('prof filter', professionals.filter(option => option.profession === profesionOption))
  };

  const handleExperienceChange = (e) => {
    setExperienceOption(e.target.value);
    setResult(professionals.filter(option => option.experience === e.target.value))
  };

  return (
    <>
      <select value={profesionOption} onChange={handleProfesionChange} >
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
      <Colab result={result} />

    </>
  );
};
export default CollaboratorsController;