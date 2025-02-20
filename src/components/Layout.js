import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import MenuRelatorios from './MenuRelatorios';

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CustomNavbar />
      <Container fluid className="flex-grow-1">
        <Row>
          <Col md={3} lg={2} className="bg-light py-3 border-end">
            <MenuRelatorios />
          </Col>
          <Col md={9} lg={10} className="py-3">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
