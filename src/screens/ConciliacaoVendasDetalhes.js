import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Form, Row, Col, Button, Table, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './ConciliacaoVendasDetalhes.css';

const ConciliacaoVendasDetalhes = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [dateRange, setDateRange] = useState('15/02/2025 - 15/02/2025');
  
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-danger">Conciliação Vendas Detalhes</h2>
          <Button variant="primary" className="add-button">
            + ADICIONAR
          </Button>
        </div>

        <Form className="mb-4">
          <Row className="mb-3">
            <Col md={3}>
              <Form.Group>
                <Form.Label>Intervalo de datas</Form.Label>
                <Form.Control
                  type="text"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Estabelecimento</Form.Label>
                <Form.Select>
                  <option>Todos</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Adquirente</Form.Label>
                <Form.Select>
                  <option>Todos</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Status Conciliação</Form.Label>
                <Form.Select>
                  <option>Todos</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}>
              <Form.Group>
                <Form.Label>Valor</Form.Label>
                <InputGroup>
                  <Form.Control type="text" />
                  <InputGroup.Text>--</InputGroup.Text>
                  <Form.Control type="text" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>NSU</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Nº Autorização</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Tipo de Operação</Form.Label>
                <Form.Select>
                  <option>Todos</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}>
              <Form.Group>
                <Form.Label>Bandeira</Form.Label>
                <Form.Select>
                  <option>Todos</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="mb-3">
            <Button
              variant="link"
              className="p-0 text-decoration-none"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            >
              {showAdvancedFilters ? '▼' : '▶'} Esconder filtros avançados
            </Button>
          </div>

          <div className="summary-box mb-3">
            Vendas : R$0,00
          </div>

          <div className="d-flex gap-2">
            <Button variant="primary" className="d-flex align-items-center gap-2">
              <FaSearch /> BUSCAR
            </Button>
          </div>
        </Form>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Ações</th>
              <th>Conciliado</th>
              <th>Adquirente</th>
              <th>Bandeira</th>
              <th>Estabelecimento</th>
              <th>Tipo Operação</th>
              <th>Valor</th>
              <th>Venda</th>
              <th>Nº Autorização</th>
              <th>NSU</th>
              <th>Identificador</th>
              <th>Sequencial</th>
            </tr>
          </thead>
          <tbody>
            {/* Dados serão preenchidos dinamicamente */}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ConciliacaoVendasDetalhes;
