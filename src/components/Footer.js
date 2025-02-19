import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0d76b6', color: 'white' }} className="text-center py-3">
      <Container>
        <p>&copy; {new Date().getFullYear()} MeuSaaS. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;
