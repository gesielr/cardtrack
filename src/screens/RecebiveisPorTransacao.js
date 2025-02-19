import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Row, Col, Form, Button, Card, Table, Dropdown } from 'react-bootstrap';
import { FaSync, FaEllipsisV } from 'react-icons/fa';
import cieloLogo from '../assets/cielologo.png';
import visaLogo from '../assets/visaLogo.png';
import mastercardLogo from '../assets/masterCardLogo.png';
import banrisulLogo from '../assets/banrisulLogo.png';

const RecebiveisPorTransacao = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  // Dados fictícios para a tabela
  const dadosTabela = [
    {
      id: 1,
      adquirente: 'cielo',
      bandeira: 'visa',
      estabelecimento: 'Loja Imbituba',
      venda: '01/04/2024',
      dataPrevisao: '03/02/2025',
      pagamento: '-',
      valorBruto: 'R$99,00',
      valorLiquido: 'R$96,58',
      valorRecebido: '-',
      status: 'NÃO RECEBIDO',
      parcela: '10',
      antecipacao: 'Não'
    },
    {
      id: 2,
      adquirente: 'banrisul',
      bandeira: 'visa',
      estabelecimento: 'Loja Matriz',
      venda: '02/04/2024',
      dataPrevisao: '03/02/2025',
      pagamento: '03/02/2025',
      valorBruto: 'R$111,09',
      valorLiquido: 'R$106,11',
      valorRecebido: 'R$106,11',
      status: 'RECEBIDO',
      parcela: '10',
      antecipacao: 'Não'
    }
  ];

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      ref={ref}
      variant="light"
      size="sm"
      onClick={onClick}
      className="border"
    >
      <FaEllipsisV />
    </Button>
  ));

  const AcoesDropdown = () => (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
      <Dropdown.Menu>
        <Dropdown.Item>Detalhe</Dropdown.Item>
        <Dropdown.Item>Venda</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const getLogo = (tipo, nome) => {
    if (tipo === 'adquirente') {
      switch (nome.toLowerCase()) {
        case 'cielo': return <img src={cieloLogo} alt="Cielo" height="20" />;
        case 'banrisul': return <img src={banrisulLogo} alt="Banrisul" height="20" />;
        default: return nome;
      }
    } else if (tipo === 'bandeira') {
      switch (nome.toLowerCase()) {
        case 'visa': return <img src={visaLogo} alt="Visa" height="20" />;
        case 'mastercard': return <img src={mastercardLogo} alt="Mastercard" height="20" />;
        default: return nome;
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        paddingBottom: '20px', // Para garantir que o fundo cubra até o botão flutuante
      }}
    >
      <Sidebar />
      <div
        style={{
          flex: 1,
          marginLeft: '250px',
          padding: '20px',
          transition: 'margin-left 0.3s ease',
          backgroundColor: '#f5f5f5', // Mantém o fundo cinza na largura do conteúdo
        }}
      >
        {/* Header com título e botão de atualizar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Recebíveis Por Transação</h2>
          <Button
              variant="outline-primary"
              onClick={handleRefresh}
              disabled={isLoading}
              style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '8px', backgroundColor: '#f0f0f0', color: '#007bff', marginRight: '40px'}}>
              <FaSync className={`me-2 ${isLoading ? 'fa-spin' : ''}`} />
              {isLoading ? 'Atualizando...' : 'Atualizar'}
          </Button>
        </div>

        {/* Filtros */}
        <Card className="mb-4">
          <Card.Body>
            <Row className="g-3">
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Intervalo de datas</Form.Label>
                  <Form.Control type="text" defaultValue="07/02/2025 - 07/02/2025" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Estabelecimento</Form.Label>
                  <Form.Select>
                    <option>Todos</option>
                    <option>Loja Matriz</option>
                    <option>Loja Centro</option>
                    <option>Loja Imbituba</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Adquirente</Form.Label>
                  <Form.Select>
                    <option>Todos</option>
                    <option>Cielo</option>
                    <option>Banrisul</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Est. Adquirente</Form.Label>
                  <Form.Select>
                    <option>Todos</option>
                    <option>Estabelecimento 1</option>
                    <option>Estabelecimento 2</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Resumo de valores */}
        <Card className="mb-4" style={{ backgroundColor: '#e8f4ff' }}>
          <Card.Body className="text-center">
            <span className="me-4" style={{ color: '#0d6efd', fontWeight: 'bold' }}>Bruto: R$370.066,52</span>
            <span className="me-4 text-muted">||</span>
            <span className="me-4" style={{ color: '#0d6efd', fontWeight: 'bold' }}>Líquido: R$363.367,70</span>
            <span className="me-4 text-muted">||</span>
            <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>Recebido: R$320.207,26</span>
          </Card.Body>
        </Card>

        {/* Tabela de dados */}
        <Card>
          <Card.Body>
            <div className="table-responsive">
              <Table hover className="align-middle table-bordered">
                <thead className="table-light">
                  <tr>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Ações</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Adquirente</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Bandeira</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Estabelecimento</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Venda</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Data Prevista</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Data do Recebimento</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Valor Bruto</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Valor Líquido</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Valor Recebido</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Status Pgto.</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Parcela</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Antecipa.</th>
                  </tr>
                </thead>
                <tbody>
                  {dadosTabela.map((item) => (
                    <tr key={item.id}>
                      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                        <AcoesDropdown />
                      </td>
                      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                        {getLogo('adquirente', item.adquirente)}
                      </td>
                      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                        {getLogo('bandeira', item.bandeira)}
                      </td>
                      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.estabelecimento}</td>
                      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.venda}</td>
                      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.dataPrevisao}</td>
                      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.pagamento}</td>
                      <td style={{ textAlign: 'right', verticalAlign: 'middle' }}>{item.valorBruto}</td>
                      <td style={{ textAlign: 'right', verticalAlign: 'middle' }}>{item.valorLiquido}</td>
                      <td style={{ textAlign: 'right', verticalAlign: 'middle' }}>{item.valorRecebido}</td>
                      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                        <span className={`badge ${item.status === 'RECEBIDO' ? 'bg-success' : 'bg-danger'}`}>
                          {item.status}
                        </span>
                      </td>
                      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.parcela}</td>
                      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.antecipacao}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>       
      </div>
    </div>
  );
};

export default RecebiveisPorTransacao;
