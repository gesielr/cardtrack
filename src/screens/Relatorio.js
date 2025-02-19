import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import RelatorioVendas from '../components/relatorios/RelatorioVendas';
import RelatorioRecebiveis from '../components/relatorios/RelatorioRecebiveis';
import RelatorioTaxas from '../components/relatorios/RelatorioTaxas';
import RelatorioConciliacaoVendas from '../components/relatorios/RelatorioConciliacaoVendas';
import RelatorioResumoOperacional from '../components/relatorios/RelatorioResumoOperacional';
import RelatorioContaCorrenteBandeira from '../components/relatorios/RelatorioContaCorrenteBandeira';

const Relatorio = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '250px', padding: '20px', transition: 'margin-left 0.3s ease' }}>
        <Routes>
          <Route path="/vendas" element={<RelatorioVendas />} />
          <Route path="/recebiveis" element={<RelatorioRecebiveis />} />
          <Route path="/taxas" element={<RelatorioTaxas />} />
          <Route path="/conciliacao" element={<RelatorioConciliacaoVendas />} />
          <Route path="/resumo" element={<RelatorioResumoOperacional />} />
          <Route path="/conta-corrente" element={<RelatorioContaCorrenteBandeira />} />
          <Route path="/" element={<RelatorioVendas />} />
        </Routes>
      </div>
    </div>
  );
};

export default Relatorio;