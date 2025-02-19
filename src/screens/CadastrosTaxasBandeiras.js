import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Container, Table, Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import './CadastrosTaxasBandeiras.css';

const CadastrosTaxasBandeiras = () => {
  const [selectedAdquirente, setSelectedAdquirente] = useState('Todos');
  const [selectedBandeira, setSelectedBandeira] = useState('Todos');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTaxa, setSelectedTaxa] = useState(null);
  const [newTaxa, setNewTaxa] = useState({
    estabelecimento: 'Todos',
    adquirente: 'Todos',
    bandeira: 'Todos',
    inicioVigencia: '',
    fimVigencia: '',
    debito: '',
    credito: '',
    pcl_2_3: '',
    pcl_4_6: '',
    pcl_7_12: '',
    antecipacao: '',
    especializado: '',
    especializado2: '',
    crediario: '',
    alimentacao: '',
    refeicao: '',
    valorMinimo: '',
    valorInicial: '',
    valorFinal: ''
  });
  const [formData, setFormData] = useState({
    estabelecimento: 'Todos',
    adquirente: '',
    bandeira: '',
    inicioVigencia: '',
    fimVigencia: '',
    debito: '',
    credito: '',
    pcl_2_3: '',
    pcl_4_6: '',
    pcl_7_12: '',
    antecipacao: '',
    especializado: '',
    especializado2: '',
    crediario: '',
    alimentacao: '',
    refeicao: '',
    valorMinimo: ''
  });

  // Lista de adquirentes disponíveis
  const adquirentes = ['Todos', 'CIELO', 'REDECARD', 'STONE', 'BANRISUL'];

  // Lista de bandeiras disponíveis
  const bandeiras = ['Todos', 'VISA', 'MASTERCARD', 'DINERS', 'ELO', 'AMEX'];

  // Dados de exemplo
  const [taxas, setTaxas] = useState([
    {
      id: 1,
      adquirente: 'CIELO',
      bandeira: 'VISA',
      estabelecimento: 'Todos',
      inicioVigencia: '01/06/2023',
      fimVigencia: '31/05/2025',
      debito: '0.80',
      credito: '1.92',
      pcl_2_3: '2.14',
      pcl_4_6: '2.14',
      pcl_7_12: '2.44',
      alimentacao: '',
      refeicao: '',
      antecipacao: '0.85',
      especializado: '',
      especializado2: '',
      crediario: '4.00',
      valorMinimo: '0'
    },
    {
      id: 2,
      adquirente: 'CIELO',
      bandeira: 'MASTERCARD',
      estabelecimento: 'Todos',
      inicioVigencia: '01/06/2023',
      fimVigencia: '31/05/2025',
      debito: '0.80',
      credito: '2.07',
      pcl_2_3: '2.40',
      pcl_4_6: '2.40',
      pcl_7_12: '2.81',
      alimentacao: '',
      refeicao: '',
      antecipacao: '0.85',
      especializado: '4.30',
      especializado2: '1.15',
      crediario: '2.50',
      valorMinimo: '0'
    }
  ]);

  const handleAdquirenteChange = (e) => {
    setSelectedAdquirente(e.target.value);
  };

  const handleBandeiraChange = (e) => {
    setSelectedBandeira(e.target.value);
  };

  const handleEdit = (taxa) => {
    setSelectedTaxa(taxa);
    setFormData({
      estabelecimento: taxa.estabelecimento,
      adquirente: taxa.adquirente,
      bandeira: taxa.bandeira,
      inicioVigencia: taxa.inicioVigencia,
      fimVigencia: taxa.fimVigencia,
      debito: taxa.debito,
      credito: taxa.credito,
      pcl_2_3: taxa.pcl_2_3,
      pcl_4_6: taxa.pcl_4_6,
      pcl_7_12: taxa.pcl_7_12,
      antecipacao: taxa.antecipacao,
      especializado: taxa.especializado,
      especializado2: taxa.especializado2,
      crediario: taxa.crediario,
      alimentacao: taxa.alimentacao,
      refeicao: taxa.refeicao,
      valorMinimo: taxa.valorMinimo
    });
    setShowEditModal(true);
  };

  const handleDelete = (taxa) => {
    setSelectedTaxa(taxa);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    const updatedTaxas = taxas.filter(taxa => taxa.id !== selectedTaxa.id);
    setTaxas(updatedTaxas);
    setShowDeleteModal(false);
    setSelectedTaxa(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    const updatedTaxas = taxas.map(taxa =>
      taxa.id === selectedTaxa.id ? { ...taxa, ...formData } : taxa
    );
    setTaxas(updatedTaxas);
    setShowEditModal(false);
    setSelectedTaxa(null);
  };

  const handleAddNew = () => {
    const newId = Math.max(...taxas.map(t => t.id)) + 1;
    const novaTaxa = {
      id: newId,
      ...newTaxa
    };
    
    setTaxas([...taxas, novaTaxa]);
    setShowAddModal(false);
    setNewTaxa({
      estabelecimento: 'Todos',
      adquirente: 'Todos',
      bandeira: 'Todos',
      inicioVigencia: '',
      fimVigencia: '',
      debito: '',
      credito: '',
      pcl_2_3: '',
      pcl_4_6: '',
      pcl_7_12: '',
      antecipacao: '',
      especializado: '',
      especializado2: '',
      crediario: '',
      alimentacao: '',
      refeicao: '',
      valorMinimo: '',
      valorInicial: '',
      valorFinal: ''
    });
  };

  const handleNewTaxaChange = (e) => {
    const { name, value } = e.target;
    setNewTaxa(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <Container fluid style={{ marginLeft: '250px', padding: '20px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-danger">Taxas Bandeiras</h2>
          <Button 
            variant="primary" 
            className="d-flex align-items-center gap-2"
            onClick={() => setShowAddModal(true)}
          >
            <FaPlus /> ADICIONAR
          </Button>
        </div>

        <div className="filtros-container mb-4">
          <div className="row">
            <div className="col-md-3">
              <Form.Group>
                <Form.Label>Adquirente</Form.Label>
                <Form.Select value={selectedAdquirente} onChange={handleAdquirenteChange}>
                  {adquirentes.map((adq, index) => (
                    <option key={index} value={adq}>{adq}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <Form.Label>Bandeira</Form.Label>
                <Form.Select value={selectedBandeira} onChange={handleBandeiraChange}>
                  {bandeiras.map((band, index) => (
                    <option key={index} value={band}>{band}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <Button variant="primary">ATUALIZAR</Button>
            </div>
          </div>
        </div>

        <div className="table-container">
          <div className="table-scroll">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ações</th>
                  <th>Adquirente</th>
                  <th>Bandeira</th>
                  <th>Estabelecimento</th>
                  <th>Início Da Vigência</th>
                  <th>Fim Da Vigência</th>
                  <th>% Débito</th>
                  <th>% Crédito</th>
                  <th>% Pcl. 2/3</th>
                  <th>% Pcl. 4/6</th>
                  <th>% Pcl. 7/12</th>
                  <th>Alimentação</th>
                  <th>Refeição</th>
                  <th>Antecipação</th>
                  <th>Especializado</th>
                  <th>Especializado 2</th>
                  <th>Crediário</th>
                  <th>Valor Mínimo Da</th>
                </tr>
              </thead>
              <tbody>
                {taxas.map((taxa) => (
                  <tr key={taxa.id}>
                    <td style={{ width: '100px' }}>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-actions" className="btn-sm">
                          AÇÕES
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => handleEdit(taxa)}>
                            Editar
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleDelete(taxa)}>
                            Excluir
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>{taxa.adquirente}</td>
                    <td>{taxa.bandeira}</td>
                    <td>{taxa.estabelecimento}</td>
                    <td>{taxa.inicioVigencia}</td>
                    <td>{taxa.fimVigencia}</td>
                    <td>{taxa.debito}</td>
                    <td>{taxa.credito}</td>
                    <td>{taxa.pcl_2_3}</td>
                    <td>{taxa.pcl_4_6}</td>
                    <td>{taxa.pcl_7_12}</td>
                    <td>{taxa.alimentacao}</td>
                    <td>{taxa.refeicao}</td>
                    <td>{taxa.antecipacao}</td>
                    <td>{taxa.especializado}</td>
                    <td>{taxa.especializado2}</td>
                    <td>{taxa.crediario}</td>
                    <td>{taxa.valorMinimo}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>

      {/* Modal de Edição */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
        <Modal.Header>
          <Modal.Title>Editar Taxa Bandeira</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row">
              <div className="col-md-4">
                <Form.Group className="mb-3">
                  <Form.Label>Estabelecimento</Form.Label>
                  <Form.Select
                    name="estabelecimento"
                    value={formData.estabelecimento}
                    onChange={handleInputChange}
                  >
                    <option value="Todos">Todos</option>
                    {/* <option value="Estabelecimento 1">Estabelecimento 1</option>
                    <option value="Estabelecimento 2">Estabelecimento 2</option> */}
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group className="mb-3">
                  <Form.Label>Adquirente</Form.Label>
                  <Form.Control
                    type="text"
                    name="adquirente"
                    value={formData.adquirente}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group className="mb-3">
                  <Form.Label>Bandeira</Form.Label>
                  <Form.Control
                    type="text"
                    name="bandeira"
                    value={formData.bandeira}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Início da Vigência</Form.Label>
                  <Form.Control
                    type="text"
                    name="inicioVigencia"
                    value={formData.inicioVigencia}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Fim da Vigência</Form.Label>
                  <Form.Control
                    type="text"
                    name="fimVigencia"
                    value={formData.fimVigencia}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Débito</Form.Label>
                  <Form.Control
                    type="text"
                    name="debito"
                    value={formData.debito}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Crédito</Form.Label>
                  <Form.Control
                    type="text"
                    name="credito"
                    value={formData.credito}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Parcelado 2/3</Form.Label>
                  <Form.Control
                    type="text"
                    name="pcl_2_3"
                    value={formData.pcl_2_3}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Parcelado 4/6</Form.Label>
                  <Form.Control
                    type="text"
                    name="pcl_4_6"
                    value={formData.pcl_4_6}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Parcelado 7/12</Form.Label>
                  <Form.Control
                    type="text"
                    name="pcl_7_12"
                    value={formData.pcl_7_12}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Antecipação</Form.Label>
                  <Form.Control
                    type="text"
                    name="antecipacao"
                    value={formData.antecipacao}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Especializado</Form.Label>
                  <Form.Control
                    type="text"
                    name="especializado"
                    value={formData.especializado}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Especializado 2</Form.Label>
                  <Form.Control
                    type="text"
                    name="especializado2"
                    value={formData.especializado2}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Crediário</Form.Label>
                  <Form.Control
                    type="text"
                    name="crediario"
                    value={formData.crediario}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Alimentação</Form.Label>
                  <Form.Control
                    type="text"
                    name="alimentacao"
                    value={formData.alimentacao}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Refeição</Form.Label>
                  <Form.Control
                    type="text"
                    name="refeicao"
                    value={formData.refeicao}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Valor Mínimo</Form.Label>
                  <Form.Control
                    type="text"
                    name="valorMinimo"
                    value={formData.valorMinimo}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            FECHAR
          </Button>
          <Button variant="primary" onClick={handleSave}>
            SALVAR
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Adição */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} size="lg">
        <Modal.Header>
          <Modal.Title>Criar nova Taxa - Bandeira</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row">
              <div className="col-md-4">
                <Form.Group className="mb-3">
                  <Form.Label>Estabelecimento</Form.Label>
                  <Form.Select
                    name="estabelecimento"
                    value={newTaxa.estabelecimento}
                    onChange={handleNewTaxaChange}
                  >
                    <option value="Todos">Todos</option>
                    {/* <option value="Estabelecimento 1">Estabelecimento 1</option>
                    <option value="Estabelecimento 2">Estabelecimento 2</option> */}
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group className="mb-3">
                  <Form.Label>Adquirente</Form.Label>
                  <Form.Select
                    name="adquirente"
                    value={newTaxa.adquirente}
                    onChange={handleNewTaxaChange}
                  >
                    {adquirentes.map((adq, index) => (
                      <option key={index} value={adq}>{adq}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group className="mb-3">
                  <Form.Label>Bandeira</Form.Label>
                  <Form.Select
                    name="bandeira"
                    value={newTaxa.bandeira}
                    onChange={handleNewTaxaChange}
                  >
                    {bandeiras.map((band, index) => (
                      <option key={index} value={band}>{band}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Início da Vigência</Form.Label>
                  <Form.Control
                    type="text"
                    name="inicioVigencia"
                    value={newTaxa.inicioVigencia}
                    onChange={handleNewTaxaChange}
                    placeholder="DD/MM/AAAA"
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Fim da Vigência</Form.Label>
                  <Form.Control
                    type="text"
                    name="fimVigencia"
                    value={newTaxa.fimVigencia}
                    onChange={handleNewTaxaChange}
                    placeholder="DD/MM/AAAA"
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Valor Inicial (Opcional)</Form.Label>
                  <Form.Control
                    type="text"
                    name="valorInicial"
                    value={newTaxa.valorInicial}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Valor Final (Opcional)</Form.Label>
                  <Form.Control
                    type="text"
                    name="valorFinal"
                    value={newTaxa.valorFinal}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Débito</Form.Label>
                  <Form.Control
                    type="text"
                    name="debito"
                    value={newTaxa.debito}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Crédito</Form.Label>
                  <Form.Control
                    type="text"
                    name="credito"
                    value={newTaxa.credito}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Parcelado 2/3</Form.Label>
                  <Form.Control
                    type="text"
                    name="pcl_2_3"
                    value={newTaxa.pcl_2_3}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Parcelado 4/6</Form.Label>
                  <Form.Control
                    type="text"
                    name="pcl_4_6"
                    value={newTaxa.pcl_4_6}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Parcelado 7/12</Form.Label>
                  <Form.Control
                    type="text"
                    name="pcl_7_12"
                    value={newTaxa.pcl_7_12}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Antecipação</Form.Label>
                  <Form.Control
                    type="text"
                    name="antecipacao"
                    value={newTaxa.antecipacao}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Especializado</Form.Label>
                  <Form.Control
                    type="text"
                    name="especializado"
                    value={newTaxa.especializado}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Especializado 2</Form.Label>
                  <Form.Control
                    type="text"
                    name="especializado2"
                    value={newTaxa.especializado2}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Crediário</Form.Label>
                  <Form.Control
                    type="text"
                    name="crediario"
                    value={newTaxa.crediario}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Alimentação</Form.Label>
                  <Form.Control
                    type="text"
                    name="alimentacao"
                    value={newTaxa.alimentacao}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Refeição</Form.Label>
                  <Form.Control
                    type="text"
                    name="refeicao"
                    value={newTaxa.refeicao}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className="mb-3">
                  <Form.Label>Valor Mínimo da Taxa</Form.Label>
                  <Form.Control
                    type="text"
                    name="valorMinimo"
                    value={newTaxa.valorMinimo}
                    onChange={handleNewTaxaChange}
                  />
                </Form.Group>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            FECHAR
          </Button>
          <Button variant="primary" onClick={handleAddNew}>
            SALVAR
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Exclusão */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header>
          <Modal.Title>Você tem certeza?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Taxa "{selectedTaxa?.estabelecimento}/{selectedTaxa?.adquirente}/{selectedTaxa?.bandeira}" será excluída.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CadastrosTaxasBandeiras;
