import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Container, Nav } from 'react-bootstrap';
import GerenciarExtratos from '../components/GerenciarExtratos';
import ExcecaoExtratos from '../components/ExcecaoExtratos';
import './CadastrosGerenciarExtratos.css';

const CadastrosGerenciarExtratos = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('gerenciar');

  useEffect(() => {
    // Define a aba ativa com base na URL
    if (location.pathname.includes('/excecao')) {
      setActiveTab('excecoes');
    } else {
      setActiveTab('gerenciar');
    }
  }, [location]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <h2 className="text-danger mb-4">Cadastros - Gerenciar Extratos</h2>
        
        <Nav variant="tabs" className="mb-4">
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'gerenciar'}
              onClick={() => setActiveTab('gerenciar')}
            >
              Gerenciar Extratos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'excecoes'}
              onClick={() => setActiveTab('excecoes')}
            >
              Exceção de Extratos Cadastro
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {activeTab === 'gerenciar' ? <GerenciarExtratos /> : <ExcecaoExtratos />}
      </Container>
    </div>
  );
};

export default CadastrosGerenciarExtratos;
