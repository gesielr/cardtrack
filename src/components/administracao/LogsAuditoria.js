import React, { useState } from 'react';
import { Card, Table, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import { FaSearch, FaDownload, FaTimes } from 'react-icons/fa';

const LogsAuditoria = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLog, setSelectedLog] = useState(null);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [filtros, setFiltros] = useState({
    intervaloData: '',
    login: '',
    servico: '',
    acao: '',
    duracao: '',
    ip: '',
    cliente: '',
    navegador: '',
    estadoErro: 'Todos',
    duracaoFim: ''
  });

  // Dados mockados para demonstração
  const logsMock = [
    {
      tempo: '2025-02-18 23:20:47',
      login: 'carlos',
      servico: 'TenantSettingsAppService',
      acao: 'GetAllSettings',
      duracao: '34 ms',
      ip: '189.85.182.36',
      cliente: '',
      navegador: 'Chrome / 133.0 / WinNT',
      parametros: '{}',
      status: 'Sucesso'
    },
    {
      tempo: '2025-02-18 23:20:46',
      login: 'carlos',
      servico: 'UserPreferenceAppService',
      acao: 'GetUserPreferencesForEdit',
      duracao: '3 ms',
      ip: '189.85.182.36',
      cliente: '',
      navegador: 'Chrome / 133.0 / WinNT',
      parametros: '{}',
      status: 'Sucesso'
    }
  ];

  const handleFiltroChange = (campo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const handleVerDetalhes = (log) => {
    setSelectedLog(log);
    setShowModal(true);
  };

  const toggleAdvancedFilters = () => {
    setShowAdvancedFilters(!showAdvancedFilters);
  };

  return (
    <div>
      <h3 className="text-danger mb-4">Logs de Auditoria</h3>
      
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Intervalo de datas</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="18/02/2025 - 18/02/2025"
                  value={filtros.intervaloData}
                  onChange={(e) => handleFiltroChange('intervaloData', e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Login</Form.Label>
                <Form.Control 
                  type="text"
                  value={filtros.login}
                  onChange={(e) => handleFiltroChange('login', e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          {showAdvancedFilters && (
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Serviço</Form.Label>
                  <Form.Control 
                    type="text"
                    value={filtros.servico}
                    onChange={(e) => handleFiltroChange('servico', e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Duração</Form.Label>
                  <div className="d-flex">
                    <Form.Control 
                      type="text"
                      value={filtros.duracao}
                      onChange={(e) => handleFiltroChange('duracao', e.target.value)}
                      className="me-2"
                    />
                    <div style={{ width: '100px', textAlign: 'center', lineHeight: '38px' }}>---</div>
                    <Form.Control 
                      type="text"
                      value={filtros.duracaoFim}
                      onChange={(e) => handleFiltroChange('duracaoFim', e.target.value)}
                      className="ms-2"
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Ação</Form.Label>
                  <Form.Control 
                    type="text"
                    value={filtros.acao}
                    onChange={(e) => handleFiltroChange('acao', e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Navegador</Form.Label>
                  <Form.Control 
                    type="text"
                    value={filtros.navegador}
                    onChange={(e) => handleFiltroChange('navegador', e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Estado de erro</Form.Label>
                  <Form.Select
                    value={filtros.estadoErro}
                    onChange={(e) => handleFiltroChange('estadoErro', e.target.value)}
                  >
                    <option value="Todos">Todos</option>
                    <option value="Sucesso">Sucesso</option>
                    <option value="Erro">Erro</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          )}

          <div className="d-flex align-items-center mb-3">
            <Button 
              variant="link" 
              className="text-primary p-0" 
              style={{ textDecoration: 'none' }}
              onClick={toggleAdvancedFilters}
            >
              {showAdvancedFilters ? '▾ Esconder' : '▾ Mostrar'} filtros avançados
            </Button>
            <div className="ms-auto">
              <Button variant="outline-primary" className="me-2">
                <FaDownload className="me-2" />
                Exportar para Excel
              </Button>
              <Button variant="primary">
                <FaSearch className="me-2" />
                Atualizar
              </Button>
            </div>
          </div>

          <div style={{ maxHeight: '400px', overflowY: 'auto', width: '100%' }}>
            <Table 
              responsive 
              striped 
              bordered 
              hover 
              className="mb-0"
              style={{ tableLayout: 'fixed', width: '100%', borderCollapse: 'collapse'  }} // ✅ Mantém a estrutura fixa
            >
              <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <tr>
                  <th style={{ backgroundColor: '#f8f9fa', width: '5%' }}></th>
                  <th style={{ backgroundColor: '#f8f9fa', width: '10%' }}>Status</th>
                  <th style={{ backgroundColor: '#f8f9fa', width: '25%' }}>Tempo</th>
                  <th style={{ backgroundColor: '#f8f9fa', width: '10%' }}>Login</th>
                  <th style={{ backgroundColor: '#f8f9fa', width: '28%' }}>Serviço</th>
                  <th style={{ backgroundColor: '#f8f9fa', width: '28%' }}>Ação</th>
                  <th style={{ backgroundColor: '#f8f9fa', width: '10%' }}>Duração</th>
                  <th style={{ backgroundColor: '#f8f9fa', width: '18%' }}>IP</th>
                  <th style={{ backgroundColor: '#f8f9fa', width: '10%' }}>Cliente</th>
                  <th style={{ backgroundColor: '#f8f9fa', width: '24%' }}>Navegador</th>
                </tr>
              </thead>
              <tbody>
                {logsMock.map((log, index) => (
                  <tr key={index}>
                    <td>
                      <Button 
                        variant="link" 
                        className="p-0" 
                        onClick={() => handleVerDetalhes(log)}
                      >
                        <FaSearch />
                      </Button>
                    </td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                    <td>{log.tempo}</td>
                    <td>{log.login}</td>
                    <td>{log.servico}</td>
                    <td>{log.acao}</td>
                    <td>{log.duracao}</td>
                    <td>{log.ip}</td>
                    <td>{log.cliente}</td>
                    <td>{log.navegador}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>


          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="d-flex align-items-center">
              <span className="me-2">1</span>
              <span className="me-2">/</span>
              <span className="me-2">3</span>
              <Form.Select style={{ width: '80px' }} className="me-2">
                <option>100</option>
                <option>50</option>
                <option>25</option>
              </Form.Select>
              <span>itens por página</span>
            </div>
            <div>
              1 - 100 de 242 itens
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Modal de Detalhes do Log */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header>
          <Modal.Title>Logs de Auditoria</Modal.Title>
          <Button variant="link" className="ms-auto" onClick={() => setShowModal(false)}>
            <FaTimes />
          </Button>
        </Modal.Header>
        <Modal.Body>
          {selectedLog && (
            <>
              <h5 className="mb-4">Informações de usuário</h5>
              <Row className="mb-4">
                <Col md={4} className="text-secondary">Login:</Col>
                <Col md={8}>{selectedLog.login}</Col>
                
                <Col md={4} className="text-secondary">IP:</Col>
                <Col md={8}>{selectedLog.ip}</Col>
                
                <Col md={4} className="text-secondary">Cliente:</Col>
                <Col md={8}>{selectedLog.cliente || 'N/A'}</Col>
                
                <Col md={4} className="text-secondary">Navegador:</Col>
                <Col md={8}>{selectedLog.navegador}</Col>
              </Row>

              <h5 className="mb-4">Informações de ação</h5>
              <Row className="mb-4">
                <Col md={4} className="text-secondary">Serviço:</Col>
                <Col md={8}>{selectedLog.servico}</Col>
                
                <Col md={4} className="text-secondary">Ação:</Col>
                <Col md={8}>{selectedLog.acao}</Col>
                
                <Col md={4} className="text-secondary">Tempo:</Col>
                <Col md={8}>{selectedLog.tempo}</Col>
                
                <Col md={4} className="text-secondary">Duração:</Col>
                <Col md={8}>{selectedLog.duracao}</Col>
              </Row>

              <h5 className="mb-4">Parâmetros</h5>
              <Form.Control
                as="textarea"
                rows={3}
                value={selectedLog.parametros}
                readOnly
                className="mb-4"
              />

              <h5 className="mb-4">Dados customizados</h5>
              <p>Nenhum</p>

              <h5 className="mb-4">Estado de erro</h5>
              <p className="text-success">● Sucesso</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LogsAuditoria;
