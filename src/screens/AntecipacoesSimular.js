import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import './AntecipacoesSimular.css';

const dadosFicticios = [
  {
    id: 1,
    estabelecimento: "Loja Matriz",
    dataPrevista: "15/03/2025",
    dataAntecipacao: "14/02/2025",
    valorAReceber: 5000.00,
    taxaAntecipacao: "3%",
    taxaAPagar: "2.5%",
    diasAntecipacao: 30,
    bandeira: "Visa"
  },
  {
    id: 2,
    estabelecimento: "Filial 1",
    dataPrevista: "20/03/2025",
    dataAntecipacao: "14/02/2025",
    valorAReceber: 3500.00,
    taxaAntecipacao: "3%",
    taxaAPagar: "2.5%",
    diasAntecipacao: 35,
    bandeira: "Mastercard"
  }
];

const AntecipacoesSimular = () => {
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
        <h2 className="text-danger mb-4">Antecipações Simular</h2>
        
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
        </Row>

        <div className="text-center mb-4">
          <div 
            className="d-inline-block p-3 rounded"
            style={{ 
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6'
            }}
          >
            <span>Valor Antecipado: R$0,00 || Taxas a pagar: R$0,00</span>
          </div>
        </div>

        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ações</th>
                <th>Bandeira</th>
                <th>Estabelecimento</th>
                <th>Data Prevista</th>
                <th>Data Antecipação</th>
                <th>Valor A Receber</th>
                <th>Taxa Antecip.</th>
                <th>Taxa A Pagar</th>
                <th>Dias Antecip.</th>
              </tr>
            </thead>
            <tbody>
              {dadosFicticios.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Button variant="link" size="sm">Ver</Button>
                  </td>
                  <td>{item.bandeira}</td>
                  <td>{item.estabelecimento}</td>
                  <td>{item.dataPrevista}</td>
                  <td>{item.dataAntecipacao}</td>
                  <td>R$ {item.valorAReceber.toFixed(2)}</td>
                  <td>{item.taxaAntecipacao}</td>
                  <td>{item.taxaAPagar}</td>
                  <td>{item.diasAntecipacao}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default AntecipacoesSimular;
