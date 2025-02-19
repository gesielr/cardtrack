import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Table, Button, Dropdown, Form, Modal } from 'react-bootstrap';
import './CadastrosDadosBancarios.css';
import { FaPlus } from 'react-icons/fa';

const CadastrosDadosBancarios = () => {
  const [selectedEstabelecimento, setSelectedEstabelecimento] = useState('Todos');
  const [selectedAdquirente, setSelectedAdquirente] = useState('Todos');
  const [selectedBandeira, setSelectedBandeira] = useState('Todos');
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedConta, setSelectedConta] = useState(null);

  // Lista de estabelecimentos disponíveis
  const estabelecimentos = ['Todos', 'Loja Matriz', 'Loja Imbituba', 'BNDES', 'Loja Centro'];

  // Lista de adquirentes disponíveis
  const adquirentes = ['Todos', 'CIELO', 'REDECARD', 'STONE', 'BANRISUL'];

  // Lista de bandeiras disponíveis
  const bandeiras = ['Todos', 'VISA', 'MASTERCARD', 'DINERS', 'ELO', 'AMEX'];

  // Dados de exemplo
  const contas = [
    {
      id: 1,
      banco: 'Caixa E. Federal',
      agencia: '01075',
      nome: 'Ag:1075 - CC:2283-3'
    },
    {
      id: 2,
      banco: 'Caixa E. Federal',
      agencia: '01075',
      nome: 'Ag:1075 - CC:2488-7'
    },
    {
      id: 3,
      banco: 'Banco do Brasil',
      agencia: '03674',
      nome: 'Ag:3674 - CC:17713-1'
    },
    {
      id: 4,
      banco: 'Banrisul',
      agencia: '1142',
      nome: 'Ag:1142 - CC:61571492'
    }
  ];

  const handleEstabelecimentoChange = (e) => {
    setSelectedEstabelecimento(e.target.value);
  };

  const handleAdquirenteChange = (e) => {
    setSelectedAdquirente(e.target.value);
  };

  const handleBandeiraChange = (e) => {
    setSelectedBandeira(e.target.value);
  };

  const handleShowDetails = (conta) => {
    setSelectedConta(conta);
    setShowDetailsModal(true);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-danger">Dados Bancários</h2>
        </div>

        <div className="filtros-container mb-4">
          <div className="row">
            <div className="col-md-4">
              <Form.Group>
                <Form.Label>Estabelecimento</Form.Label>
                <Form.Select value={selectedEstabelecimento} onChange={handleEstabelecimentoChange}>
                  {estabelecimentos.map((est, index) => (
                    <option key={index} value={est}>{est}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group>
                <Form.Label>Adquirente</Form.Label>
                <Form.Select value={selectedAdquirente} onChange={handleAdquirenteChange}>
                  {adquirentes.map((adq, index) => (
                    <option key={index} value={adq}>{adq}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group>
                <Form.Label>Bandeira</Form.Label>
                <Form.Select value={selectedBandeira} onChange={handleBandeiraChange}>
                  {bandeiras.map((band, index) => (
                    <option key={index} value={band}>{band}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
          </div>
        </div>

        <div className="table-container">
          <div className="table-scroll">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ações</th>
                  <th>Banco</th>
                  <th>Agência</th>
                  <th>Nome</th>
                </tr>
              </thead>
              <tbody>
                {contas.map((conta) => (
                  <tr key={conta.id}>
                    <td style={{ width: '100px' }}>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-actions" className="btn-sm">
                          AÇÕES
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => handleShowDetails(conta)}>
                            Detalhes
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>{conta.banco}</td>
                    <td>{conta.agencia}</td>
                    <td>{conta.nome}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        {/* Modal de Detalhes */}
        <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)} size="lg">
          <Modal.Header>
            <Modal.Title>Conta Corrente: {selectedConta?.nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="row w-100">
                <div className="col-md-4">
                  <Form.Group>
                    <Form.Label>Estabelecimento</Form.Label>
                    <Form.Select>
                      <option value="Todos">Todos</option>
                      {estabelecimentos.map((est, index) => (
                        <option key={index} value={est}>{est}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group>
                    <Form.Label>Adquirente</Form.Label>
                    <Form.Select>
                      <option value="Todos">Todos</option>
                      {adquirentes.map((adq, index) => (
                        <option key={index} value={adq}>{adq}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group>
                    <Form.Label>Bandeira</Form.Label>
                    <Form.Select>
                      <option value="Todos">Todos</option>
                      {bandeiras.map((band, index) => (
                        <option key={index} value={band}>{band}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div></div>
              <Button variant="primary" className="d-flex align-items-center gap-2">
                <FaPlus /> ADICIONAR
              </Button>
            </div>

            <div className="table-container">
              <div className="table-scroll">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Ações</th>
                      <th>Estabelecimento</th>
                      <th>Adquirente</th>
                      <th>Bandeira</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Dados serão preenchidos dinamicamente */}
                  </tbody>
                </Table>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDetailsModal(false)}>
              FECHAR
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default CadastrosDadosBancarios;
