import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Table, Card, Dropdown } from 'react-bootstrap';
import { FaSearch, FaFilePdf, FaFileExcel, FaCog } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import banrisulLogo from '../assets/banrisulLogo.png';
import cieloLogo from '../assets/cielologo.png';
import visaLogo from '../assets/visaLogo.png';

const VendasPorTransacao = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const dadosTransacoes = [
    {
      id: 1,
      adquirente: { logo:  banrisulLogo },
      bandeira: {logo: visaLogo },
      estabelecimento: 'Loja Matriz',
      nsu: '000004',
      autorizacao: '00953022',
      data: '05/02/2025',
      cartao: 'Não Informado',
      valor: 68.00
    },
    {
      id: 2,
      adquirente: {logo: banrisulLogo },
      bandeira: { logo: visaLogo },
      estabelecimento: 'Loja Matriz',
      nsu: '000003',
      autorizacao: '00812017',
      data: '05/02/2025',
      cartao: 'Não Informado',
      valor: 535.98
    },
    {
      id: 3,
      adquirente: { logo: cieloLogo },
      bandeira: { logo: visaLogo },
      estabelecimento: 'Loja Matriz',
      nsu: '000032',
      autorizacao: 'SW9WVB',
      data: '05/02/2025',
      cartao: '417402****5995',
      valor: 85.84
    },
    {
      id: 4,
      adquirente: {logo: cieloLogo },
      bandeira: { logo: visaLogo },
      estabelecimento: 'Loja Matriz',
      nsu: '000010',
      autorizacao: '130317',
      data: '05/02/2025',
      cartao: '497250****4310',
      valor: 63.71
    },
    {
      id: 5,
      adquirente: { logo: cieloLogo },
      bandeira: {logo: visaLogo },
      estabelecimento: 'Loja Matriz',
      nsu: '000023',
      autorizacao: '234170',
      data: '05/02/2025',
      cartao: '485464****4277',
      valor: 148.41
    },
    {
      id: 6,
      adquirente: { logo: cieloLogo },
      bandeira: {  logo: visaLogo },
      estabelecimento: 'Loja Matriz',
      nsu: '000009',
      autorizacao: '257808',
      data: '05/02/2025',
      cartao: '439267****8723',
      valor: 12.60
    }
  ];

  const totalVendas = dadosTransacoes.reduce((acc, transacao) => acc + transacao.valor, 0);

  const handleExportPDF = () => {
    console.log('Exportando PDF...');
  };

  const handleExportExcel = () => {
    console.log('Exportando Excel...');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '250px', padding: '20px', transition: 'margin-left 0.3s ease' }}>
        <Container fluid>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0" style={{ color: '#dc3545' }}>Vendas Por Transação</h2>
            <div>
              <Button 
                variant="outline-success" 
                className="me-2"
                onClick={handleExportExcel}
              >
                <FaFileExcel className="me-2" />
                Excel
              </Button>
              <Button 
                variant="outline-danger"
                onClick={handleExportPDF}
              >
                <FaFilePdf className="me-2" />
                PDF
              </Button>
            </div>
          </div>

          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Intervalo de datas</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Estabelecimento</Form.Label>
                      <Form.Select>
                        <option>Todos</option>
                        <option>Loja Matriz</option>
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
                      <Form.Label>Est. Adquirente</Form.Label>
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
                      <div className="d-flex">
                        <Form.Control type="number" placeholder="Min" className="me-2" />
                        <Form.Control type="number" placeholder="Max" />
                      </div>
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

                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="link"
                    className="text-decoration-none p-0"
                    onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  >
                    {showAdvancedFilters ? "- Esconder filtros avançados" : "+ Mostrar filtros avançados"}
                  </Button>
                  <Button variant="primary" className="d-flex align-items-center">
                    <FaSearch className="me-2" />
                    BUSCAR
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <div 
            className="p-3 rounded mb-4"
            style={{ 
              display: 'flex', 
              justifyContent: 'center', // Centraliza apenas na horizontal
              backgroundColor: '#0d6efd', // Fundo azul
              color: 'white', // Texto branco
              padding: '15px', // Espaçamento interno maior
              width: '50%',
              margin: '0 auto',
              borderRadius: '10px' // Borda arredondada para melhor aparência
            }}>
            <h4 className="mb-0">Vendas: R${totalVendas.toFixed(2)}</h4>
          </div>


          <Table responsive hover className="bg-white shadow-sm text-center">
  <thead>
    <tr style={{ borderBottom: '2px solid #dee2e6' }}>
      <th className="align-middle">Ações</th>
      <th className="align-middle">Adquirente</th>
      <th className="align-middle">Bandeira</th>
      <th className="align-middle">Estabelecimento</th>
      <th className="align-middle">NSU</th>
      <th className="align-middle">Autorização</th>
      <th className="align-middle">Data</th>
      <th className="align-middle">Nº Cartão</th>
      <th className="align-middle">Valor</th>
    </tr>
  </thead>
  <tbody>
    {dadosTransacoes.map((transacao) => (
      <tr key={transacao.id} style={{ borderBottom: '1px solid #dee2e6' }}>
        <td className="align-middle">
          <Dropdown>
            <Dropdown.Toggle variant="light" size="sm">
              <FaCog className="me-1" />
              AÇÕES
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Detalhes</Dropdown.Item>
              <Dropdown.Item>Recebíveis</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
        <td className="align-middle">
          <img 
            src={transacao.adquirente.logo} 
            alt={transacao.adquirente.nome} 
            width="40" height="auto" // Tamanho fixo para evitar desalinhamento
            style={{ marginRight: '10px', verticalAlign: 'middle' }} 
          />
          {transacao.adquirente.nome}
        </td>
        <td className="align-middle">
          <img 
            src={transacao.bandeira.logo} 
            alt={transacao.bandeira.nome} 
            width="40" height="auto"
            style={{ marginRight: '10px', verticalAlign: 'middle' }} 
          />
          {transacao.bandeira.nome}
        </td>
        <td className="align-middle">{transacao.estabelecimento}</td>
        <td className="align-middle">{transacao.nsu}</td>
        <td className="align-middle">{transacao.autorizacao}</td>
        <td className="align-middle">{transacao.data}</td>
        <td className="align-middle">{transacao.cartao}</td>
        <td className="align-middle">R${transacao.valor.toFixed(2)}</td>
      </tr>
    ))}
  </tbody>
</Table>

        </Container>
      </div>
    </div>
  );
};

export default VendasPorTransacao;
