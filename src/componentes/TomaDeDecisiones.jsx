import React, { useState } from 'react';

const TomaDeDecisiones = () => {
  const [opinion, setOpinion] = useState('');

  const enviarOpinion = () => {
    console.log('Opinión enviada:', opinion);
    setOpinion('');
  };

  return (
    <div>
      <h2>Toma de Decisiones</h2>
      <textarea
        value={opinion}
        onChange={(e) => setOpinion(e.target.value)}
        placeholder="Escribe tu opinión aquí..."
      />
      <br />
      <button onClick={enviarOpinion}>Enviar Opinión</button>
    </div>
  );
};

export default TomaDeDecisiones;
