import React from 'react';
import Sidebar from '../components/Sidebar';

const Recebiveis = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '250px', padding: '20px', transition: 'margin-left 0.3s ease' }}>
        <h2>Recebíveis</h2>
        {/* Conteúdo da página */}
      </div>
    </div>
  );
};

export default Recebiveis;