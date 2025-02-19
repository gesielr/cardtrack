import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';
import banrisulLogo from '../assets/banrisulLogo.png';
import banricomprasLogo from '../assets/banrisulLogo.png';
import './VendasPorDia.css';

const dadosFicticios = [
  {
    id: 1,
    data: "07/02/2025",
    qtdeVendas: 86,
    valor: 33027.64,
    ticketMedio: 384.16,
    detalhes: [
      { 
        adquirente: "Cielo", 
        bandeira: "Visa", 
        estabelecimento: "Loja Matriz", 
        dataVenda: "07/02/2025",
        valor: 384.16,
        parcelas: 1,
        nsu: "000123",
        autorizacao: "091621",
        status: "Recebido"
      }
    ]
  },
  {
    id: 2,
    data: "08/02/2025",
    qtdeVendas: 55,
    valor: 12375.07,
    ticketMedio: 225.00,
    detalhes: []
  },
  {
    id: 3,
    data: "10/02/2025",
    qtdeVendas: 114,
    valor: 17944.06,
    ticketMedio: 157.40,
    detalhes: []
  },
  {
    id: 4,
    data: "11/02/2025",
    qtdeVendas: 110,
    valor: 49531.77,
    ticketMedio: 450.29,
    detalhes: []
  },
  {
    id: 5,
    data: "12/02/2025",
    qtdeVendas: 99,
    valor: 18960.24,
    ticketMedio: 191.52,
    detalhes: []
  }
];

const VendasPorDia = () => {
  const [showDetalhes, setShowDetalhes] = useState(false);
  const [detalhesAtual, setDetalhesAtual] = useState([]);
  const [showDetalhesVenda, setShowDetalhesVenda] = useState(false); // Modal da 1ª imagem
  const [showDetalhesRecebiveis, setShowDetalhesRecebiveis] = useState(false); // Modal da 2ª imagem
  const [filtros, setFiltros] = useState({
    dataIntervalo: "07/02/2025 - 13/02/2025",
    estabelecimento: "Todos",
    adquirente: "Todos",
    estAdquirente: "Todos",
    bandeira: "VISA",
    tipoOperacao: "Todos"
  });


  const [showModalDetalhe, setShowModalDetalhe] = useState(false);

  const handleBuscar = () => {
    
  };

  const handleShowDetalhes = (detalhes) => {
    setDetalhesAtual(detalhes);
    setShowDetalhes(true);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <h2 className="text-danger mb-4">Vendas Por Dia</h2>
        
        <Row className="mb-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Intervalo de datas</Form.Label>
              <Form.Control 
                type="text" 
                value={filtros.dataIntervalo}
                onChange={(e) => setFiltros({...filtros, dataIntervalo: e.target.value})}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Estabelecimento</Form.Label>
              <Form.Select
                value={filtros.estabelecimento}
                onChange={(e) => setFiltros({...filtros, estabelecimento: e.target.value})}
              >
                <option>Todos</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Adquirente</Form.Label>
              <Form.Select
                value={filtros.adquirente}
                onChange={(e) => setFiltros({...filtros, adquirente: e.target.value})}
              >
                <option>Todos</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Est. Adquirente</Form.Label>
              <Form.Select
                value={filtros.estAdquirente}
                onChange={(e) => setFiltros({...filtros, estAdquirente: e.target.value})}
              >
                <option>Todos</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Bandeira</Form.Label>
              <Form.Select
                value={filtros.bandeira}
                onChange={(e) => setFiltros({...filtros, bandeira: e.target.value})}
              >
                <option>VISA</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Tipo de Operação</Form.Label>
              <Form.Select
                value={filtros.tipoOperacao}
                onChange={(e) => setFiltros({...filtros, tipoOperacao: e.target.value})}
              >
                <option>Todos</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col 
  md={2} 
  className="d-flex align-items-end" 
  style={{ marginLeft: 'auto', textAlign: 'right' }} // Ajuste manual para alinhar no lado direito
>
  <Button 
    variant="primary" 
    onClick={handleBuscar}
    style={{
      width: '120px', // Ajuste de largura do botão
      height: '40px', // Ajuste de altura do botão
      fontSize: '16px', // Tamanho da fonte
      fontWeight: 'bold', // Negrito
      padding: '8px 16px' // Espaçamento interno
    }}
  >
    BUSCAR
  </Button>
</Col>

        </Row>

        <div 
            className="p-3 mb-4 rounded text-center"
            style={{ 
              backgroundColor: '#0d6efd', // Fundo azul
              color: 'white', // Texto branco
              width: '50%', // Ajustável conforme necessário (pode ser 60%, 70%, etc.)
              maxWidth: '600px', // Limita o tamanho máximo
              height: 'auto', // Ajustável, pode definir um valor fixo se necessário
              padding: '15px', // Mantém espaçamento interno
              margin: '0 auto' // Centraliza horizontalmente
            }}
          >
            <h5 className="mb-0">
              Vendas: R$131.848,78
            </h5>
          </div>

        <Table striped bordered hover className="text-center align-middle">
  <thead>
    <tr>
      <th>Ações</th>
      <th>Data Venda</th>
      <th>Qtde De Vendas</th>
      <th>Valor</th>
      <th>Ticket Médio</th>
    </tr>
  </thead>
  <tbody>
    {dadosFicticios.map((item) => (
      <tr key={item.id}>
        <td className="align-middle">
        <Button              
            onClick={() => handleShowDetalhes(item.detalhes)}
            style={{
              backgroundColor: '#0d6efd', // Cor de fundo personalizada (verde, altere conforme necessário)
              borderColor: '#145c32', // Cor da borda (opcional)
              color: 'white', // Cor do texto
              width: '100px', // Largura do botão
              height: '30px', // Altura do botão
              fontSize: '12px', // Tamanho da fonte
              fontWeight: 'bold' // Deixa o texto mais destacado
            }}>
            AÇÕES
          </Button>
        </td>
        <td className="align-middle">{item.data}</td>
        <td className="align-middle">{item.qtdeVendas}</td>
        <td className="align-middle">R${item.valor.toFixed(2)}</td>
        <td className="align-middle">R${item.ticketMedio.toFixed(2)}</td>
      </tr>
    ))}
  </tbody>
</Table>

<Modal 
  show={showDetalhes} 
  onHide={() => setShowDetalhes(false)} 
  size="xl" 
  centered
  dialogClassName="custom-modal"
>
  <Modal.Header closeButton>
    <Modal.Title>Detalhes das Vendas</Modal.Title>
  </Modal.Header>
    
  <Modal.Body>
    <div style={{ overflowX: 'auto' }}>
      <Table striped bordered hover className="text-center align-middle">
        <thead className="table-primary">
          <tr>
            <th style={{ minWidth: '100px', maxWidth: '120px', width: '10%' }}>Ações</th>
            <th style={{ minWidth: '150px', maxWidth: '180px', width: '15%' }}>Adquirente</th>
            <th style={{ minWidth: '150px', maxWidth: '180px', width: '15%' }}>Bandeira</th>
            <th style={{ minWidth: '200px', maxWidth: '250px', width: '20%' }}>Estabelecimento</th>
            <th style={{ minWidth: '200px', maxWidth: '300px', width: '25%' }}>Descrição</th>
            <th style={{ minWidth: '150px', maxWidth: '180px', width: '15%' }}>Valor Bruto</th>
            <th style={{ minWidth: '120px', maxWidth: '150px', width: '10%' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {detalhesAtual.map((detalhe, index) => (
            <tr key={index}>
              <td>
                <div className="d-flex gap-2 justify-content-center">
                  <Button
                    style={{
                      backgroundColor: '#CD853F',
                      border: 'none',
                      width: '35px',
                      height: '35px',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '5px'
                    }}
                    onClick={() => setShowDetalhesVenda(true)} // Abre o modal da 1ª imagem
                  >
                    <i className="fas fa-edit"></i>
                  </Button>

                  <Button
                    style={{
                      backgroundColor: '#4682B4',
                      border: 'none',
                      width: '35px',
                      height: '35px',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '5px'
                    }}
                    onClick={() => setShowDetalhesRecebiveis(true)} // Abre o modal da 2ª imagem
                  >
                    <i className="fas fa-dollar-sign"></i>
                  </Button>
                </div>
              </td>
              <td>
                <img 
                  src={banrisulLogo} 
                  alt="Banrisul" 
                  style={{ height: '30px', display: 'block', margin: 'auto' }}
                />
              </td>
              <td>
                <img 
                  src={banricomprasLogo} 
                  alt="Banricompras" 
                  style={{ height: '30px', display: 'block', margin: 'auto' }}
                />
              </td>
              <td>{detalhe.estabelecimento}</td>
              <td>Banricompras pagto à vista</td>
              <td>R$ {detalhe.valor.toFixed(2)}</td>
              <td>
                <span className={detalhe.status === "Recebido" ? "text-success" : "text-danger"}>
                  {detalhe.status || "Recebido"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

    {/* Paginação e seleção de itens por página */}
    <div className="d-flex justify-content-between align-items-center mt-3">
      <div className="d-flex align-items-center">
        <span>Itens por página: </span>
        <Form.Select 
          style={{ width: '100px', marginLeft: '10px' }}
          value="100"
          onChange={() => {}}
        >
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </Form.Select>
      </div>
      <div>1 - 100 de 236 itens</div>
    </div>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowDetalhes(false)}>
      FECHAR
    </Button>
  </Modal.Footer>
</Modal>

{/* Modal da Primeira Imagem (Detalhes da Venda) */}
<Modal 
  show={showDetalhesVenda} 
  onHide={() => setShowDetalhesVenda(false)}
  size="lg"
  centered
>
  <Modal.Header closeButton className="bg-info text-white">
    <Modal.Title>Detalhes da Venda</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Table className="table-bordered text-center align-middle">
  <tbody>
    <tr>
      <td><strong>Adquirente:</strong></td>
      <td>
        <img 
          src={banrisulLogo} 
          alt="Banrisul" 
          style={{ height: '30px', display: 'block', margin: 'auto' }} 
        />
      </td>
      <td><strong>Bandeira:</strong></td>
      <td>
        <img 
          src={banricomprasLogo} 
          alt="Banricompras" 
          style={{ height: '30px', display: 'block', margin: 'auto' }} 
        />
      </td>
      <td><strong>Estabelecimento:</strong></td>
      <td><strong>Loja</strong></td>
    </tr>
    <tr>
      <td><strong>Data Venda:</strong></td>
      <td>12/02/2025</td>
      <td><strong>Valor Total:</strong></td>
      <td>R$36,72</td>
      <td>103678789</td>
      <td>Matriz</td>
    </tr>
  </tbody>
</Table>

  </Modal.Body>
</Modal>



<Modal 
  show={showDetalhesRecebiveis} 
  onHide={() => setShowDetalhesRecebiveis(false)}
  size="lg"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title>Detalhes dos Recebíveis</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Table striped bordered hover className="text-center align-middle">
      <thead>
        <tr>
          <th>Ações</th>
          <th>Adquirente</th>
          <th>Bandeira</th>
          <th>Nº Autorização</th>
          <th>Data Pagamento</th>
          <th>Valor Parcela</th>
          <th>Parcela</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {/* Botão que abre o modal da tela anexa */}
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => setShowModalDetalhe(true)}
            >
              DETALHES
            </Button>
          </td>
          <td><img src={banrisulLogo} alt="Banrisul" style={{ height: '30px' }} /></td>
          <td><img src={banricomprasLogo} alt="Banricompras" style={{ height: '30px' }} /></td>
          <td>01160826</td>
          <td>13/02/2025</td>
          <td>R$36,72</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
  </Modal.Body>
</Modal>

{/* Novo modal para abrir os detalhes conforme a imagem */}
<Modal 
  show={showModalDetalhe} 
  onHide={() => setShowModalDetalhe(false)}
  size="lg"
  centered
>
  <Modal.Header closeButton className="bg-info text-white">
    <Modal.Title>Detalhes do Recebível</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Table className="table-bordered text-center align-middle">
      <tbody>
        <tr>
          <td><strong>Adquirente:</strong></td>
          <td>
            <img src={banrisulLogo} alt="Banrisul" style={{ height: '30px', display: 'block', margin: 'auto' }} />
          </td>
          <td><strong>Bandeira:</strong></td>
          <td>
            <img src={banricomprasLogo} alt="Banricompras" style={{ height: '30px', display: 'block', margin: 'auto' }} />
          </td>
          <td><strong>Estabelecimento:</strong></td>
          <td>Loja Matriz</td>
        </tr>
        <tr>
          <td><strong>Valor Bruto:</strong></td>
          <td>R$36,72</td>
          <td><strong>Taxa Contratada:</strong></td>
          <td>1.49</td>
          <td><strong>Valor Líquido:</strong></td>
          <td>R$36,17</td>
        </tr>
        <tr>
          <td><strong>Banco:</strong></td>
          <td>Banrisul</td>
          <td><strong>Parcela:</strong></td>
          <td>1</td>
          <td><strong>Data Venda:</strong></td>
          <td>12/02/2025</td>
        </tr>
        <tr>
          <td><strong>Conta Corrente:</strong></td>
          <td>Ag:1142 - CC:615714902</td>
          <td><strong>Agência:</strong></td>
          <td>1142</td>
          <td><strong>Data Prevista:</strong></td>
          <td>13/02/2025</td>
        </tr>
        <tr>
          <td><strong>Status:</strong></td>
          <td className="text-success">Recebido</td>
          <td><strong>NSU:</strong></td>
          <td>500004</td>
          <td><strong>Nº Autorização:</strong></td>
          <td>01160826</td>
        </tr>
        <tr>
          <td><strong>Descrição:</strong></td>
          <td colspan="5">Banricompras pagto à vista</td>
        </tr>
      </tbody>
    </Table>
  </Modal.Body>
</Modal>


      </Container>
    </div>
  );
};

export default VendasPorDia;
