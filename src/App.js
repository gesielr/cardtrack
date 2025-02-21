import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Contract from "./components/Contract";
import Layout from "./components/Layout";

// Importar as telas internas da pasta screens
import Dashboard from "./screens/Dashboard";
import Inconsistencias from "./screens/Inconsistencias";
import Vendas from "./screens/Vendas";
import Recebiveis from "./screens/Recebiveis";
import Antecipacoes from "./screens/Antecipacoes";
import Despesas from "./screens/Despesas";
import Conciliacao from "./screens/Conciliacao";
import Cadastros from "./screens/Cadastros";
import Documentos from "./screens/Documentos";
import Relatorio from "./screens/Relatorio";
import Administracao from "./screens/Administracao";
import VendasPorDia from "./screens/VendasPorDia";
import VendasPorTransacao from "./screens/VendasPorTransacao";
import RecebiveisPorDia from "./screens/RecebiveisPorDia";
import RecebiveisPorTransacao from "./screens/RecebiveisPorTransacao";
import AntecipacoesTransacao from "./screens/AntecipacoesTransacao";
import AntecipacoePorDia from "./screens/AntecipacoePorDia";
import AntecipacoesSimular from "./screens/AntecipacoesSimular";
import DespesasCancelamentos from "./screens/DespesasCancelamentos";
import DespesasTefPos from "./screens/DespesasTefPos";
import DespesasFinanceiras from "./screens/DespesasFinanceiras";
import ConciliacaoVendasResumo from "./screens/ConciliacaoVendasResumo";
import ConciliacaoVendasDetalhes from "./screens/ConciliacaoVendasDetalhes";
import ConciliacaoVendasPendentes from "./screens/ConciliacaoVendasPendentes";
import ConciliacaoTaxas from "./screens/ConciliacaoTaxas";
import ConciliacaoBancaria from "./screens/ConciliacaoBancaria";
import CadastrosEstabelecimento from "./screens/CadastrosEstabelecimento";
import CadastrosEstAdquirente from "./screens/CadastrosEstAdquirente";
import CadastrosTaxasBandeiras from "./screens/CadastrosTaxasBandeiras";
import CadastrosDespesas from "./screens/CadastrosDespesas";
import CadastrosDadosBancarios from "./screens/CadastrosDadosBancarios";
import CadastrosGerenciarExtratos from "./screens/CadastrosGerenciarExtratos";

// Importar os relatórios
import RelatorioConciliacaoVendas from "./components/relatorios/RelatorioConciliacaoVendas";
import RelatorioContaCorrenteBandeira from "./components/relatorios/RelatorioContaCorrenteBandeira";
import RelatorioRecebiveis from "./components/relatorios/RelatorioRecebiveis";
import RelatorioResumoOperacional from "./components/relatorios/RelatorioResumoOperacional";
import RelatorioTaxas from "./components/relatorios/RelatorioTaxas";
import RelatorioVendas from "./components/relatorios/RelatorioVendas";

function App() {
  return (
    <Routes>
      {/* Rota principal com Navbar e Footer */}
      <Route
        path="/"
        element={
          <>
            <CustomNavbar />
            <div id="home">
              <Hero />
            </div>
            <div id="features">
              <Features />
            </div>
            <div id="about">
              <About />
            </div>
            <Footer />
          </>
        }
      />

      {/* Outras rotas com Navbar e Footer */}
      <Route
        path="/contract"
        element={
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <CustomNavbar />
            <div style={{ flex: 1, padding: '40px 0' }}>
              <Contract />
            </div>
            <Footer />
          </div>
        }
      />

      {/* Rota de Login sem Navbar e Footer */}
      <Route path="/login" element={<Login />} />

      {/* Rotas internas */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inconsistencias" element={<Inconsistencias />} />
      <Route path="/vendas" element={<Vendas />} />
      <Route path="/vendas-por-transacao" element={<VendasPorTransacao />} />
      <Route path="/vendas-por-dia" element={<VendasPorDia />} />
      <Route path="/recebiveis" element={<Recebiveis />} />
      <Route path="/antecipacoes" element={<Antecipacoes />} />
      <Route path="/despesas" element={<Despesas />} />
      <Route path="/conciliacao" element={<Conciliacao />} />
      <Route path="/cadastros" element={<Cadastros />} />
      <Route path="/documentos" element={<Documentos />} />
      <Route path="/relatorio" element={<Relatorio />} />
      <Route path="/administracao" element={<Administracao />} />
      <Route path="/recebiveis-por-transacao" element={<RecebiveisPorTransacao />} />
      <Route path="/recebiveis-por-dia" element={<RecebiveisPorDia />} />
      <Route path="/antecipacoes-por-transacao" element={<AntecipacoesTransacao />} />
      <Route path="/antecipacoes-por-dia" element={<AntecipacoePorDia />} />
      <Route path="/antecipacoes-simular" element={<AntecipacoesSimular />} />
      <Route path="/despesas-cancelamentos" element={<DespesasCancelamentos />} />
      <Route path="/despesas-tef-pos" element={<DespesasTefPos />} />
      <Route path="/despesas-financeiras" element={<DespesasFinanceiras />} />
      <Route path="/conciliacao-vendas-resumo" element={<ConciliacaoVendasResumo />} />
      <Route path="/conciliacao-vendas-detalhes" element={<ConciliacaoVendasDetalhes />} />
      <Route path="/conciliacao-vendas-pendentes" element={<ConciliacaoVendasPendentes />} />
      <Route path="/conciliacao-taxas" element={<ConciliacaoTaxas />} />
      <Route path="/conciliacao-bancaria" element={<ConciliacaoBancaria />} />
      <Route path="/cadastros-estabelecimento" element={<CadastrosEstabelecimento />} />
      <Route path="/cadastros-est-adquirente" element={<CadastrosEstAdquirente />} />
      <Route path="/cadastros-taxas-bandeiras" element={<CadastrosTaxasBandeiras />} />
      <Route path="/cadastros-despesas" element={<CadastrosDespesas />} />
      <Route path="/cadastros-dados-bancarios" element={<CadastrosDadosBancarios />} />
      <Route path="/cadastros-gerenciar-extratos" element={<CadastrosGerenciarExtratos />} />
      <Route path="/cadastros-gerenciar-extratos/excecao" element={<CadastrosGerenciarExtratos />} />

      {/* Rotas dos Relatórios */}
      <Route path="/relatorio-conciliacao-vendas" element={<Layout><RelatorioConciliacaoVendas /></Layout>} />
      <Route path="/relatorio-conta-corrente-bandeira" element={<Layout><RelatorioContaCorrenteBandeira /></Layout>} />
      <Route path="/relatorio-recebiveis" element={<Layout><RelatorioRecebiveis /></Layout>} />
      <Route path="/relatorio-resumo-operacional" element={<Layout><RelatorioResumoOperacional /></Layout>} />
      <Route path="/relatorio-taxas" element={<Layout><RelatorioTaxas /></Layout>} />
      <Route path="/relatorio-vendas" element={<Layout><RelatorioVendas /></Layout>} />
    </Routes>
  );
}

export default App;
