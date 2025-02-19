import React, { useState } from 'react';
import { Table, Button, Modal, Form, Dropdown } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';

const ExcecaoExtratos = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [textoExcluido, setTextoExcluido] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [dados, setDados] = useState([
    { id: 1, texto: 'TRF TITULO PAGO' },
    { id: 2, texto: 'ARNEC' },
    { id: 3, texto: 'CESTA PI' },
    { id: 4, texto: 'BB' },
    { id: 5, texto: 'TRF' },
    { id: 6, texto: 'DFP' },
    { id: 7, texto: 'TRANSF' },
    { id: 8, texto: 'TAR' },
    { id: 9, texto: 'SAQUE RECIBO AVULSO' },
    { id: 10, texto: 'MENSALIDADE PACOTE' }
  ]);

  // Modal de Adição
  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setTextoExcluido('');
  };

  const handleAdd = () => {
    if (textoExcluido.trim()) {
      const newItem = {
        id: dados.length + 1,
        texto: textoExcluido
      };
      setDados([...dados, newItem]);
      handleCloseAddModal();
    }
  };

  // Modal de Edição
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setTextoExcluido('');
    setSelectedItem(null);
  };

  const handleEdit = () => {
    if (textoExcluido.trim() && selectedItem) {
      const newDados = dados.map(item => 
        item.id === selectedItem.id ? { ...item, texto: textoExcluido } : item
      );
      setDados(newDados);
      handleCloseEditModal();
    }
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setTextoExcluido(item.texto);
    setShowEditModal(true);
  };

  // Modal de Exclusão
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedItem(null);
  };

  const handleDelete = () => {
    if (selectedItem) {
      const newDados = dados.filter(item => item.id !== selectedItem.id);
      setDados(newDados);
      handleCloseDeleteModal();
    }
  };

  const openDeleteModal = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: '80px' }}>Ações</th>
            <th>Texto Excluído</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="light" size="sm" id={`dropdown-${item.id}`}>
                    <FaCog /> AÇÕES
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => openEditModal(item)}>Editar</Dropdown.Item>
                    <Dropdown.Item onClick={() => openDeleteModal(item)}>Excluir</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>{item.texto}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button 
        variant="primary" 
        className="mt-3"
        onClick={() => setShowAddModal(true)}
      >
        + ADICIONAR
      </Button>

      {/* Modal para adicionar novo texto excluído */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Criar nova Exceção de Extrato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Texto excluído</Form.Label>
              <Form.Control
                type="text"
                value={textoExcluido}
                onChange={(e) => setTextoExcluido(e.target.value)}
                placeholder="Digite o texto"
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

      {/* Modal para editar texto excluído */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Exceção de Extrato: {selectedItem?.texto}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Texto excluído</Form.Label>
              <Form.Control
                type="text"
                value={textoExcluido}
                onChange={(e) => setTextoExcluido(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            FECHAR
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            SALVAR
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de confirmação de exclusão */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Você tem certeza?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Exceção de Extrato {selectedItem?.texto} vai ser deletado.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExcecaoExtratos;
