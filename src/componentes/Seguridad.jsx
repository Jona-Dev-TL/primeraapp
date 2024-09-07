import React from 'react';

const Seguridad = () => {
  const alertas = [
    { id: 1, mensaje: 'Vigilancia programada para las 10 PM.' },
    { id: 2, mensaje: 'Incidente reportado: robo menor en la calle 3.' },
  ];

  return (
    <div>
      <h2>Seguridad</h2>
      <ul>
        {alertas.map((alerta) => (
          <li key={alerta.id}>{alerta.mensaje}</li>
        ))}
      </ul>
    </div>
  );
};

export default Seguridad;
