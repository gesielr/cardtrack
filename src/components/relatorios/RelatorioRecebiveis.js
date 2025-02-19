import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { FaFileExport } from 'react-icons/fa';

const RelatorioRecebiveis = () => {
  const [dateRange, setDateRange] = useState('18/02/2025 - 18/02/2025');

  return (
    <Container fluid className="p-3 bg-white rounded shadow-sm">
      <h3 className="mb-4 text-danger">Relatório Recebíveis</h3>
      
      {/* Filtros */}
      <Row className="mb-4 align-items-end">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Intervalo de datas</Form.Label>
            <Form.Control 
              type="text" 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-white"
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Status Pgto.</Form.Label>
            <Form.Select className="bg-white">
              <option value="">Todos</option>
              <option value="pago">Pago</option>
              <option value="pendente">Pendente</option>
              <option value="atrasado">Atrasado</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Estabelecimento</Form.Label>
            <Form.Select className="bg-white">
              <option value="">Todos</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Adquirente</Form.Label>
            <Form.Select className="bg-white">
              <option value="">Todos</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Button 
            variant="primary" 
            className="w-100 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: '#5B9BD5' }}
          >
            <FaFileExport className="me-2" />
            Gerar Relatório
          </Button>
        </Col>
      </Row>

      {/* Tabela de Resultados */}
      <Table striped bordered hover responsive className="mt-4">
        <thead className="bg-light">
          <tr>
            <th>Data Prevista</th>
            <th>Estabelecimento</th>
            <th>Adquirente</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" className="text-center">Utilize os filtros para gerar o relatório</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default RelatorioRecebiveis;
