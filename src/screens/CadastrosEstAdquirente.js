import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Table, Button, Dropdown, Modal, Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import './CadastrosEstAdquirente.css';

const CadastrosEstAdquirente = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedEstAdquirente, setSelectedEstAdquirente] = useState(null);
  const [formData, setFormData] = useState({
    estabelecimento: '',
    adquirente: '',
    codigo: '',
    cnpj: ''
  });
  const [newEstAdquirente, setNewEstAdquirente] = useState({
    estabelecimento: 'Todos',
    adquirente: 'Todos',
    codigo: '',
    cnpj: ''
  });

  // Lista de estabelecimentos disponíveis
  const estabelecimentos = [
    'Loja Matriz',
    'Loja Imbituba',
    'BNDES',
    'Loja Centro'
  ];

  // Lista de adquirentes disponíveis
  const adquirentes = [
    'Todos',
    'CIELO',
    'REDECARD',
    'STONE',
    'BANRISUL',
    'BIN',
    'AMEX',
    'GETNET',
    'SIPAG',
    'GOODCARD',
    'SODEXO',
    'TICKET',
    'VR',
    'ELAVON',
    'SAFRAPAY',
    'CONVCARD',
    'CALCARD',
    'PAGSEGURO',
    'SICREDI'
  ];

  // Dados de exemplo
  const [estAdquirentes, setEstAdquirentes] = useState([
    {
      id: 1,
      adquirente: 'CIELO',
      estabelecimento: 'Loja Matriz',
      codigo: '1038087624',
      cnpj: '04569913000184'
    },
    {
      id: 2,
      adquirente: 'CIELO',
      estabelecimento: 'Loja Imbituba',
      codigo: '1036669081',
      cnpj: '04569913000346'
    },
    {
      id: 3,
      adquirente: 'CIELO',
      estabelecimento: 'BNDES',
      codigo: '1033042835',
      cnpj: '04569913000265'
    },
    {
      id: 4,
      adquirente: 'BANRISUL',
      estabelecimento: 'Loja Matriz',
      codigo: '2660',
      cnpj: '04569913000184'
    },
    {
      id: 5,
      adquirente: 'BANRISUL',
      estabelecimento: 'Loja Centro',
      codigo: '2661',
      cnpj: '04569913000265'
    }
  ]);

  const handleEdit = (estAdquirente) => {
    setSelectedEstAdquirente(estAdquirente);
    setFormData({
      estabelecimento: estAdquirente.estabelecimento,
      adquirente: estAdquirente.adquirente,
      codigo: estAdquirente.codigo,
      cnpj: estAdquirente.cnpj
    });
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedEstAdquirente(null);
    setFormData({
      estabelecimento: '',
      adquirente: '',
      codigo: '',
      cnpj: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (selectedEstAdquirente) {
      const updatedEstAdquirentes = estAdquirentes.map(est =>
        est.id === selectedEstAdquirente.id
          ? { 
              ...est, 
              estabelecimento: formData.estabelecimento, 
              adquirente: formData.adquirente, 
              codigo: formData.codigo, 
              cnpj: formData.cnpj 
            }
          : est
      );
  
      setEstAdquirentes(updatedEstAdquirentes);
      handleCloseModal();
    }
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setNewEstAdquirente({
      estabelecimento: 'Todos',
      adquirente: 'Todos',
      codigo: '',
      cnpj: ''
    });
  };

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewEstAdquirente(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdd = () => {
    const newId = Math.max(...estAdquirentes.map(est => est.id)) + 1;
    const novoEstAdquirente = {
      id: newId,
      ...newEstAdquirente
    };
    
    setEstAdquirentes([...estAdquirentes, novoEstAdquirente]);
    handleCloseAddModal();
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-danger">Estabelecimento - Adquirente Cadastro</h2>
          <Button 
            variant="primary" 
            className="d-flex align-items-center gap-2"
            onClick={() => setShowAddModal(true)}
          >
            <FaPlus /> ADICIONAR
          </Button>
        </div>

        <div className="table-container">
          <div className="table-scroll">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ações</th>
                  <th>Adquirente</th>
                  <th>Estabelecimento</th>
                  <th>Código</th>
                  <th>CNPJ</th>
                </tr>
              </thead>
              <tbody>
                {estAdquirentes.map((estAdquirente) => (
                  <tr key={estAdquirente.id}>
                    <td style={{ width: '100px' }}>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-actions" className="btn-sm">
                          AÇÕES
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => handleEdit(estAdquirente)}>
                            Editar
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>{estAdquirente.adquirente}</td>
                    <td>{estAdquirente.estabelecimento}</td>
                    <td>{estAdquirente.codigo}</td>
                    <td>{estAdquirente.cnpj}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        {/* Modal de Edição */}
        <Modal show={showEditModal} onHide={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Editar Estabelecimento: {selectedEstAdquirente?.codigo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Estabelecimento</Form.Label>
                <Form.Select
                  name="estabelecimento"
                  value={formData.estabelecimento}
                  onChange={handleInputChange}
                >
                  {estabelecimentos.map((est, index) => (
                    <option key={index} value={est}>
                      {est}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Adquirente</Form.Label>
                <Form.Select
                  name="adquirente"
                  value={formData.adquirente}
                  onChange={handleInputChange}
                >
                  {adquirentes.map((adq, index) => (
                    <option key={index} value={adq}>
                      {adq}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Código</Form.Label>
                <Form.Control
                  type="text"
                  name="codigo"
                  value={formData.codigo}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control
                  type="text"
                  name="cnpj"
                  value={formData.cnpj}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              FECHAR
            </Button>
            <Button variant="primary" onClick={handleSave}>
              SALVAR
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal de Adição */}
        <Modal show={showAddModal} onHide={handleCloseAddModal}>
          <Modal.Header>
            <Modal.Title>Criar novo Estabelecimento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Estabelecimento</Form.Label>
                <Form.Select
                  name="estabelecimento"
                  value={newEstAdquirente.estabelecimento}
                  onChange={handleAddInputChange}
                >
                  <option value="Todos">Todos</option>
                  {estabelecimentos.map((est, index) => (
                    <option key={index} value={est}>
                      {est}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Adquirente</Form.Label>
                <Form.Select
                  name="adquirente"
                  value={newEstAdquirente.adquirente}
                  onChange={handleAddInputChange}
                >
                  {adquirentes.map((adq, index) => (
                    <option key={index} value={adq}>
                      {adq}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nº Estabelecimento</Form.Label>
                <Form.Control
                  type="text"
                  name="codigo"
                  value={newEstAdquirente.codigo}
                  onChange={handleAddInputChange}
                  placeholder="Digite o número do estabelecimento"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control
                  type="text"
                  name="cnpj"
                  value={newEstAdquirente.cnpj}
                  onChange={handleAddInputChange}
                  placeholder="Digite o CNPJ"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddModal}>
              FECHAR
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              SALVAR
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default CadastrosEstAdquirente;
