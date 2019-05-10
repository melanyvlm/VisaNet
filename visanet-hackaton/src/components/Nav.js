import React from 'react';
import { Route } from 'react-router-dom';
import LoanControl from './LoanControl';
import App from '../App';
import CollaboratorsController from '../CollaboratorsController';
import Contacts from './Contacts';
import Business from './Business';

const Nav = () => (
  <>
    <Route exact path="/" component={App} />
    <Route path="/prestamo" component={LoanControl} />
    <Route path="/contactos" component={Contacts} />
    <Route path="/negocio" component={Business} />
    <Route path="/colaboradores" component={CollaboratorsController}/>
  </>
);
export default Nav;
