import React from 'react';

const ComunicacionVisual = () => {
  const eventos = [
    { id: 1, evento: 'Reunión de Asamblea', fecha: '2024-09-10' },
    { id: 2, evento: 'Fiesta del Barrio', fecha: '2024-09-20' },
  ];

  return (
    <div>
      <h2>Comunicación Visual</h2>
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            {evento.evento} - {evento.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComunicacionVisual;
