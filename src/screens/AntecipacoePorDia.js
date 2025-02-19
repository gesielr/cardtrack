import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import './AntecipacoePorDia.css';

const dadosFicticios = [
  {
    id: 1,
    dataAntecipacao: "14/02/2025",
    adquirente: "Cielo",
    numeroAntecipacao: "ANT001",
    qtdeAntecipacoes: 5,
    valor: 5000.00,
    ticketMedio: 1000.00
  },
  {
    id: 2,
    dataAntecipacao: "14/02/2025",
    adquirente: "Rede",
    numeroAntecipacao: "ANT002",
    qtdeAntecipacoes: 3,
    valor: 3500.00,
    ticketMedio: 1166.67
  }
];

const AntecipacoePorDia = () => {
  const [filtros, setFiltros] = useState({
    intervaloData: "14/02/2025 - 14/02/2025",
    estabelecimento: "Todos",
    adquirente: "Todos",
    tipoOperacao: "Todos"
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <h2 className="text-danger mb-4">Antecipações Por Dia</h2>
        
        <Row className="mb-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Intervalo de datas</Form.Label>
              <Form.Control 
                type="text" 
                value={filtros.intervaloData}
                onChange={(e) => setFiltros({...filtros, intervaloData: e.target.value})}
              />
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
              </Form.Select>
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
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Tipo de Operação</Form.Label>
              <Form.Select
                value={filtros.tipoOperacao}
                onChange={(e) => setFiltros({...filtros, tipoOperacao: e.target.value})}
              >
                <option>Todos</option>
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
            <span>Valor: R$0,00</span>
          </div>
        </div>

        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ações</th>
                <th>Adquirente</th>
                <th>Data Antecipação</th>
                <th>Número Da Antecipação</th>
                <th>Qtde. De Antecipações</th>
                <th>Valor</th>
                <th>Ticket Médio</th>
              </tr>
            </thead>
            <tbody>
              {dadosFicticios.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Button variant="link" size="sm">Ver</Button>
                  </td>
                  <td>{item.adquirente}</td>
                  <td>{item.dataAntecipacao}</td>
                  <td>{item.numeroAntecipacao}</td>
                  <td>{item.qtdeAntecipacoes}</td>
                  <td>R$ {item.valor.toFixed(2)}</td>
                  <td>R$ {item.ticketMedio.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default AntecipacoePorDia;
