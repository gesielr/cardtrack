import React from 'react';
import { Card, Table, Button, Form } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaUserLock } from 'react-icons/fa';

const Usuarios = () => {
  return (
    <div>
      <h3 className="text-danger mb-4">Usuários</h3>
      
      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between mb-4">
            <Button variant="success">
              <FaPlus className="me-2" />
              Novo Usuário
            </Button>
            
            <Form.Group style={{ width: '300px' }}>
              <Form.Control
                type="text"
                placeholder="Pesquisar usuários..."
              />
            </Form.Group>
          </div>

          <Table striped bordered hover responsive>
            <thead className="bg-light">
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Perfil</th>
                <th>Último Acesso</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>João Silva</td>
                <td>joao.silva@email.com</td>
                <td>Administrador</td>
                <td>18/02/2024 15:30</td>
                <td>Ativo</td>
                <td>
                  <Button variant="primary" size="sm" className="me-2">
                    <FaEdit />
                  </Button>
                  <Button variant="warning" size="sm" className="me-2">
                    <FaUserLock />
                  </Button>
                  <Button variant="danger" size="sm">
                    <FaTrash />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Maria Santos</td>
                <td>maria.santos@email.com</td>
                <td>Operador</td>
                <td>18/02/2024 14:45</td>
                <td>Ativo</td>
                <td>
                  <Button variant="primary" size="sm" className="me-2">
                    <FaEdit />
                  </Button>
                  <Button variant="warning" size="sm" className="me-2">
                    <FaUserLock />
                  </Button>
                  <Button variant="danger" size="sm">
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Usuarios;
