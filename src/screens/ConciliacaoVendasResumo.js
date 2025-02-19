import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap';
import { FaSearch, FaCheckCircle } from 'react-icons/fa';
import './ConciliacaoVendasResumo.css';

const ConciliacaoVendasResumo = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [dateRange, setDateRange] = useState('15/02/2025 - 15/02/2025');
  
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-danger">Conciliação Vendas Resumo</h2>
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
            <Col md={6}>
              <Form.Group>
                <Form.Label>Bandeira</Form.Label>
                <Form.Select>
                  <option>Todos</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Tipo Operação</Form.Label>
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
            <Button variant="success" className="d-flex align-items-center gap-2">
              <FaCheckCircle /> CONCILIAR
            </Button>
          </div>
        </Form>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Ações</th>
              <th>Adquirente</th>
              <th>Bandeira</th>
              <th>Estabelecimento</th>
              <th>Data</th>
              <th>Operação</th>
              <th>Valor E R P</th>
              <th>Valor</th>
              <th>Diferença</th>
              <th>Conciliado</th>
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

export default ConciliacaoVendasResumo;
