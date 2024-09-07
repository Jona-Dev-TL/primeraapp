import React, { useState } from 'react';

const ComunicacionInterna = () => {
  const [mensaje, setMensaje] = useState('');

  const enviarMensaje = () => {
    console.log('Mensaje enviado a la administración:', mensaje);
    setMensaje('');
  };

  return (
    <div>
      <h2>Comunicación Interna</h2>
      <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        placeholder="Escribe tu mensaje aquí..."
      />
      <br />
      <button onClick={enviarMensaje}>Enviar</button>
    </div>
  );
};

export default ComunicacionInterna;
