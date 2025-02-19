import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Row, Col, Form, Button, Table, Dropdown, Modal } from 'react-bootstrap';
import MasterB from '../assets/masterCardLogo.png'
import cieloL from '../assets/cielologo.png'


const dadosFicticios = [
  {
    id: 1,
    data: "06/02/2025",
    qtdeRecebiveis: 387,
    valorBruto: 68018.48,
    valorLiquido: 66833.46,
    valorRecebido: 66733.65,
    detalhes: [
      { 
        adquirente: "Cielo", 
        bandeira: "Mastercard", 
        estabelecimento: "Loja Matriz", 
        venda: "11/05/2024", 
        pagamento: "06/02/2025", 
        valorParcela: 99.81, 
        parcela: 9,
        taxaContratada: 2.61,
        valorLiquido: 99.81,
        banco: "BANCOOB",
        contaCorrente: "Ag:3074 - CC:773760",
        agencia: "03074",
        dataPrevista: "06/02/2025",
        status: "Não recebido",
        nsu: "000009",
        numeroAutorizacao: "091621",
        descricao: "MC parcelado loja - 9/10"
      },
      { 
        adquirente: "Cielo", 
        bandeira: "Visa", 
        estabelecimento: "Loja Matriz", 
        venda: "06/08/2024", 
        pagamento: "06/02/2025", 
        valorParcela: 82.53, 
        parcela: 6,
        taxaContratada: 2.61,
        valorLiquido: 82.53,
        banco: "BANCOOB",
        contaCorrente: "Ag:3074 - CC:773760",
        agencia: "03074",
        dataPrevista: "06/02/2025",
        status: "Não recebido",
        nsu: "000009",
        numeroAutorizacao: "091621",
        descricao: "MC parcelado loja - 9/10"
      },
      { 
        adquirente: "Cielo", 
        bandeira: "Visa", 
        estabelecimento: "Loja Centro", 
        venda: "06/09/2024", 
        pagamento: "06/02/2025", 
        valorParcela: 78.54, 
        parcela: 5,
        taxaContratada: 2.61,
        valorLiquido: 78.54,
        banco: "BANCOOB",
        contaCorrente: "Ag:3074 - CC:773760",
        agencia: "03074",
        dataPrevista: "06/02/2025",
        status: "Não recebido",
        nsu: "000009",
        numeroAutorizacao: "091621",
        descricao: "MC parcelado loja - 9/10"
      }
    ]
  },
  {
    id: 2,
    data: "10/02/2025",
    qtdeRecebiveis: 895,
    valorBruto: 165359.38,
    valorLiquido: 162163.07,
    valorRecebido: 159239.72,
    detalhes: []
  },
  {
    id: 3,
    data: "11/02/2025",
    qtdeRecebiveis: 339,
    valorBruto: 49081.87,
    valorLiquido: 48231.77,
    valorRecebido: 48147.85,
    detalhes: []
  },
  {
    id: 4,
    data: "12/02/2025",
    qtdeRecebiveis: 310,
    valorBruto: 69446.68,
    valorLiquido: 68319.09,
    valorRecebido: 67550.19,
    detalhes: []
  }
];

const VendasPorDia = () => {
  const [filtros, setFiltros] = useState({
    dataIntervalo: "",
    estabelecimento: "Todos",
    adquirente: "Todos",
    estAdquirente: "Todos",
    bandeira: "Todos",
    tipoOperacao: "Todos",
    recebiveis: "Todos",
    antecipacao: "Todos"
  });

  const [totais, setTotais] = useState({
    bruto: 410366.61,
    liquido: 402936.49,
    recebido: 398732.78
  });

  const [showDetalhes, setShowDetalhes] = useState(false);
  const [detalhesAtual, setDetalhesAtual] = useState([]);
  const [showDetalhesRecebivel, setShowDetalhesRecebivel] = useState(false);
  const [detalheRecebivel, setDetalheRecebivel] = useState({
    adquirente: "Cielo",
    bandeira: "Mastercard",
    estabelecimento: "Loja Matriz",
    valorBruto: 102.48,
    taxaContratada: 2.61,
    valorLiquido: 99.81,
    banco: "BANCOOB",
    parcela: 9,
    dataVenda: "11/05/2024",
    contaCorrente: "Ag:3074 - CC:773760",
    agencia: "03074",
    dataPrevista: "06/02/2025",
    status: "Não recebido",
    nsu: "000009",
    numeroAutorizacao: "091621",
    descricao: "MC parcelado loja - 9/10"
  });

  const handleBuscar = () => {
    // Simular atualização dos totais com dados fictícios
    const totalBruto = dadosFicticios.reduce((acc, item) => acc + item.valorBruto, 0);
    const totalLiquido = dadosFicticios.reduce((acc, item) => acc + item.valorLiquido, 0);
    const totalRecebido = dadosFicticios.reduce((acc, item) => acc + item.valorRecebido, 0);
    
    setTotais({
      bruto: totalBruto,
      liquido: totalLiquido,
      recebido: totalRecebido
    });
  };

  const handleShowDetalhes = (detalhes) => {
    setDetalhesAtual(detalhes);
    setShowDetalhes(true);
  };

  const handleShowDetalhesRecebivel = (detalhe) => {
    // Garantir que todos os valores numéricos estejam presentes
    const detalheFormatado = {
      adquirente: detalhe.adquirente || "",
      bandeira: detalhe.bandeira || "",
      estabelecimento: detalhe.estabelecimento || "",
      valorBruto: detalhe.valorParcela || 0, // Usando valorParcela como valorBruto
      taxaContratada: 2.61,
      valorLiquido: detalhe.valorParcela || 0,
      banco: "BANCOOB",
      parcela: detalhe.parcela || 0,
      dataVenda: detalhe.venda || "",
      contaCorrente: "Ag:3074 - CC:773760",
      agencia: "03074",
      dataPrevista: detalhe.pagamento || "",
      status: "Não recebido",
      nsu: "000009",
      numeroAutorizacao: "091621",
      descricao: "MC parcelado loja - 9/10"
    };
    
    setDetalheRecebivel(detalheFormatado);
    setShowDetalhesRecebivel(true);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <h2 className="text-danger mb-4">Recebíveis Por Dia</h2>
        
        <Row className="mb-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Intervalo de datas</Form.Label>
              <Form.Control 
                type="date" 
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
                <option>Loja Matriz</option>
                <option>Loja Imbituba</option>
                <option>BNDES</option>
                <option>Loja Centro</option>
                <option>PAGTRACK</option>
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
                <option>CIELO</option>
                <option>BANRISUL</option>
                <option>SIPAG</option>
                <option>PAGTRACK</option>
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
                <option>1038087624</option>
                <option>1036669081</option>
                <option>1033042835</option>
                <option>1029528567</option>
                <option>2560</option>
                <option>2561</option>
                <option>2562</option>
                <option>27872944</option>
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
                <option>Todos</option>
                <option>AGIPLAN</option>
                <option>ALELO</option>
                <option>AMEX</option>
                <option>BANESCARD</option>
                <option>BANRICARD</option>
                <option>BANRICOMPRAS</option>
                <option>CABAL</option>
                <option>CREDSYSTEM</option>
                <option>CREDZ</option>
                <option>DINERS</option>
                <option>DISCOVER</option>
                <option>ELO</option>
                <option>ESPLANADA</option>
                <option>HIPER</option>
                <option>HIPERCARD</option>
                <option>JCB</option>
                <option>MASTERCARD</option>
                <option>OUTRAS</option>
                <option>SOROCRED</option>
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
                <option>Débito</option>
                <option>Crédito à Vista</option>
                <option>Parcelado 2 a 6x</option>
                <option>Parcelado 7 a 12x</option>
                <option>Ressarcimento</option>
                <option>Refeição</option>
                <option>Alimentação</option>
                <option>Crediário</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Recebíveis</Form.Label>
              <Form.Select 
                value={filtros.recebiveis}
                onChange={(e) => setFiltros({...filtros, recebiveis: e.target.value})}
              >
                <option>Todos</option>
                <option>A Receber</option>
                <option>Recebido</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Antecipação</Form.Label>
              <Form.Select 
                value={filtros.antecipacao}
                onChange={(e) => setFiltros({...filtros, antecipacao: e.target.value})}
              >
                <option>Todos</option>
                <option>Antecipado</option>
                <option>Não Antecipado</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <div 
            className="p-3 mb-4 rounded text-center"
            style={{ 
              backgroundColor: '#0d6efd', // Fundo azul
              color: 'white', // Texto branco
              width: '100%', // Ajustável, pode ser alterado conforme necessário
              height: 'auto', // Ajustável, pode definir um valor fixo se necessário
              padding: '15px' // Mantém espaçamento interno
            }}
          >
            <p className="mb-0">
              Bruto: R${totais.bruto.toFixed(2)} || Líquido: R${totais.liquido.toFixed(2)} || Recebido: R${totais.recebido.toFixed(2)}
            </p>
          </div>


        <div className="text-end mb-3">
          <Button variant="primary" onClick={handleBuscar}>BUSCAR</Button>
        </div>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th className="text-center" style={{width: '100px'}}>Ações</th>
              <th className="text-center">Data</th>
              <th className="text-center">Qtde De Recebíveis</th>
              <th className="text-center">Valor Bruto</th>
              <th className="text-center">Valor Líquido</th>
              <th className="text-center">Valor Recebido</th>
            </tr>
          </thead>
          <tbody>
            {dadosFicticios.map((item) => (
              <tr key={item.id}>
                <td className="text-center">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" size="sm">
                      AÇÕES
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleShowDetalhes(item.detalhes)}>
                        Detalhe
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
                <td className="text-center">{item.data}</td>
                <td className="text-center">{item.qtdeRecebiveis}</td>
                <td className="text-center">R${item.valorBruto.toFixed(2)}</td>
                <td className="text-center">R${item.valorLiquido.toFixed(2)}</td>
                <td className="text-center">R${item.valorRecebido.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Modal de Detalhes */}
        <Modal show={showDetalhes} onHide={() => setShowDetalhes(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Recebíveis do Dia</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th className="text-center">Adquirente</th>
                  <th className="text-center">Bandeira</th>
                  <th className="text-center">Estabelecimento</th>
                  <th className="text-center">Venda</th>
                  <th className="text-center">Pagamento</th>
                  <th className="text-center">Valor Parcela</th>
                  <th className="text-center">Parcela</th>
                  <th className="text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {detalhesAtual.map((detalhe, index) => (
                  <tr key={index}>
                    <td className="text-center">{detalhe.adquirente}</td>
                    <td className="text-center">{detalhe.bandeira}</td>
                    <td className="text-center">{detalhe.estabelecimento}</td>
                    <td className="text-center">{detalhe.venda}</td>
                    <td className="text-center">{detalhe.pagamento}</td>
                    <td className="text-center">R${detalhe.valorParcela.toFixed(2)}</td>
                    <td className="text-center">{detalhe.parcela}</td>
                    <td className="text-center">
                      <Button 
                        variant="info" 
                        size="sm"
                        onClick={() => handleShowDetalhesRecebivel(detalhe)}
                      >
                        DETALHES
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDetalhes(false)}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal de Detalhes do Recebível */}
        <Modal show={showDetalhesRecebivel} onHide={() => setShowDetalhesRecebivel(false)}
          size="lg" // Define o tamanho do modal (lg = grande)
          centered // <-- Centraliza o modal verticalmente
          style={{ maxWidth: '100%', width: '900px', // Define a largura fixa
            marginLeft: '380px' // Centraliza horizontalmente
          }}
        >
          <Modal.Header closeButton className="bg-info text-white">
            <Modal.Title>Detalhes do Recebível</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ width: '100%', overflowX: 'auto' }}>
              <Table bordered className="table-light w-100">
                <tbody>
                  <tr>
                    <td><strong>Adquirente:</strong></td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <img 
                        src={cieloL} alt='' width="80" height="auto" style={{display: 'inline-block', verticalAlign: 'middle' }}/>                      
                    </td>
                    <td><strong>Bandeira:</strong></td>
                    <td>
                      <img src={MasterB} alt="" width="40" height="auto" style={{display: 'block', margin: 'auto',  verticalAlign: 'middle' }} />                     
                    </td>
                    <td><strong>Estabelecimento:</strong></td>
                    <td>{detalheRecebivel.estabelecimento}</td>
                  </tr>
                  <tr>
                    <td><strong>Valor Bruto:</strong></td>
                    <td>R${Number(detalheRecebivel.valorBruto).toFixed(2)}</td>
                    <td><strong>Taxa Contratada:</strong></td>
                    <td>{detalheRecebivel.taxaContratada}</td>
                    <td><strong>Valor Líquido:</strong></td>
                    <td>R${Number(detalheRecebivel.valorLiquido).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td><strong>Banco:</strong></td>
                    <td>{detalheRecebivel.banco}</td>
                    <td><strong>Parcela:</strong></td>
                    <td>{detalheRecebivel.parcela}</td>
                    <td><strong>Data Venda:</strong></td>
                    <td>{detalheRecebivel.dataVenda}</td>
                  </tr>
                  <tr>
                    <td><strong>Conta Corrente:</strong></td>
                    <td>{detalheRecebivel.contaCorrente}</td>
                    <td><strong>Agência:</strong></td>
                    <td>{detalheRecebivel.agencia}</td>
                    <td><strong>Data Prevista:</strong></td>
                    <td>{detalheRecebivel.dataPrevista}</td>
                  </tr>
                  <tr>
                    <td><strong>Status:</strong></td>
                    <td>{detalheRecebivel.status}</td>
                    <td><strong>NSU:</strong></td>
                    <td>{detalheRecebivel.nsu}</td>
                    <td><strong>Nº Autorização:</strong></td>
                    <td>{detalheRecebivel.numeroAutorizacao}</td>
                  </tr>
                  <tr>
                    <td><strong>Descrição:</strong></td>
                    <td colSpan="5">{detalheRecebivel.descricao}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Modal.Body>

        </Modal>
      </Container>
    </div>
  );
};

export default VendasPorDia;
