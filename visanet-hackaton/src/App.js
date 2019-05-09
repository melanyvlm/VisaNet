import React from 'react';
import './App.css';
import LoanControl from './components/LoanControl';
import SecondScreen from '../src/secondScreen'
import FourthScreen from '../src/fourthScreen'
function App() {
  return (
    <div className="">
      <h1>Hackaton interna</h1>
    <LoanControl />
      <SecondScreen/>
      <FourthScreen/>
    </div>
  );
}

export default App;
