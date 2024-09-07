import React from 'react';
import ComunicacionInterna from './components/ComunicacionInterna';
import AdministracionFinanciera from './components/AdministracionFinanciera';
import Seguridad from './components/Seguridad';
import TomaDeDecisiones from './components/TomaDeDecisiones';
import ComunicacionVisual from './components/ComunicacionVisual';

const App = () => {
  return (
    <div>
      <h1>Residencial App</h1>
      <ComunicacionInterna />
      <AdministracionFinanciera />
      <Seguridad />
      <TomaDeDecisiones />
      <ComunicacionVisual />
    </div>
  );
};

export default App;
