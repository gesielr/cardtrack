import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Contract = () => {
  return (
    <Container style={{ backgroundColor: "#f8f9fa", padding: "30px", borderRadius: "10px" }} id="contract">
      <h2 className="text-center mb-4">Informações da Empresa</h2>
      <Form>
        {/* Informações da empresa */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="razaoSocial">
              <Form.Label>Razão Social</Form.Label>
              <Form.Control type="text" placeholder="Digite a razão social" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="nomeFantasia">
              <Form.Label>Nome Fantasia</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome fantasia" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="cnpj">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control type="text" placeholder="Digite o CNPJ" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="ramoAtividade">
              <Form.Label>Ramo de Atividade</Form.Label>
              <Form.Select>
                <option>Selecione o ramo de atividade</option>
                <option>Comércio</option>
                <option>Serviços</option>
                <option>Indústria</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="cep">
              <Form.Label>CEP</Form.Label>
              <Form.Control type="text" placeholder="Digite o CEP" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="logradouro">
              <Form.Label>Logradouro</Form.Label>
              <Form.Control type="text" placeholder="Digite o logradouro" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="numero">
              <Form.Label>Número</Form.Label>
              <Form.Control type="text" placeholder="Digite o número" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="cidade">
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="text" placeholder="Digite a cidade" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="estado">
              <Form.Label>Estado</Form.Label>
              <Form.Select>
                <option>Selecione o estado</option>
                <option value="AC">Acre (AC)</option>
                <option value="AL">Alagoas (AL)</option>
                <option value="AP">Amapá (AP)</option>
                <option value="AM">Amazonas (AM)</option>
                <option value="BA">Bahia (BA)</option>
                <option value="CE">Ceará (CE)</option>
                <option value="DF">Distrito Federal (DF)</option>
                <option value="ES">Espírito Santo (ES)</option>
                <option value="GO">Goiás (GO)</option>
                <option value="MA">Maranhão (MA)</option>
                <option value="MT">Mato Grosso (MT)</option>
                <option value="MS">Mato Grosso do Sul (MS)</option>
                <option value="MG">Minas Gerais (MG)</option>
                <option value="PA">Pará (PA)</option>
                <option value="PB">Paraíba (PB)</option>
                <option value="PR">Paraná (PR)</option>
                <option value="PE">Pernambuco (PE)</option>
                <option value="PI">Piauí (PI)</option>
                <option value="RJ">Rio de Janeiro (RJ)</option>
                <option value="RN">Rio Grande do Norte (RN)</option>
                <option value="RS">Rio Grande do Sul (RS)</option>
                <option value="RO">Rondônia (RO)</option>
                <option value="RR">Roraima (RR)</option>
                <option value="SC">Santa Catarina (SC)</option>
                <option value="SP">São Paulo (SP)</option>
                <option value="SE">Sergipe (SE)</option>
                <option value="TO">Tocantins (TO)</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="quantidadeLojas">
              <Form.Label>Quantidade de Lojas/CNPJ</Form.Label>
              <Form.Control type="text" placeholder="Digite a quantidade de lojas" />
            </Form.Group>
          </Col>
        </Row>

        {/* Representante Legal */}
        <h5 className="mt-4">Representante Legal</h5>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="nomeRepresentante">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome do representante" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="cpfRepresentante">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text" placeholder="Digite o CPF" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="rgRepresentante">
              <Form.Label>RG</Form.Label>
              <Form.Control type="text" placeholder="Digite o RG" />
            </Form.Group>
          </Col>
        </Row>

        {/* Contato do Administrador */}
        <h5 className="mt-4">Contato Usuário do Sistema</h5>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="nomeAdministrador">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome do usuário" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="emailAdministrador">
              <Form.Label>Email de Contato</Form.Label>
              <Form.Control type="email" placeholder="Digite o email de contato" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="emailBoleto">
              <Form.Label>Email Boleto (opcional)</Form.Label>
              <Form.Control type="email" placeholder="Digite o email do boleto" />
            </Form.Group>
          </Col>
        </Row>

        {/* Seleção de Adquirentes */}
        <h5 className="mt-4">Selecione as adquirentes contratadas (Operadoras de Cartão)</h5><br />
        <Row className="mb-3">
          {[
            "Cielo",
            "RedeCard",
            "Stone",
            "Banrisul",
            "Bin",
            "Cabal",
            "GoodCard",
            "GetNet",
            "SiPag",
            "SafraPay",
            "Ticket",
            "VR",
            "Elavon",
            "Sodexo",
            "ConvCard",
            "CalCard",
            "PagSeguro",
            "CrediCard",
            "GreenCard",
            "BIQ",
            "UNICA",
            "PersonalCard",
            "TrioCard",
            "PagarMe",
            "PagTrack",
            "Sicredi",
            "VegasCard",
          ].map((adquirente, index) => (
            <Col md={3} key={index}>
              <Form.Check type="checkbox" label={adquirente} />
            </Col>
          ))}
        </Row>

        {/* Botões */}
        <div className="d-flex justify-content-between mt-4">
          <Button variant="secondary">Voltar</Button>
          <Button variant="primary">Continuar</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contract;
