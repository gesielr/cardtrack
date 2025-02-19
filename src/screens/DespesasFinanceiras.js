import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import './DespesasFinanceiras.css';

const dadosFicticios = [
  {
    id: 1,
    adquirente: "Cielo",
    bandeira: "Visa",
    estabelecimento: "Loja Matriz",
    dataVenda: "14/02/2025",
    nAutorizacao: "123456",
    taxaCobrada: "2.5%",
    valorDaTaxa: 25.00
  },
  {
    id: 2,
    adquirente: "Rede",
    bandeira: "Mastercard",
    estabelecimento: "Filial 1",
    dataVenda: "14/02/2025",
    nAutorizacao: "789012",
    taxaCobrada: "3.0%",
    valorDaTaxa: 30.00
  }
];

const DespesasFinanceiras = () => {
  const [filtros, setFiltros] = useState({
    intervaloData: "14/02/2025 - 14/02/2025",
    estabelecimento: "Todos",
    adquirente: "Todos",
    tipoOperacao: "Todos",
    bandeira: "Todos",
    valor: "",
    nsu: "",
    nAutorizacao: ""
  });

  const handleBuscar = () => {
    // Implementar lógica de busca
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <h2 className="text-danger mb-4">Despesas Financeiras</h2>
        
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

        <Row className="mb-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Bandeira</Form.Label>
              <Form.Select
                value={filtros.bandeira}
                onChange={(e) => setFiltros({...filtros, bandeira: e.target.value})}
              >
                <option>Todos</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Valor</Form.Label>
              <Form.Control 
                type="text" 
                value={filtros.valor}
                onChange={(e) => setFiltros({...filtros, valor: e.target.value})}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>NSU</Form.Label>
              <Form.Control 
                type="text" 
                value={filtros.nsu}
                onChange={(e) => setFiltros({...filtros, nsu: e.target.value})}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Nº Autorização</Form.Label>
              <Form.Control 
                type="text" 
                value={filtros.nAutorizacao}
                onChange={(e) => setFiltros({...filtros, nAutorizacao: e.target.value})}
              />
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
            <span>Taxas: R$0,00</span>
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
                <th>Data Venda</th>
                <th>Nº Autorização</th>
                <th>Taxa Cobrada</th>
                <th>Valor Da Taxa</th>
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
                  <td>{item.dataVenda}</td>
                  <td>{item.nAutorizacao}</td>
                  <td>{item.taxaCobrada}</td>
                  <td>R$ {item.valorDaTaxa.toFixed(2)}</td>
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

export default DespesasFinanceiras;
