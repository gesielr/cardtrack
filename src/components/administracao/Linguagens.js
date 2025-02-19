import React from 'react';
import { Card, Table, Button, Form } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaGlobe } from 'react-icons/fa';

const Linguagens = () => {
  return (
    <div>
      <h3 className="text-danger mb-4">Linguagens</h3>
      
      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between mb-4">
            <Button variant="success">
              <FaPlus className="me-2" />
              Nova Linguagem
            </Button>
            
            <Form.Group style={{ width: '300px' }}>
              <Form.Control
                type="text"
                placeholder="Pesquisar linguagens..."
              />
            </Form.Group>
          </div>

          <Table striped bordered hover responsive>
            <thead className="bg-light">
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Local</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>pt-BR</td>
                <td>Português (Brasil)</td>
                <td>Brasil</td>
                <td>Ativo</td>
                <td>
                  <Button variant="primary" size="sm" className="me-2">
                    <FaEdit />
                  </Button>
                  <Button variant="info" size="sm" className="me-2">
                    <FaGlobe />
                  </Button>
                  <Button variant="danger" size="sm">
                    <FaTrash />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>en-US</td>
                <td>English (US)</td>
                <td>United States</td>
                <td>Ativo</td>
                <td>
                  <Button variant="primary" size="sm" className="me-2">
                    <FaEdit />
                  </Button>
                  <Button variant="info" size="sm" className="me-2">
                    <FaGlobe />
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

export default Linguagens;
