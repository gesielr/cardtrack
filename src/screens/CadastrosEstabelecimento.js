import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Table, Button, Dropdown, Modal, Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import './CadastrosEstabelecimento.css';

const CadastrosEstabelecimento = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedEstabelecimento, setSelectedEstabelecimento] = useState(null);
  const [formData, setFormData] = useState({ nome: '', cnpj: '' });
  const [newEstabelecimento, setNewEstabelecimento] = useState({ nome: '', cnpj: '' });
  const [estabelecimentos, setEstabelecimentos] = useState([
    {
      id: '1038087624',
      nome: 'Loja Matriz',
      cnpj: '04569913000184'
    },
    {
      id: '1036669081',
      nome: 'Loja Imbiruiba',
      cnpj: '04569913000346'
    },
    {
      id: '1033042835',
      nome: 'INNPEG',
      cnpj: '04569913000265'
    },
    {
      id: '1029528567',
      nome: 'Loja Centro',
      cnpj: '04569913000265'
    },
    {
      id: '0',
      nome: 'PAGTRACK',
      cnpj: '045699130001840'
    }
  ]);

  const handleEdit = (estabelecimento) => {
    setSelectedEstabelecimento(estabelecimento);
    setFormData({
      nome: estabelecimento.nome,
      cnpj: estabelecimento.cnpj
    });
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedEstabelecimento(null);
    setFormData({ nome: '', cnpj: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (selectedEstabelecimento) {
      // Atualiza o estabelecimento na lista
      const updatedEstabelecimentos = estabelecimentos.map(est => 
        est.id === selectedEstabelecimento.id
          ? { ...est, nome: formData.nome, cnpj: formData.cnpj }
          : est
      );
      
      setEstabelecimentos(updatedEstabelecimentos);
      handleCloseModal();
    }
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setNewEstabelecimento({ nome: '', cnpj: '' });
  };

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewEstabelecimento(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdd = () => {
    const newId = Math.max(...estabelecimentos.map(e => Number(e.id))) + 1;
    const novoEstabelecimento = {
      id: newId.toString(),
      ...newEstabelecimento
    };
    
    setEstabelecimentos([...estabelecimentos, novoEstabelecimento]);
    handleCloseAddModal();
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-danger">Estabelecimento Cadastro</h2>
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
                  <th>Nº Estabelecimento</th>
                  <th>Nome</th>
                  <th>CNPJ</th>
                </tr>
              </thead>
              <tbody>
                {estabelecimentos.map((estabelecimento) => (
                  <tr key={estabelecimento.id}>
                    <td style={{ width: '100px' }}>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-actions" className="btn-sm">
                          AÇÕES
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => handleEdit(estabelecimento)}>
                            Editar
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>{estabelecimento.id}</td>
                    <td>{estabelecimento.nome}</td>
                    <td>{estabelecimento.cnpj}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        {/* Modal de Edição */}
        <Modal show={showEditModal} onHide={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Editar Estabelecimento: {selectedEstabelecimento?.nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={formData.nome}
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
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={newEstabelecimento.nome}
                  onChange={handleAddInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control
                  type="text"
                  name="cnpj"
                  value={newEstabelecimento.cnpj}
                  onChange={handleAddInputChange}
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

export default CadastrosEstabelecimento;
