import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import './AntecipacoesTransacao.css';

const dadosFicticios = [
  {
    id: 1,
    dataAntecipacao: "14/02/2025",
    adquirente: "Cielo",
    estabelecimento: "Loja Matriz",
    estAdquirente: "Matriz",
    bandeira: "Visa",
    dataPrevista: "15/03/2025",
    valorBruto: 5000.00,
    valorRecebido: 4850.00,
    taxaAntecipacao: "3%",
    numeroDaAntecipacao: "ANT001",
    diasAntecipacao: 30
  },
  {
    id: 2,
    dataAntecipacao: "14/02/2025",
    adquirente: "Rede",
    estabelecimento: "Filial 1",
    estAdquirente: "Filial",
    bandeira: "Mastercard",
    dataPrevista: "20/03/2025",
    valorBruto: 3500.00,
    valorRecebido: 3395.00,
    taxaAntecipacao: "3%",
    numeroDaAntecipacao: "ANT002",
    diasAntecipacao: 35
  }
];

const AntecipacoesTransacao = () => {
  const [filtros, setFiltros] = useState({
    dataAntecipacao: "14/02/2025 - 14/02/2025",
    estabelecimento: "Todos",
    adquirente: "Todos",
    estAdquirente: "Todos"
  });

  const handleBuscar = () => {
    // Implementar lógica de busca
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>

        {/* Linha com Título e Botão */}
        <Row className="mb-4 align-items-center">
          <Col md={6}>
            <h2 className="text-danger mb-0">Antecipações Por Transação</h2>
          </Col>
          <Col md={6} className="text-end">
            <Button 
              variant="primary"
              onClick={handleBuscar}
              style={{
                width: '120px',
                height: '40px',
                fontSize: '16px',
                fontWeight: 'bold',
                padding: '8px 16px'
              }}
            >
              BUSCAR
            </Button>
          </Col>
        </Row>

        {/* Linha com Filtros */}
        <Row className="mb-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Data Antecipação</Form.Label>
              <Form.Control 
                type="text" 
                value={filtros.dataAntecipacao}
                onChange={(e) => setFiltros({...filtros, dataAntecipacao: e.target.value})}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Adquirente</Form.Label>
              <Form.Select
                value={filtros.adquirente}
                onChange={(e) => setFiltros({...filtros, adquirente: e.target.value})}
              >
                <option>Todos</option>
                {/* Outras opções se houver */}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Estabelecimento</Form.Label>
              <Form.Select
                value={filtros.estabelecimento}
                onChange={(e) => setFiltros({...filtros, estabelecimento: e.target.value})}
              >
                <option>Todos</option>
                {/* Outras opções se houver */}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Est. Adquirente</Form.Label>
              <Form.Select
                value={filtros.estAdquirente}
                onChange={(e) => setFiltros({...filtros, estAdquirente: e.target.value})}
              >
                <option>Todos</option>
                {/* Outras opções se houver */}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center mb-4">
          <div 
            className="d-inline-block p-3 rounded"
            style={{ 
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6'
            }}
          >
            <span className="me-4">Bruto: R$0,00</span>
            |
            <span className="ms-4">Líquido: R$0,00</span>
          </div>
        </div>

        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ações</th>
                <th>Adquirente</th>
                <th>Bandeira</th>
                <th>Estabelecimento</th>
                <th>Data Prevista</th>
                <th>Data Antecipação</th>
                <th>Dias Antecip.</th>
                <th>Valor Bruto</th>
                <th>Valor Recebido</th>
                <th>Taxa Antecipação</th>
                <th>Número Da Antecipação</th>
              </tr>
            </thead>
            <tbody>
              {dadosFicticios.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Button variant="link" size="sm">Ver</Button>
                  </td>
                  <td>{item.adquirente}</td>
                  <td>{item.bandeira}</td>
                  <td>{item.estabelecimento}</td>
                  <td>{item.dataPrevista}</td>
                  <td>{item.dataAntecipacao}</td>
                  <td>{item.diasAntecipacao}</td>
                  <td>R$ {item.valorBruto.toFixed(2)}</td>
                  <td>R$ {item.valorRecebido.toFixed(2)}</td>
                  <td>{item.taxaAntecipacao}</td>
                  <td>{item.numeroDaAntecipacao}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default AntecipacoesTransacao;
