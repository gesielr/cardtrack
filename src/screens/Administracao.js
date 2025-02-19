import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Autorizacoes from '../components/administracao/Autorizacoes';
import Usuarios from '../components/administracao/Usuarios';
import Linguagens from '../components/administracao/Linguagens';
import LogsAuditoria from '../components/administracao/LogsAuditoria';
import Configuracoes from '../components/administracao/Configuracoes';

const Administracao = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '250px', padding: '20px', transition: 'margin-left 0.3s ease' }}>
        <Routes>
          <Route index element={<Navigate to="autorizacoes" replace />} />
          <Route path="autorizacoes" element={<Autorizacoes />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="linguagens" element={<Linguagens />} />
          <Route path="logs-auditoria" element={<LogsAuditoria />} />
          <Route path="configuracoes" element={<Configuracoes />} />
        </Routes>
      </div>
    </div>
  );
};

export default Administracao;