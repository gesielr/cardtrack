import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaFileExport, FaPrint, FaQuestionCircle } from 'react-icons/fa';
import logo from '../../assets/logocardtrack.png';

const RelatorioResumoOperacional = () => {
  const [mes, setMes] = useState('Janeiro');
  const [ano, setAno] = useState('2024');

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const anos = ['2024', '2023', '2022'];

  return (
    <Container fluid className="p-3 bg-white rounded shadow-sm">
      <h3 className="mb-4 text-danger">Relatório Resumo Operacional</h3>
      
      {/* Filtros */}
      <Row className="mb-4 align-items-end">
        <Col md={2}>
          <Form.Group>
            <Form.Label>Mês</Form.Label>
            <Form.Select 
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              className="bg-white"
            >
              {meses.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Ano</Form.Label>
            <Form.Select 
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              className="bg-white"
            >
              {anos.map(a => (
                <option key={a} value={a}>{a}</option>
              ))}
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
        <Col md={3}>
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

      {/* Cabeçalho do Relatório */}
      <div className="text-center mb-4">
        <h4 className="text-primary">RELATÓRIO RESUMO OPERACIONAL</h4>
        <div className="d-flex justify-content-between align-items-center">
          <div>PERÍODO: JANEIRO - 2024</div>
          <img src={logo} alt="CardTrack" height="30" />
        </div>
      </div>

      {/* Seções do Relatório */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="d-flex justify-content-between align-items-center bg-light">
              <h6 className="mb-0 text-primary">Vendas no Período</h6>
              <FaQuestionCircle className="text-muted" />
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Débito:</span>
                <span className="text-primary">R$558.795,68</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Crédito:</span>
                <span className="text-primary">R$213.507,19</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>C. Parcelado:</span>
                <span className="text-primary">R$775.727,43</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Cancelamentos:</span>
                <span className="text-danger">-R$3.208,35</span>
              </div>
              <div className="d-flex justify-content-between border-top pt-2">
                <strong>Total</strong>
                <strong className="text-primary">R$1.544.821,95</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="d-flex justify-content-between align-items-center bg-light">
              <h6 className="mb-0 text-primary">% no Período</h6>
              <FaQuestionCircle className="text-muted" />
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Débito:</span>
                <span>36,17%</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Crédito:</span>
                <span>13,82%</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>C. Parcelado:</span>
                <span>50,21%</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="d-flex justify-content-between align-items-center bg-light">
              <h6 className="mb-0 text-primary">Taxas</h6>
              <FaQuestionCircle className="text-muted" />
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Débito:</span>
                <span className="text-primary">R$4.623,25</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Crédito:</span>
                <span className="text-primary">R$4.106,35</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>C. Parcelado:</span>
                <span className="text-primary">R$17.326,98</span>
              </div>
              <div className="d-flex justify-content-between border-top pt-2">
                <strong>Total</strong>
                <strong className="text-primary">R$26.056,58</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Segunda linha de cards */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="d-flex justify-content-between align-items-center bg-light">
              <h6 className="mb-0 text-primary">A Receber no Período</h6>
              <FaQuestionCircle className="text-muted" />
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Débito:</span>
                <span className="text-primary">R$565.700,69</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Crédito:</span>
                <span className="text-primary">R$259.751,87</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>C. Parcelado:</span>
                <span className="text-primary">R$945.000,54</span>
              </div>
              <div className="d-flex justify-content-between border-top pt-2">
                <strong>Total</strong>
                <strong className="text-primary">R$1.770.453,10</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="d-flex justify-content-between align-items-center bg-light">
              <h6 className="mb-0 text-primary">Recebidos no Período</h6>
              <FaQuestionCircle className="text-muted" />
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Débito:</span>
                <span className="text-primary">R$564.993,18</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Crédito:</span>
                <span className="text-primary">R$259.751,87</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>C. Parcelado:</span>
                <span className="text-primary">R$945.049,55</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Despesas:</span>
                <span className="text-danger">-R$51,66</span>
              </div>
              <div className="d-flex justify-content-between border-top pt-2">
                <strong>Total</strong>
                <strong className="text-primary">R$1.769.742,94</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="d-flex justify-content-between align-items-center bg-light">
              <h6 className="mb-0 text-primary">Saldo Receber Período</h6>
              <FaQuestionCircle className="text-muted" />
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Débito:</span>
                <span className="text-primary">R$0,00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Crédito:</span>
                <span className="text-primary">R$0,00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>C. Parcelado:</span>
                <span className="text-primary">R$0,00</span>
              </div>
              <div className="d-flex justify-content-between border-top pt-2">
                <strong>Total</strong>
                <strong className="text-primary">R$0,00</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Terceira linha de cards */}
      <Row>
        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="d-flex justify-content-between align-items-center bg-light">
              <h6 className="mb-0 text-primary">A Receber Vencido</h6>
              <FaQuestionCircle className="text-muted" />
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Débito:</span>
                <span className="text-primary">R$0,00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Crédito:</span>
                <span className="text-primary">R$0,00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>C. Parcelado:</span>
                <span className="text-primary">R$0,00</span>
              </div>
              <div className="d-flex justify-content-between border-top pt-2">
                <strong>Total</strong>
                <strong className="text-primary">R$0,00</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="d-flex justify-content-between align-items-center bg-light">
              <h6 className="mb-0 text-primary">Total A Receber na Data</h6>
              <FaQuestionCircle className="text-muted" />
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Débito:</span>
                <span className="text-primary">R$45.800,74</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Crédito:</span>
                <span className="text-primary">R$186.622,74</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>C. Parcelado:</span>
                <span className="text-primary">R$2.522.360,93</span>
              </div>
              <div className="d-flex justify-content-between border-top pt-2">
                <strong>Total</strong>
                <strong className="text-primary">R$2.754.784,41</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="d-flex justify-content-between align-items-center bg-light">
              <h6 className="mb-0 text-primary">Inconsistências</h6>
              <FaQuestionCircle className="text-muted" />
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Venda:</span>
                <span className="text-primary">R$0,00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Taxa:</span>
                <span className="text-primary">R$0,00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Banco:</span>
                <span className="text-primary">R$0,00</span>
              </div>
              <div className="d-flex justify-content-between border-top pt-2">
                <strong>Total</strong>
                <strong className="text-primary">R$0,00</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Botão de Impressão */}
      <div className="text-end mt-4">
        <Button variant="light" className="border">
          <FaPrint className="me-2" />
          Imprimir
        </Button>
      </div>
    </Container>
  );
};

export default RelatorioResumoOperacional;
