import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap';
import { FaSync, FaFileImport, FaPrint } from 'react-icons/fa';
import './ConciliacaoBancaria.css';

const ConciliacaoBancaria = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [dateRange, setDateRange] = useState('18/01/2025 - 17/02/2025');

  // Dados de exemplo para a tabela
  const tableData = [
    {
      id: '9261',
      adquirente: 'Banrisul',
      estabelecimento: 'Todos',
      dataCriacao: '06/02/2025',
      periodo: '20/01 a 20/01/25',
      previsto: 'R$189,37',
      recebido: 'R$31.409,00',
      diferenca: 'R$31.309,63',
      conciliado: 'NÃO CONCILIADO',
      contaCorrente: 'Ag:1142 - CC:615714902',
      banco: 'Banrisul'
    },
    {
      id: '9262',
      adquirente: 'Banrisul',
      estabelecimento: 'Todos',
      dataCriacao: '06/02/2025',
      periodo: '20/01 a 20/01/25',
      previsto: 'R$176,84',
      recebido: 'R$17.684,00',
      diferenca: 'R$17.507,16',
      conciliado: 'NÃO CONCILIADO',
      contaCorrente: 'Ag:1142 - CC:615714929',
      banco: 'Banrisul'
    },
    {
      id: '9263',
      adquirente: 'Banrisul',
      estabelecimento: 'Todos',
      dataCriacao: '06/02/2025',
      periodo: '21/01 a 21/01/25',
      previsto: 'R$114,28',
      recebido: 'R$11.428,00',
      diferenca: 'R$11.313,72',
      conciliado: 'NÃO CONCILIADO',
      contaCorrente: 'Ag:1142 - CC:615714902',
      banco: 'Banrisul'
    },
    {
      id: '9264',
      adquirente: 'Banrisul',
      estabelecimento: 'Todos',
      dataCriacao: '06/02/2025',
      periodo: '21/01 a 21/01/25',
      previsto: 'R$7,50',
      recebido: 'R$19.812,00',
      diferenca: 'R$19.804,50',
      conciliado: 'NÃO CONCILIADO',
      contaCorrente: 'Ag:1142 - CC:615714929',
      banco: 'Banrisul'
    },
    {
      id: '9265',
      adquirente: 'Banrisul',
      estabelecimento: 'Todos',
      dataCriacao: '06/02/2025',
      periodo: '22/01 a 22/01/25',
      previsto: 'R$13,12',
      recebido: 'R$1.312,00',
      diferenca: 'R$1.298,88',
      conciliado: 'NÃO CONCILIADO',
      contaCorrente: 'Ag:1142 - CC:615714929',
      banco: 'Banrisul'
    },
    {
      id: '9266',
      adquirente: 'Banrisul',
      estabelecimento: 'Todos',
      dataCriacao: '06/02/2025',
      periodo: '23/01 a 23/01/25',
      previsto: 'R$435,90',
      recebido: 'R$43.590,00',
      diferenca: 'R$43.154,10',
      conciliado: 'NÃO CONCILIADO',
      contaCorrente: 'Ag:1142 - CC:615714902',
      banco: 'Banrisul'
    }
  ];
  
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-danger">Conciliação Bancária</h2>
          <div className="d-flex gap-2">
            <Button variant="primary" className="d-flex align-items-center gap-2">
              <FaFileImport /> IMPORTAR EXTRATO
            </Button>
            <Button variant="secondary" className="d-flex align-items-center gap-2">
              <FaPrint /> EXPORTAR
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

          <div className="mb-3">
            <Button
              variant="link"
              className="p-0 text-decoration-none"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            >
              {showAdvancedFilters ? '▼' : '▶'} Mostrar filtros avançados
            </Button>
          </div>

          <div className="d-flex gap-2">
            <Button variant="primary" className="d-flex align-items-center gap-2">
              <FaSync /> ATUALIZAR
            </Button>
            <Button variant="success" className="d-flex align-items-center gap-2">
              ADICIONAR LOTE
            </Button>
          </div>
        </Form>

        <div className="table-container">
          <div className="table-scroll">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ações</th>
                  <th>Nº Lote</th>
                  <th>Adquirente</th>
                  <th>Estabelecimento</th>
                  <th>Data Criação</th>
                  <th>Período</th>
                  <th>Previsto</th>
                  <th>Recebido</th>
                  <th>Diferença</th>
                  <th>Conciliado</th>
                  <th>Conta Corrente</th>
                  <th>Banco</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <Button variant="light" size="sm">AÇÕES</Button>
                    </td>
                    <td>{row.id}</td>
                    <td>
                      <img src="/banrisul-logo.png" alt="Banrisul" className="bank-logo" />
                      {row.adquirente}
                    </td>
                    <td>{row.estabelecimento}</td>
                    <td>{row.dataCriacao}</td>
                    <td>{row.periodo}</td>
                    <td>{row.previsto}</td>
                    <td>{row.recebido}</td>
                    <td>{row.diferenca}</td>
                    <td>
                      <span className="status-badge not-reconciled">
                        {row.conciliado}
                      </span>
                    </td>
                    <td>{row.contaCorrente}</td>
                    <td>{row.banco}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ConciliacaoBancaria;
