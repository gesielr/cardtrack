import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import './DespesasCancelamentos.css';

const dadosFicticios = [
  {
    id: 1,
    adquirente: "Cielo",
    bandeira: "Visa",
    estabelecimento: "Loja Matriz",
    autorizacao: "123456",
    data: "14/02/2025",
    nCartao: "**** **** **** 1234",
    valor: 150.00
  },
  {
    id: 2,
    adquirente: "Rede",
    bandeira: "Mastercard",
    estabelecimento: "Filial 1",
    autorizacao: "789012",
    data: "14/02/2025",
    nCartao: "**** **** **** 5678",
    valor: 200.00
  }
];

const DespesasCancelamentos = () => {
  const [filtros, setFiltros] = useState({
    intervaloData: "14/02/2025 - 14/02/2025",
    estabelecimento: "Todos",
    adquirente: "Todos",
    tipoOperacao: "Todos"
  });

  const handleBuscar = () => {
    // Implementar lógica de busca
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <h2 className="text-danger mb-4">Despesas Cancelamentos</h2>
        
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
            <span>Cancelamentos: R$0,00</span>
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
                <th>Autorização</th>
                <th>Data</th>
                <th>Nº Cartão</th>
                <th>Valor</th>
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
                  <td>{item.autorizacao}</td>
                  <td>{item.data}</td>
                  <td>{item.nCartao}</td>
                  <td>R$ {item.valor.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <Col 
          md={2} 
          className="d-flex align-items-end" 
          style={{ marginLeft: 'auto', textAlign: 'right' }}
        >
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
      </Container>
    </div>
  );
};

export default DespesasCancelamentos;
