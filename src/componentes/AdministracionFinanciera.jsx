import React from 'react';

const AdministracionFinanciera = () => {
  const pagos = [
    { id: 1, concepto: 'Mantenimiento', monto: 500 },
    { id: 2, concepto: 'Aportación Extraordinaria', monto: 1000 },
  ];

  return (
    <div>
      <h2>Administración Financiera</h2>
      <ul>
        {pagos.map((pago) => (
          <li key={pago.id}>
            {pago.concepto}: ${pago.monto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdministracionFinanciera;
