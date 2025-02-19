import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logoCardTrack from "../assets/logocardtrack.png";
import imagemFundo from "../assets/imagemfundo.png";
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-background" style={{ backgroundImage: `url(${imagemFundo})` }}></div>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content" data-aos="fade-right">
            <img 
              src={logoCardTrack} 
              alt="Logo CardTrack" 
              className="hero-logo mb-4"
            />
            <h1 className="hero-title">
              Você vende,<br />
              <span className="text-primary">nós conferimos</span>
            </h1>
            <p className="hero-description">
              Simplifique a gestão das suas vendas com cartão de crédito.
              Tenha controle total dos seus recebimentos em um só lugar.
            </p>
            <div className="hero-buttons">
              <Button 
                variant="primary" 
                size="lg" 
                className="me-3 rounded-pill"
                href="#features"
              >
                Comece Agora
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg" 
                className="rounded-pill"
                href="#about"
              >
                Saiba Mais
              </Button>
            </div>
            <div className="hero-stats mt-5">
              <div className="stat-item">
                <h3>+1000</h3>
                <p>Clientes Ativos</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Suporte</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Online</p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="hero-image" data-aos="fade-left">
            <div className="floating-elements">
              <div className="floating-card card1">
                <i className="fas fa-chart-line"></i>
                <span>Controle Total de Taxas</span>
              </div>
              <div className="floating-card card2">
                <i className="fas fa-check-circle"></i>
                <span>Conciliação Automática</span>
              </div>
              <div className="floating-card card3">
                <i className="fas fa-shield-alt"></i>
                <span>100% Seguro</span>
              </div>
              <div className="floating-card card4">
                <i className="fas fa-shield-alt"></i>
                <span>Simule suas Antecipaçoes</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
