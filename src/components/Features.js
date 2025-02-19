import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import graficoVendas from '../assets/graficos.png';
import dadosvenda from '../assets/dadosvenda1.png';
import '../styles/Features.css';

const Features = () => {
  return (
    <div className="features-section">
      <Container>
        {/* Por que usar o CardTrack? */}
        <Row className="feature-block align-items-center py-5">
          <Col md={6} className="feature-text">
            <div className="content-wrapper" data-aos="fade-right">
              <h2 className="title-gradient mb-4">
                Por que usar o CardTrack?
              </h2>
              <div className="feature-description">
                <p className="lead">
                  O <strong>CardTrack</strong> simplifica o processo de conciliação de transações de venda com cartão de crédito.
                </p>
                <ul className="feature-list">
                  <li>✨ Facilidade de uso</li>
                  <li>📊 Visão completa do fluxo</li>
                  <li>💰 Controle de recebimentos</li>
                  <li>📈 Alto retorno do investimento</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={6} className="feature-image" data-aos="fade-left">
            <div className="image-wrapper">
              <img
                src={graficoVendas}
                alt="Gráfico de vendas"
                className="img-fluid floating"
              />
            </div>
          </Col>
        </Row>

        <Row className="feature-block align-items-center py-5">
          <Col md={6} className="feature-image order-md-2" data-aos="fade-left">
            <div className="content-wrapper">
              <h2 className="title-gradient mb-4">
                O que é o CardTrack?
              </h2>
              <Card className="feature-card">
                <Card.Body>
                  <h5 className="mb-4">Uma plataforma completa para seu negócio</h5>
                  <p className="lead">
                    O CardTrack é uma plataforma online que permite conciliar todas as operações 
                    de venda com cartão de crédito realizadas pelo seu negócio.
                  </p>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <h3>100%</h3>
                      <p>Online</p>
                    </div>
                    <div className="stat-item">
                      <h3>24/7</h3>
                      <p>Disponível</p>
                    </div>
                    <div className="stat-item">
                      <h3>+1000</h3>
                      <p>Clientes</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={6} className="feature-image order-md-1" data-aos="fade-right">
            <div className="image-wrapper">
              <img
                src={dadosvenda}
                alt="Resumo de recebíveis"
                className="img-fluid floating"
              />
            </div>
          </Col>
        </Row>

        {/* Nova seção de passos */}
        <Row className="steps-section py-5">
          <Col md={12} className="text-center mb-5">
            <h2 className="title-gradient">Conciliação em 3 passos</h2>
          </Col>
          <Col md={4} className="step-item" data-aos="fade-up" data-aos-delay="100">
            <div className="step-card">
              <div className="step-number">01</div>
              <h4>Conciliação de Vendas</h4>
              <p>Processamento de todas as vendas realizadas no período</p>
            </div>
          </Col>
          <Col md={4} className="step-item" data-aos="fade-up" data-aos-delay="200">
            <div className="step-card">
              <div className="step-number">02</div>
              <h4>Conciliação de Taxas</h4>
              <p>Gerencia inconsistências entre taxas praticadas e contratadas</p>
            </div>
          </Col>
          <Col md={4} className="step-item" data-aos="fade-up" data-aos-delay="300">
            <div className="step-card">
              <div className="step-number">03</div>
              <h4>Conciliação Financeira</h4>
              <p>Acompanhamento completo do fluxo financeiro</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
