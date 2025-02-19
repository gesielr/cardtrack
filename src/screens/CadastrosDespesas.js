import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Table, Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import './CadastrosDespesas.css';

const CadastrosDespesas = () => {
  const [selectedAdquirente, setSelectedAdquirente] = useState('CIELO');
  const [selectedEstabelecimento, setSelectedEstabelecimento] = useState('Todos');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDespesa, setNewDespesa] = useState({
    estabelecimento: 'Todos',
    adquirente: 'Todos',
    valor: ''
  });

  // Lista de adquirentes disponíveis
  const adquirentes = ['CIELO', 'REDECARD', 'STONE', 'BANRISUL'];

  // Lista de estabelecimentos disponíveis
  const estabelecimentos = ['Todos', 'Loja Matriz', 'Loja Imbituba', 'BNDES', 'Loja Centro'];

  // Dados de exemplo
  const [despesas, setDespesas] = useState([
    {
      id: 1,
      adquirente: 'CIELO',
      estabelecimento: 'Loja Matriz',
      valor: '150,00'
    },
    {
      id: 2,
      adquirente: 'CIELO',
      estabelecimento: 'Loja Centro',
      valor: '200,00'
    }
  ]);

  const handleAdquirenteChange = (e) => {
    setSelectedAdquirente(e.target.value);
  };

  const handleEstabelecimentoChange = (e) => {
    setSelectedEstabelecimento(e.target.value);
  };

  const handleNewDespesaChange = (e) => {
    const { name, value } = e.target;
    setNewDespesa(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddNew = () => {
    const newId = Math.max(...despesas.map(d => d.id)) + 1;
    const novaDespesa = {
      id: newId,
      ...newDespesa
    };
    
    setDespesas([...despesas, novaDespesa]);
    setShowAddModal(false);
    setNewDespesa({
      estabelecimento: 'Todos',
      adquirente: 'Todos',
      valor: ''
    });
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-danger">Despesas Adquirentes</h2>
          <Button 
            variant="primary" 
            className="d-flex align-items-center gap-2"
            onClick={() => setShowAddModal(true)}
          >
            <FaPlus /> ADICIONAR
          </Button>
        </div>

        <div className="filtros-container mb-4">
          <div className="row">
            <div className="col-md-3">
              <Form.Group>
                <Form.Label>Adquirente</Form.Label>
                <Form.Select value={selectedAdquirente} onChange={handleAdquirenteChange}>
                  {adquirentes.map((adq, index) => (
                    <option key={index} value={adq}>{adq}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <Form.Label>Estabelecimento</Form.Label>
                <Form.Select value={selectedEstabelecimento} onChange={handleEstabelecimentoChange}>
                  {estabelecimentos.map((est, index) => (
                    <option key={index} value={est}>{est}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <Button variant="primary">BUSCAR</Button>
            </div>
          </div>
        </div>

        <div className="table-container">
          <div className="table-scroll">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ações</th>
                  <th>Adquirente</th>
                  <th>Estabelecimento</th>
                  <th>Valor Da Taxa</th>
                </tr>
              </thead>
              <tbody>
                {despesas.map((despesa) => (
                  <tr key={despesa.id}>
                    <td style={{ width: '100px' }}>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-actions" className="btn-sm">
                          AÇÕES
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Editar</Dropdown.Item>
                          <Dropdown.Item>Excluir</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>{despesa.adquirente}</td>
                    <td>{despesa.estabelecimento}</td>
                    <td>{despesa.valor}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        {/* Modal de Adição */}
        <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
          <Modal.Header>
            <Modal.Title>Criar Nova Despesa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Estabelecimento</Form.Label>
                <Form.Select
                  name="estabelecimento"
                  value={newDespesa.estabelecimento}
                  onChange={handleNewDespesaChange}
                >
                  {estabelecimentos.map((est, index) => (
                    <option key={index} value={est}>{est}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Adquirente</Form.Label>
                <Form.Select
                  name="adquirente"
                  value={newDespesa.adquirente}
                  onChange={handleNewDespesaChange}
                >
                  {adquirentes.map((adq, index) => (
                    <option key={index} value={adq}>{adq}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Valor</Form.Label>
                <Form.Control
                  type="text"
                  name="valor"
                  value={newDespesa.valor}
                  onChange={handleNewDespesaChange}
                  placeholder="Digite o valor"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAddModal(false)}>
              FECHAR
            </Button>
            <Button variant="primary" onClick={handleAddNew}>
              SALVAR
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default CadastrosDespesas;
