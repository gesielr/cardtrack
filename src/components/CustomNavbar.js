import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logocardtrack.png';


const CustomNavbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Navbar 
      expand="lg" 
      className="shadow-sm"
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
        padding: '15px 0'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            height="40"
            alt="CardTrack Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/sobre"
              className="mx-3"
              style={{
                color: '#0d6efd',
                fontWeight: '500',
                fontSize: '16px'
              }}
            >
              Sobre
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/recursos"
              className="mx-3"
              style={{
                color: '#0d6efd',
                fontWeight: '500',
                fontSize: '16px'
              }}
            >
              Recursos
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contato"
              className="mx-3"
              style={{
                color: '#0d6efd',
                fontWeight: '500',
                fontSize: '16px'
              }}
            >
              Contato
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto align-items-center">
            <Button 
              variant="outline-primary" 
              className="mx-2"
              onClick={handleLogin}
              style={{
                borderRadius: '20px',
                fontWeight: '600',
                padding: '8px 20px'
              }}
            >
              Login
            </Button>
            <Link to="/contract" style={{ textDecoration: 'none' }}>
              <Button 
                variant="primary"
                className="mx-2"
                style={{
                  borderRadius: '20px',
                  fontWeight: '600',
                  padding: '8px 20px',
                  backgroundColor: '#0d6efd',
                  borderColor: '#0d6efd'
                }}
              >
                Contrate agora
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
