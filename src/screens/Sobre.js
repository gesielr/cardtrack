import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Sobre.css';

export default function Sobre() {
  return (
    <div className="sobre-container" style={{ overflowY: 'auto', height: 'calc(100vh - 80px)' }}>
      <Container className="py-5">
        <Row className="mb-5">
          <Col md={8} className="mx-auto text-center">
            <h1 className="display-4 mb-4" style={{ color: '#0d6efd' }}>Quem Somos</h1>
            <p className="lead text-muted">
              Somos a solução completa para gestão financeira do MEI
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="mb-3">Nossa Missão</h3>
                <p className="text-secondary">
                  Simplificar a gestão financeira de microempreendedores
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="mb-3">Nossa Visão</h3>
                <p className="text-secondary">
                  Ser referência em soluções financeiras para microempreendedores
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="mb-3">Nossos Valores</h3>
                <p className="text-secondary">
                  Transparência, inovação e compromisso com nossos clientes
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <section className="team-section py-5">
          <h2 className="text-center mb-5">Conheça nossa equipe</h2>
          <Row className="g-4">
            {/* Cards de membros da equipe */}
          </Row>
        </section>
      </Container>
    </div>
  );
}
