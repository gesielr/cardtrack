import React from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

const RelatorioVendas = () => {
  return (
    <Container fluid className="p-0">
      <h3 className="mb-4 text-danger">Relatório de Vendas</h3>
      
      {/* Filtros */}
      <Row className="mb-4">
        <Col md={2}>
          <Form.Group>
            <Form.Label>Data Inicial</Form.Label>
            <Form.Control type="date" size="sm" />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Data Final</Form.Label>
            <Form.Control type="date" size="sm" />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Estabelecimento</Form.Label>
            <Form.Select size="sm">
              <option value="">Selecione...</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Tipo de Vendas</Form.Label>
            <Form.Select size="sm">
              <option value="">Selecione...</option>
              <option value="detalhadas">Detalhadas</option>
              <option value="por_dia">Por Dia</option>
              <option value="por_transacao">Por Transação</option>
              <option value="por_adquirente">Por Adquirente</option>
              <option value="por_bandeira">Por Bandeira</option>
              <option value="por_tipo_operacao">Por Tipo de Operação</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Select size="sm">
              <option value="">Todos</option>
              <option value="aprovado">Aprovado</option>
              <option value="pendente">Pendente</option>
              <option value="rejeitado">Rejeitado</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={1} className="d-flex align-items-end">
          <Button variant="primary" size="sm" className="w-100">
            Gerar
          </Button>
        </Col>
      </Row>

      {/* Tabela de Resultados */}
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Estabelecimento</th>
            <th>Tipo</th>
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

export default RelatorioVendas;
