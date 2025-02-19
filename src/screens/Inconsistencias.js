import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { 
  BarChart, 
  Bar,
  Tooltip, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  Legend 
} from "recharts";
import { 
  FaShoppingCart,
  FaFileInvoiceDollar,
  FaHandshake,
  FaExclamationCircle,
  FaDatabase,
  FaSearch,
  FaCalendar,
  FaStore,
  FaCreditCard,
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import cieloLogo from "../assets/cielologo.png";

const Inconsistencias = () => {
  const [selectedDate, setSelectedDate] = useState('07/01/2025');
  const [selectedEstabelecimento, setSelectedEstabelecimento] = useState('');
  const [selectedAdquirente, setSelectedAdquirente] = useState('');
  const [selectedEstabelecimentoAdquirente, setSelectedEstabelecimentoAdquirente] = useState('');

  const inconsistencyData = [
    { name: 'Jan', vendas: 4000, taxas: 2400, bancarias: 2400 },
    { name: 'Fev', vendas: 3000, taxas: 1398, bancarias: 2210 },
    { name: 'Mar', vendas: 2000, taxas: 9800, bancarias: 2290 },
    { name: 'Abr', vendas: 2780, taxas: 3908, bancarias: 2000 },
    { name: 'Mai', vendas: 1890, taxas: 4800, bancarias: 2181 },
    { name: 'Jun', vendas: 2390, taxas: 3800, bancarias: 2500 },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '250px', padding: '20px', transition: 'margin-left 0.3s ease' }}>
        {/* Header com Logo e Filtros */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Inconsistências</h2>
          <img src={cieloLogo} alt="Cielo Logo" style={{ height: '30px' }} />
        </div>

        {/* Filtros */}
        <Row className="mb-4">
          <Col md={3}>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaCalendar />
              </span>
              <input 
                type="date" 
                className="form-control" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </Col>
          <Col md={3}>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaStore />
              </span>
              <select 
                className="form-select"
                value={selectedEstabelecimento}
                onChange={(e) => setSelectedEstabelecimento(e.target.value)}
              >
                <option value="">Estabelecimento</option>
                <option value="1">Loja 1</option>
                <option value="2">Loja 2</option>
              </select>
            </div>
          </Col>
          <Col md={3}>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaCreditCard />
              </span>
              <select 
                className="form-select"
                value={selectedAdquirente}
                onChange={(e) => setSelectedAdquirente(e.target.value)}
              >
                <option value="">Adquirente</option>
                <option value="cielo">Cielo</option>
                <option value="rede">Rede</option>
              </select>
            </div>
          </Col>
          <Col md={3}>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaStore />
              </span>
              <select 
                className="form-select"
                value={selectedEstabelecimentoAdquirente}
                onChange={(e) => setSelectedEstabelecimentoAdquirente(e.target.value)}
              >
                <option value="">Est. Adquirente</option>
                <option value="1">Estabelecimento 1</option>
                <option value="2">Estabelecimento 2</option>
              </select>
            </div>
          </Col>
        </Row>

        {/* Cards com Resumos */}
        <Row className="mb-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="rounded-circle bg-info bg-opacity-10 p-3">
                    <FaShoppingCart className="text-info" size={24} />
                  </div>
                  <Button variant="outline-info" size="sm">
                    <FaSearch className="me-1" /> Detalhe
                  </Button>
                </div>
                <h3 className="text-info mb-2">R$ 0,00</h3>
                <p className="text-muted mb-0">Inconsistências nas Vendas</p>
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
                  <Button variant="outline-danger" size="sm">
                    <FaSearch className="me-1" /> Detalhe
                  </Button>
                </div>
                <h3 className="text-danger mb-2">R$ 0,00</h3>
                <p className="text-muted mb-0">Inconsistências nas Taxas</p>
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
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3">
                    <FaHandshake className="text-primary" size={24} />
                  </div>
                  <Button variant="outline-primary" size="sm">
                    <FaSearch className="me-1" /> Detalhe
                  </Button>
                </div>
                <h3 className="text-primary mb-2">R$ 0,00</h3>
                <p className="text-muted mb-0">Inconsistências Bancárias</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="rounded-circle bg-warning bg-opacity-10 p-3">
                    <FaExclamationCircle className="text-warning" size={24} />
                  </div>
                  <Button variant="outline-warning" size="sm">
                    <FaSearch className="me-1" /> Detalhe
                  </Button>
                </div>
                <h3 className="text-warning mb-2">R$ 0,00</h3>
                <p className="text-muted mb-0">Inconsistências nas Despesas</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="rounded-circle bg-success bg-opacity-10 p-3">
                    <FaDatabase className="text-success" size={24} />
                  </div>
                  <Button variant="outline-success" size="sm">
                    <FaSearch className="me-1" /> Detalhe
                  </Button>
                </div>
                <h3 className="text-success mb-2">R$ 1.518.815,40</h3>
                <p className="text-muted mb-0">Inconsistências CardTrack-ERP</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Gráfico de Inconsistências */}
        <Row>
          <Col md={12}>
            <Card className="shadow-sm border-0" style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08) !important',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05) !important'
            }}>
              <Card.Body>
                <h5 className="card-title mb-4">Evolução das Inconsistências</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={inconsistencyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="vendas" name="Vendas" fill="#0dcaf0" />
                    <Bar dataKey="taxas" name="Taxas" fill="#dc3545" />
                    <Bar dataKey="bancarias" name="Bancárias" fill="#0d6efd" />
                  </BarChart>
                </ResponsiveContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Inconsistencias;
