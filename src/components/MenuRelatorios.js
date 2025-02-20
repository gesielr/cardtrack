import React from 'react';
import { Nav, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';

const MenuRelatorios = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <FaFileAlt className="me-2" />
          Relatórios
        </Accordion.Header>
        <Accordion.Body className="p-0">
          <Nav className="flex-column">
            <Nav.Link 
              as={Link} 
              to="/relatorio-conciliacao-vendas"
              className="py-2 ps-4"
            >
              Conciliação de Vendas
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/relatorio-conta-corrente-bandeira"
              className="py-2 ps-4"
            >
              Conta Corrente por Bandeira
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/relatorio-recebiveis"
              className="py-2 ps-4"
            >
              Recebíveis
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/relatorio-resumo-operacional"
              className="py-2 ps-4"
            >
              Resumo Operacional
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/relatorio-taxas"
              className="py-2 ps-4"
            >
              Taxas
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/relatorio-vendas"
              className="py-2 ps-4"
            >
              Vendas
            </Nav.Link>
          </Nav>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MenuRelatorios;
