import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { FaFileExport } from 'react-icons/fa';

const RelatorioConciliacaoVendas = () => {
  const [dateRange, setDateRange] = useState('18/02/2025 - 18/02/2025');

  return (
    <Container fluid className="p-3 bg-white rounded shadow-sm">
      <h3 className="mb-4 text-danger">Relatório Vendas ERP</h3>
      
      {/* Filtros */}
      <Row className="mb-4 align-items-end">
        <Col md={4}>
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
        <Col md={{ span: 3, offset: 5 }}>
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
            <th>Data</th>
            <th>Valor Venda</th>
            <th>Valor ERP</th>
            <th>Diferença</th>
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

export default RelatorioConciliacaoVendas;
