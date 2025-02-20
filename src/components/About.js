import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import conciliacaoImg from "../assets/conciliacao.png";
import '../styles/About.css';

const About = () => {
  const processSteps = [
    {
      icon: "fa-file-invoice",
      title: "Importação",
      description: "Importe seus arquivos de vendas de forma simples e rápida"
    },
    {
      icon: "fa-sync",
      title: "Processamento",
      description: "Sistema processa e organiza todas as informações automaticamente"
    },
    {
      icon: "fa-check-circle",
      title: "Conciliação",
      description: "Conferência automática de valores e datas"
    },
    {
      icon: "fa-chart-line",
      title: "Relatórios",
      description: "Visualize relatórios detalhados e tome decisões informadas"
    }
  ];

  return (
    <div className="about-section" id="about">
      <Container>
        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-right">
            <div className="about-content">
              <h2 className="section-title">Como funciona?</h2>
              <p className="lead mb-4">
                O <strong>CardTrack</strong> revoluciona a forma como você gerencia suas vendas com cartão,
                oferecendo uma experiência intuitiva e completa.
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <i className="fas fa-rocket"></i>
                  <span>Interface intuitiva</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-globe"></i>
                  <span>100% online</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-lock"></i>
                  <span>Seguro e confiável</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="image-wrapper">
              <img
                src={conciliacaoImg}
                alt="Conciliação em 3 passos"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </Col>
        </Row>

        <Row className="process-steps">
          <Col xs={12} className="text-center mb-5">
            <h3 className="section-subtitle">Processo Simplificado</h3>
          </Col>
          {processSteps.map((step, index) => (
            <Col md={3} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="process-card h-100">
                <Card.Body className="text-center">
                  <div className="icon-wrapper mb-3">
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                  <div className="step-number">{index + 1}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5 pt-5">
          <Col md={8} className="mx-auto text-center" data-aos="fade-up">
            <div className="cta-section">
              <h3>Pronto para começar?</h3>
              <p className="lead">
                Simplifique sua gestão financeira hoje mesmo com o CardTrack
              </p>
              <button className="btn btn-primary btn-lg rounded-pill">
                Contrate Agora 
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
