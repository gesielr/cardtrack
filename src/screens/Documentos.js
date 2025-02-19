import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import { FaFileAlt } from 'react-icons/fa';
import './Documentos.css';

const Documentos = () => {
  const documentos = [
    {
      id: 1,
      titulo: 'CONTRATO',
      cor: '#26C6DA',
      corBotao: '#26C6DA'
    },
    {
      id: 2,
      titulo: 'TERMO DE\nCONFIDENCIALIDADE',
      cor: '#FF7676',
      corBotao: '#FF7676'
    }
  ];

  const handleAbrirDocumento = (documento) => {
    // Aqui você implementaria a lógica para abrir o documento
    console.log('Abrindo documento:', documento.titulo);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <h2 className="text-danger mb-4">Imprimir Documentos</h2>
        
        <div className="d-flex flex-wrap">
          {documentos.map((documento) => (
            <Card 
              key={documento.id}
              className="documento-card me-4 mb-4"
              style={{ 
                width: '250px',
                border: 'none',
                borderRadius: '8px',
                backgroundColor: 'white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <Card.Body className="d-flex flex-column align-items-start p-4">
                <div className="d-flex align-items-start mb-3">
                  <FaFileAlt 
                    size={24} 
                    style={{ color: documento.cor }}
                    className="me-2"
                  />
                  <Card.Title 
                    style={{ 
                      color: documento.cor,
                      fontSize: '1.1rem',
                      fontWeight: '500',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {documento.titulo}
                  </Card.Title>
                </div>
                
                <Button
                  variant="primary"
                  className="w-100"
                  style={{ 
                    backgroundColor: documento.corBotao,
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px'
                  }}
                  onClick={() => handleAbrirDocumento(documento)}
                >
                  ABRIR DOCUMENTO
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Documentos;