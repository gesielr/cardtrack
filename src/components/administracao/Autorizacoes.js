import React from 'react';
import { Card, Table, Button, Form } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Autorizacoes = () => {
  return (
    <div>
      <h3 className="text-danger mb-4">Autorizações</h3>
      
      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between mb-4">
            <Button variant="success">
              <FaPlus className="me-2" />
              Nova Autorização
            </Button>
            
            <Form.Group style={{ width: '300px' }}>
              <Form.Control
                type="text"
                placeholder="Pesquisar autorizações..."
              />
            </Form.Group>
          </div>

          <Table striped bordered hover responsive>
            <thead className="bg-light">
              <tr>
                <th>Perfil</th>
                <th>Descrição</th>
                <th>Módulos</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Administrador</td>
                <td>Acesso total ao sistema</td>
                <td>Todos</td>
                <td>Ativo</td>
                <td>
                  <Button variant="primary" size="sm" className="me-2">
                    <FaEdit />
                  </Button>
                  <Button variant="danger" size="sm">
                    <FaTrash />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Operador</td>
                <td>Acesso limitado a operações</td>
                <td>Vendas, Recebíveis</td>
                <td>Ativo</td>
                <td>
                  <Button variant="primary" size="sm" className="me-2">
                    <FaEdit />
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

export default Autorizacoes;
