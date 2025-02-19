import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap';
import { FaSearch, FaCheckCircle, FaFileExport } from 'react-icons/fa';
import './ConciliacaoTaxas.css';

const ConciliacaoTaxas = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [dateRange, setDateRange] = useState('17/02/2025 - 17/02/2025');
  const [filterByPaymentDate, setFilterByPaymentDate] = useState(false);
  
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-danger">Conciliação Taxas</h2>
          <div className="d-flex gap-2">
            <Button variant="secondary" className="d-flex align-items-center gap-2">
              <FaFileExport /> EXPORTAR
            </Button>
          </div>
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
                <Form.Label>Adquirente</Form.Label>
                <Form.Select>
                  <option>Todos</option>
                </Form.Select>
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
                <Form.Label>Est. Adquirente</Form.Label>
                <Form.Select>
                  <option>Todos</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {showAdvancedFilters && (
            <>
              <Row className="mb-3">
                <Col md={2}>
                  <Form.Group>
                    <Form.Label>Bandeira</Form.Label>
                    <Form.Select>
                      <option>Todos</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group>
                    <Form.Label>Tipo de Operação</Form.Label>
                    <Form.Select>
                      <option>Todos</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group>
                    <Form.Label>Status Conciliação</Form.Label>
                    <Form.Select>
                      <option>Todos</option>
                    </Form.Select>
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
              </Row>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Filtrar pela data de pagamento"
                  checked={filterByPaymentDate}
                  onChange={(e) => setFilterByPaymentDate(e.target.checked)}
                />
              </Form.Group>
            </>
          )}

          <div className="mb-3">
            <Button
              variant="link"
              className="p-0 text-decoration-none"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            >
              {showAdvancedFilters ? '▼' : '▶'} {showAdvancedFilters ? 'Esconder' : 'Mostrar'} filtros avançados
            </Button>
          </div>

          <div className="summary-box mb-3">
            Contratado: R$0,00 | Cobrado: R$0,00
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
              <th>Descrição</th>
              <th>Valor</th>
              <th>Taxa Contratada</th>
              <th>Taxa Cobrada</th>
              <th>Data Venda</th>
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

export default ConciliacaoTaxas;
