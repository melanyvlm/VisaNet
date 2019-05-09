import React from 'react';
import { Route } from 'react-router-dom';
import LoanControl from './LoanControl';
import App from '../App';
import CollaboratorsController from '../CollaboratorsController';


const Nav = () => (
  <>
    <Route exact path="/" component={App} />
    <Route path="/prestamo" component={LoanControl} />
    <Route path="/contactos" component={CollaboratorsController} />
  </>
);

export default Nav;
