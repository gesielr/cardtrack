import React, { useState } from 'react';
import { Row, Col, Form, Button, Table, Dropdown, Modal } from 'react-bootstrap';
import { FaCog, FaTimes } from 'react-icons/fa';

const GerenciarExtratos = () => {
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [contaCorrente, setContaCorrente] = useState('');
  const [showDetalhesModal, setShowDetalhesModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [estabelecimento, setEstabelecimento] = useState('');
  const [contaCorrenteImport, setContaCorrenteImport] = useState('');
  const [gerarLotes, setGerarLotes] = useState(false);

  // Dados de exemplo para a tabela principal
  const [dados, setDados] = useState([
    {
      id: 1,
      dataCriacao: '06/02/2025',
      nomeArquivo: '2_Banrisul_Filial_01_Janeiro_2025.ofx_2025',
      banco: 'Banrisul',
      contaCorrente: 'Ag:142 - CC:615714929',
      dataInicial: '02/01/2025',
      dataFinal: '31/01/2025',
      registros: [
        { id: 1, dataMovimento: '02/01/2025', banco: 'Banrisul', contaCorrente: 'Ag:1142 - CC:615714929', descricao: 'VERO BANRICOMPRAS A PRAZO VERO BA...', valor: 51827.00 },
        { id: 2, dataMovimento: '02/01/2025', banco: 'Banrisul', contaCorrente: 'Ag:1142 - CC:615714929', descricao: 'VERO BANRICOMPRAS A PRAZO VERO BA...', valor: 6423.00 },
        { id: 3, dataMovimento: '03/01/2025', banco: 'Banrisul', contaCorrente: 'Ag:1142 - CC:615714929', descricao: 'VERO BANRICOMPRAS A VISTA VERO BAN...', valor: 69400.00 }
      ]
    },
    {
      id: 2,
      dataCriacao: '06/02/2025',
      nomeArquivo: '2_Banrisul_Matriz_Janeiro_2025.ofx_2025',
      banco: 'Banrisul',
      contaCorrente: 'Ag:142 - CC:615714902',
      dataInicial: '02/01/2025',
      dataFinal: '31/01/2025',
      registros: []
    }
  ]);

  // Modal de Detalhes
  const handleShowDetalhes = (item) => {
    setSelectedItem(item);
    setShowDetalhesModal(true);
  };

  const handleCloseDetalhes = () => {
    setShowDetalhesModal(false);
    setSelectedItem(null);
  };

  // Modal de Exclusão
  const handleShowDelete = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleCloseDelete = () => {
    setShowDeleteModal(false);
    setSelectedItem(null);
  };

  const handleDelete = () => {
    if (selectedItem) {
      const newDados = dados.filter(item => item.id !== selectedItem.id);
      setDados(newDados);
      handleCloseDelete();
    }
  };

  // Modal de Importação
  const handleShowImport = () => {
    setShowImportModal(true);
  };

  const handleCloseImport = () => {
    setShowImportModal(false);
    setSelectedFile(null);
    setEstabelecimento('');
    setContaCorrenteImport('');
    setGerarLotes(false);
  };

  const handleImport = () => {
    // Aqui você implementaria a lógica de importação
    console.log('Importando arquivo:', selectedFile);
    console.log('Estabelecimento:', estabelecimento);
    console.log('Conta Corrente:', contaCorrenteImport);
    console.log('Gerar Lotes:', gerarLotes);
    handleCloseImport();
  };

  // Função para excluir registro individual
  const handleDeleteRegistro = (registroId) => {
    if (selectedItem) {
      const newDados = dados.map(item => {
        if (item.id === selectedItem.id) {
          return {
            ...item,
            registros: item.registros.filter(reg => reg.id !== registroId)
          };
        }
        return item;
      });
      setDados(newDados);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Row className="flex-grow-1 me-2">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Intervalo de datas</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type="date"
                  value={dataInicio}
                  onChange={(e) => setDataInicio(e.target.value)}
                  className="me-2"
                />
                <Form.Control
                  type="date"
                  value={dataFim}
                  onChange={(e) => setDataFim(e.target.value)}
                />
              </div>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Conta Corrente</Form.Label>
              <Form.Select 
                value={contaCorrente} 
                onChange={(e) => setContaCorrente(e.target.value)}
              >
                <option value="">Todos</option>
                <option value="615714929">Ag:142 - CC:615714929</option>
                <option value="615714902">Ag:142 - CC:615714902</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4} className="d-flex align-items-end">
            <Button variant="primary">BUSCAR</Button>
          </Col>
        </Row>
        <Button variant="primary" onClick={handleShowImport}>
          + ADICIONAR
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: '80px' }}>Ações</th>
            <th>Data De Criação</th>
            <th>Nome Do Arquivo</th>
            <th>Banco</th>
            <th>Conta Corrente</th>
            <th>Data Inicial</th>
            <th>Data Final</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="light" size="sm" id={`dropdown-${item.id}`}>
                    <FaCog /> AÇÕES
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleShowDetalhes(item)}>Detalhe</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleShowDelete(item)}>Excluir</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>{item.dataCriacao}</td>
              <td>{item.nomeArquivo}</td>
              <td>{item.banco}</td>
              <td>{item.contaCorrente}</td>
              <td>{item.dataInicial}</td>
              <td>{item.dataFinal}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de Detalhes */}
      <Modal show={showDetalhesModal} onHide={handleCloseDetalhes} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Registros do Extrato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: '50px' }}></th>
                <th>Data Moviment.</th>
                <th>Banco</th>
                <th>Conta Corrente</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Lote ID</th>
              </tr>
            </thead>
            <tbody>
              {selectedItem?.registros.map((registro) => (
                <tr key={registro.id}>
                  <td>
                    <Button 
                      variant="danger" 
                      size="sm"
                      onClick={() => handleDeleteRegistro(registro.id)}
                    >
                      <FaTimes />
                    </Button>
                  </td>
                  <td>{registro.dataMovimento}</td>
                  <td>{registro.banco}</td>
                  <td>{registro.contaCorrente}</td>
                  <td>{registro.descricao}</td>
                  <td>R${registro.valor.toFixed(2)}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetalhes}>
            FECHAR
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Confirmação de Exclusão */}
      <Modal show={showDeleteModal} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Você tem certeza?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          O arquivo {selectedItem?.nomeArquivo} será excluído.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Importação */}
      <Modal show={showImportModal} onHide={handleCloseImport}>
        <Modal.Header closeButton>
          <Modal.Title>Importar Extrato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Button variant="primary" onClick={() => document.getElementById('fileInput').click()}>
                SELECIONAR ARQUIVO
              </Button>
              <Form.Control
                id="fileInput"
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
              <span className="ms-2">
                {selectedFile ? selectedFile.name : 'Nenhum arquivo selecionado'}
              </span>
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Select
                    value={estabelecimento}
                    onChange={(e) => setEstabelecimento(e.target.value)}
                  >
                    <option value="">Estabelecimento</option>
                    {/* Adicionar opções de estabelecimento */}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Select
                    value={contaCorrenteImport}
                    onChange={(e) => setContaCorrenteImport(e.target.value)}
                  >
                    <option value="">Conta Corrente</option>
                    {/* Adicionar opções de conta corrente */}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Gerar Lotes Conciliação"
                checked={gerarLotes}
                onChange={(e) => setGerarLotes(e.target.checked)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseImport}>
            FECHAR
          </Button>
          <Button variant="primary" onClick={handleImport}>
            IMPORTAR ARQUIVO
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GerenciarExtratos;
