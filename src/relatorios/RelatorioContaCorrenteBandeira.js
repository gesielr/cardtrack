import React from 'react';
import { Container, Card } from 'react-bootstrap';

const RelatorioContaCorrenteBandeira = () => {
  return (
    <Container className="py-4">
      <Card>
        <Card.Header className="bg-primary text-white">
          <h4 className="mb-0">Relatório de Conta Corrente por Bandeira</h4>
        </Card.Header>
        <Card.Body>
          {/* Conteúdo do relatório aqui */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RelatorioContaCorrenteBandeira;
