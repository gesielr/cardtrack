import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie
} from 'recharts';
import { 
  FaShoppingCart, 
  FaFileInvoiceDollar,
  FaReceipt,
  FaCalendarCheck,
  FaCalendarAlt,
  FaBan,
  FaSync
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import cieloLogo from "../assets/cielologo.png";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '250px', padding: '20px', transition: 'margin-left 0.3s ease' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Dashboard</h2>
          <h6 className="mb-0">FIGUEREDO CONSTRULAR\carlos</h6>
          <Button 
            variant="primary"
            size="sm"
            onClick={handleRefresh}
            disabled={isLoading}
          >
            <FaSync className={isLoading ? 'fa-spin' : ''} />
          </Button>
        </div>

        {/* Filtros */}
        <Row className="mb-4">
          <Col md={3}>
            <Form.Control
              type="date"
              value="2025-02-06"
              onChange={(e) => console.log(e.target.value)}
              className="form-control-sm"
            />
          </Col>
          <Col md={3}>
            <Form.Select className="form-control-sm">
              <option value="">Estabelecimento</option>
              <option value="loja1">Loja do João 1</option>
              <option value="loja2">Loja do João 2</option>
              <option value="loja3">Loja do João 3</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select className="form-control-sm">
              <option value="">Adquirente</option>
              <option value="cielo">Cielo</option>
              <option value="rede">Rede</option>
              <option value="getnet">GetNet</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select className="form-control-sm">
              <option value="">Est. Adquirente</option>
              <option value="est1">Estabelecimento Cielo 1</option>
              <option value="est2">Estabelecimento Rede 2</option>
              <option value="est3">Estabelecimento GetNet 3</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Cards de Resumo */}
        <Row className="mb-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3">
                    <FaShoppingCart className="text-primary" size={24} />
                  </div>
                </div>
                <h6 className="text-muted mb-2">VENDAS</h6>
                <h3 className="text-primary mb-2">R$ 226.042,57</h3>
                <p className="text-muted mb-0">NO MÊS ATUAL</p>
                <small className="text-muted">EM 05/02/2025 - R$ 54.400,23</small>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="rounded-circle bg-success bg-opacity-10 p-3">
                    <FaReceipt className="text-success" size={24} />
                  </div>
                </div>
                <h6 className="text-muted mb-2">RECEBIDOS</h6>
                <h3 className="text-success mb-2">R$ 319.035,60</h3>
                <p className="text-muted mb-0">NO MÊS ATUAL</p>
                <small className="text-muted">EM 06/02/2025 - R$ 66.733,65</small>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="rounded-circle bg-info bg-opacity-10 p-3">
                    <FaCalendarCheck className="text-info" size={24} />
                  </div>
                </div>
                <h6 className="text-muted mb-2">A RECEBER</h6>
                <h3 className="text-info mb-2">R$ 2.641.951,40</h3>
                <p className="text-muted mb-0">TOTAL</p>
                <small className="text-muted">EM 07/02/2025 - R$ 40.426,89</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="rounded-circle bg-warning bg-opacity-10 p-3">
                    <FaCalendarAlt className="text-warning" size={24} />
                  </div>
                </div>
                <h6 className="text-muted mb-2">ANTECIPAÇÕES</h6>
                <h3 className="text-warning mb-2">R$ 198.619,28</h3>
                <p className="text-muted mb-0">NO MÊS ATUAL</p>
                <small className="text-muted">EM 05/02/2025 - R$ 22.915,97</small>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="rounded-circle bg-secondary bg-opacity-10 p-3">
                    <FaBan className="text-secondary" size={24} />
                  </div>
                </div>
                <h6 className="text-muted mb-2">CANCELAMENTOS</h6>
                <h3 className="text-secondary mb-2">R$ 0,00</h3>
                <p className="text-muted mb-0">NO MÊS ATUAL</p>
                <small className="text-muted">EM 31/01/2025 - R$ 0,00</small>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="rounded-circle bg-danger bg-opacity-10 p-3">
                    <FaFileInvoiceDollar className="text-danger" size={24} />
                  </div>
                </div>
                <h6 className="text-muted mb-2">DESPESAS/COBRANÇAS</h6>
                <h3 className="text-danger mb-2">R$ 0,00</h3>
                <p className="text-muted mb-0">NO MÊS ATUAL</p>
                <small className="text-muted">EM 06/02/2025 - R$ 0,00</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Taxas */}
        <Row className="mb-4">
          <Col md={12}>
            <Card className="shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <h5 className="card-title mb-4 text-success" style={{ textAlign: "center" }} >SUAS MELHORES TAXAS</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-center px-4">
                    <p className="text-muted mb-1">DÉBITO</p>
                    <img src={cieloLogo} alt="Cielo" style={{ height: '30px' }} className="mb-2" />
                    <h6 className="mb-0">0,80%</h6>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-muted mb-1">CRÉDITO</p>
                    <img src={cieloLogo} alt="Cielo" style={{ height: '30px' }} className="mb-2" />
                    <h6 className="mb-0">1,60%</h6>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-muted mb-1">PARCELADO 2/6</p>
                    <img src={cieloLogo} alt="Cielo" style={{ height: '30px' }} className="mb-2" />
                    <h6 className="mb-0">2,09%</h6>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-muted mb-1">PARCELADO 7/12</p>
                    <img src={cieloLogo} alt="Cielo" style={{ height: '30px' }} className="mb-2" />
                    <h6 className="mb-0">2,39%</h6>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-muted mb-1">ANTECIPAÇÃO</p>
                    <img src={cieloLogo} alt="Cielo" style={{ height: '30px' }} className="mb-2" />
                    <h6 className="mb-0">0,85%</h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Gráficos */}
        <Row>
          <Col md={6}>
            <Card className="mb-4 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <h5 className="card-title mb-4 text-success"style={{ textAlign: "center" }}>RESUMO DE VENDAS POR DIA</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { date: '01/02/2025', value: 30000 },
                    { date: '05/02/2025', value: 65000 },
                    { date: '06/02/2025', value: 62000 },
                    { date: '08/02/2025', value: 48000 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" />
                    <YAxis tickFormatter={(value) => `R$${value}`} />
                    <Tooltip formatter={(value) => `R$${value}`} />
                    <Bar dataKey="value" fill="#20B2AA" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-3">
                  <p className="mb-0">TOTAL: R$226.042,57 / TICKET MÉDIO: R$256,57</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <h5 className="card-title mb-4 text-success"style={{ textAlign: "center" }}>VENDAS POR TIPO DE OPERAÇÃO</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={[
                    { date: '01/02/2025', debito: 20000, credito: 10000, parcelado: 5000 },
                    { date: '05/02/2025', debito: 25000, credito: 28000, parcelado: 10000 },
                    { date: '06/02/2025', debito: 28000, credito: 32000, parcelado: 12000 },
                    { date: '08/02/2025', debito: 25000, credito: 22000, parcelado: 10000 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" />
                    <YAxis tickFormatter={(value) => `R$${value}`} />
                    <Tooltip formatter={(value) => `R$${value}`} />
                    <Legend />
                    <Line type="monotone" dataKey="debito" name="Débito" stroke="#FFD700" />
                    <Line type="monotone" dataKey="credito" name="Crédito" stroke="#20B2AA" />
                    <Line type="monotone" dataKey="parcelado" name="Parcelado" stroke="#FF6B6B" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="text-center mt-3">
                  <p className="mb-0">TOTAL: R$226.042,57</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Gráficos Adicionais */}
        {/* Linha 1: Recebidos e A Receber */}
        <Row>
          <Col md={6}>
            <Card className="mb-4 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <h5 className="card-title mb-4 text-success" style={{ textAlign: "center" }}>RECEBIDOS POR DIA</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { date: '03/02/2025', value: 130000 },
                    { date: '04/02/2025', value: 65000 },
                    { date: '05/02/2025', value: 55000 },
                    { date: '06/02/2025', value: 62000 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" />
                    <YAxis tickFormatter={(value) => `R$${value}`} />
                    <Tooltip formatter={(value) => `R$${value}`} />
                    <Bar dataKey="value" fill="#4CAF50" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-3">
                  <p className="mb-0">TOTAL: R$319.035,60</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <h5 className="card-title mb-4 text-success" style={{ textAlign: "center" }}>A RECEBER NOS PRÓXIMOS 30 DIAS</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { date: '07/02', value: 40000 },
                    { date: '11/02', value: 120000 },
                    { date: '15/02', value: 35000 },
                    { date: '19/02', value: 110000 },
                    { date: '23/02', value: 115000 },
                    { date: '27/02', value: 130000 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" />
                    <YAxis tickFormatter={(value) => `R$${value}`} />
                    <Tooltip formatter={(value) => `R$${value}`} />
                    <Bar dataKey="value" fill="#2196F3" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-3">
                  <p className="mb-0">TOTAL: R$1.021.981,82</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Linha 2: Vendas por Bandeira e Adquirente */}
        <Row>
          <Col md={6}>
            <Card className="mb-4 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <h5 className="card-title mb-4 text-success" style={{ textAlign: "center" }}>VENDAS POR BANDEIRA</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'BANRICOMPRAS', value: 3861.64, fill: '#FF7043' },
                        { name: 'MASTERCARD', value: 120000, fill: '#5C6BC0' },
                        { name: 'VISA', value: 102180.93, fill: '#78909C' }
                      ]}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      label
                    />
                    <Tooltip formatter={(value) => `R$${value}`} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-center mt-3">
                  <p className="mb-0">TOTAL: R$226.042,57</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <h5 className="card-title mb-4 text-success" style={{ textAlign: "center" }}>VENDAS POR ADQUIRENTE</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'CIELO', value: 222180.93, fill: '#2196F3' },
                        { name: 'OUTROS', value: 3861.64, fill: '#E0E0E0' }
                      ]}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      label
                    />
                    <Tooltip formatter={(value) => `R$${value}`} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-center mt-3">
                  <p className="mb-0">TOTAL: R$226.042,57</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Linha 3: Taxas por Bandeira e Adquirente */}
        <Row>
          <Col md={6}>
            <Card className="mb-4 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <h5 className="card-title mb-4 text-success" style={{ textAlign: "center" }}>TAXAS ($) POR BANDEIRA</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { name: 'AMEX', value: 75.3 },
                    { name: 'BANRICOMPRAS', value: 85.5 },
                    { name: 'ELO', value: 45.8 },
                    { name: 'MASTERCARD', value: 1750.5 },
                    { name: 'VISA', value: 1676.29 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `R$${value}`} />
                    <Tooltip formatter={(value) => `R$${value}`} />
                    <Bar dataKey="value" fill="#7E57C2" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-3">
                  <p className="mb-0">TOTAL: R$3.633,39</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <h5 className="card-title mb-4 text-success" style={{ textAlign: "center" }}>TAXAS ($) / DESPESAS ($) POR ADQUIRENTE</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { name: 'BANRISUL', value: 85.5 },
                    { name: 'CIELO', value: 3547.89 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `R$${value}`} />
                    <Tooltip formatter={(value) => `R$${value}`} />
                    <Bar dataKey="value" fill="#FF7043" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-3">
                  <p className="mb-0">TOTAL: R$3.633,39</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Linha 4: Taxas % por Bandeira e Adquirente */}
        <Row>
          <Col md={6}>
            <Card className="mb-4 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <h5 className="card-title mb-4 text-success" style={{ textAlign: "center" }}>TAXAS (%) POR BANDEIRA</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { name: 'AMEX', value: 2.5 },
                    { name: 'BANRICOMPRAS', value: 2.0 },
                    { name: 'ELO', value: 1.0 },
                    { name: 'MASTERCARD', value: 2.0 },
                    { name: 'VISA', value: 1.3 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="value" fill="#7E57C2" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-3">
                  <p className="mb-0">MÉDIA: 1.76%</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <h5 className="card-title mb-4 text-success" style={{ textAlign: "center" }}>TAXAS (%) / DESPESAS (%) POR ADQUIRENTE</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { name: 'BANRISUL', value: 2.0 },
                    { name: 'CIELO', value: 1.6 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="value" fill="#FF7043" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-3">
                  <p className="mb-0">MÉDIA: 1.8%</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
