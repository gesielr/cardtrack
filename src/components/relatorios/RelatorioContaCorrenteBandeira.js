import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table, Card } from 'react-bootstrap';
import { FaSearch, FaFileExcel } from 'react-icons/fa';

const RelatorioContaCorrenteBandeira = () => {
  const [filtros, setFiltros] = useState({
    dataInicial: '',
    dataFinal: '',
    bandeira: '',
    estabelecimento: '',
    status: ''
  });

  // Dados mockados para demonstração
  const dadosMock = [
    {
      data: '2024-01-15',
      bandeira: 'Visa',
      contaCorrente: '1234-5',
      estabelecimento: 'Loja 1',
      valorBruto: 1500.00,
      taxas: 45.00,
      valorLiquido: 1455.00,
      status: 'Liquidado'
    },
    {
      data: '2024-01-16',
      bandeira: 'Mastercard',
      contaCorrente: '1234-6',
      estabelecimento: 'Loja 2',
      valorBruto: 2300.00,
      taxas: 69.00,
      valorLiquido: 2231.00,
      status: 'Pendente'
    }
  ];

  const handleFiltroChange = (campo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const handleGerarRelatorio = () => {
    // Aqui seria implementada a lógica de filtragem real
    console.log('Filtros aplicados:', filtros);
  };

  return (
    <Container fluid className="p-3">
      <Card className="shadow-sm">
        <Card.Body>
          <h3 className="text-danger mb-4">Relatório de Conta Corrente por Bandeira</h3>
          
          {/* Filtros */}
          <Card className="mb-4 bg-light">
            <Card.Body>
              <Row className="mb-3">
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Data Inicial</Form.Label>
                    <Form.Control 
                      type="date" 
                      value={filtros.dataInicial}
                      onChange={(e) => handleFiltroChange('dataInicial', e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Data Final</Form.Label>
                    <Form.Control 
                      type="date" 
                      value={filtros.dataFinal}
                      onChange={(e) => handleFiltroChange('dataFinal', e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Bandeira</Form.Label>
                    <Form.Select
                      value={filtros.bandeira}
                      onChange={(e) => handleFiltroChange('bandeira', e.target.value)}
                    >
                      <option value="">Todas</option>
                      <option value="visa">Visa</option>
                      <option value="mastercard">Mastercard</option>
                      <option value="elo">Elo</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Estabelecimento</Form.Label>
                    <Form.Select
                      value={filtros.estabelecimento}
                      onChange={(e) => handleFiltroChange('estabelecimento', e.target.value)}
                    >
                      <option value="">Todos</option>
                      <option value="loja1">Loja 1</option>
                      <option value="loja2">Loja 2</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      value={filtros.status}
                      onChange={(e) => handleFiltroChange('status', e.target.value)}
                    >
                      <option value="">Todos</option>
                      <option value="liquidado">Liquidado</option>
                      <option value="pendente">Pendente</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={9} className="d-flex align-items-end justify-content-end">
                  <Button variant="success" className="me-2" onClick={handleGerarRelatorio}>
                    <FaSearch className="me-2" />
                    Gerar Relatório
                  </Button>
                  <Button variant="outline-primary">
                    <FaFileExcel className="me-2" />
                    Exportar Excel
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Tabela de Resultados */}
          <Table striped bordered hover responsive className="bg-white">
            <thead className="bg-light">
              <tr>
                <th>Data</th>
                <th>Bandeira</th>
                <th>Conta Corrente</th>
                <th>Estabelecimento</th>
                <th>Valor Bruto</th>
                <th>Taxas</th>
                <th>Valor Líquido</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dadosMock.map((item, index) => (
                <tr key={index}>
                  <td>{item.data}</td>
                  <td>{item.bandeira}</td>
                  <td>{item.contaCorrente}</td>
                  <td>{item.estabelecimento}</td>
                  <td>R$ {item.valorBruto.toFixed(2)}</td>
                  <td>R$ {item.taxas.toFixed(2)}</td>
                  <td>R$ {item.valorLiquido.toFixed(2)}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RelatorioContaCorrenteBandeira;
