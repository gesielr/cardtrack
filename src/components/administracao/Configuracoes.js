import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { FaSave } from 'react-icons/fa';

const Configuracoes = () => {
  const [configuracoes, setConfiguracoes] = useState({
    exibirQuadroVendas: true,
    exibirQuadroRecebiveis: true,
    exibirQuadroAReceber: true,
    exibirQuadroAntecipacoes: true,
    exibirQuadroCancelamentos: true,
    exibirQuadroDescontosDevolucoes: true,
    exibirQuadroMelhoresTaxas: true,
    exibirGraficoVendasPorDia: true,
    exibirGraficoVendasPorTipoOperacao: true,
    exibirGraficoRecebiveis: true,
    exibirGraficoAReceber30Dias: true,
    exibirGraficoVendasPorBandeira: true,
    exibirGraficoVendasPorAdquirente: true,
    exibirGraficoTaxasValoresPorBandeira: true,
    exibirGraficoTaxasValoresPorAdquirente: true,
    exibirGraficoTaxasPercentuaisPorBandeira: true,
    exibirGraficoTaxasPercentuaisPorAdquirente: true
  });

  const handleChange = (campo) => {
    setConfiguracoes(prev => ({
      ...prev,
      [campo]: !prev[campo]
    }));
  };

  const handleSalvar = () => {
    console.log('Configurações salvas:', configuracoes);
    // Aqui seria implementada a lógica para salvar as configurações
  };

  return (
    <div>
      <h3 className="text-danger mb-4">Configurações</h3>
      
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4">Mostrar e mudar configurações da aplicação</h5>

          <div className="mb-4">
            <h6 className="text-secondary mb-3">Dashboard</h6>
            <Form>
              <Form.Check
                type="switch"
                id="quadro-vendas"
                label="Exibir Quadro Vendas"
                checked={configuracoes.exibirQuadroVendas}
                onChange={() => handleChange('exibirQuadroVendas')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="quadro-recebiveis"
                label="Exibir Quadro Recebíveis"
                checked={configuracoes.exibirQuadroRecebiveis}
                onChange={() => handleChange('exibirQuadroRecebiveis')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="quadro-a-receber"
                label="Exibir Quadro A Receber"
                checked={configuracoes.exibirQuadroAReceber}
                onChange={() => handleChange('exibirQuadroAReceber')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="quadro-antecipacoes"
                label="Exibir Quadro Antecipações"
                checked={configuracoes.exibirQuadroAntecipacoes}
                onChange={() => handleChange('exibirQuadroAntecipacoes')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="quadro-cancelamentos"
                label="Exibir Quadro Cancelamentos"
                checked={configuracoes.exibirQuadroCancelamentos}
                onChange={() => handleChange('exibirQuadroCancelamentos')}
                className="mb-2"
              />
            </Form>
          </div>

          <div className="mb-4">
            <h6 className="text-secondary mb-3">Gráficos</h6>
            <Form>
              <Form.Check
                type="switch"
                id="grafico-vendas-dia"
                label="Exibir Gráfico Vendas por Dia"
                checked={configuracoes.exibirGraficoVendasPorDia}
                onChange={() => handleChange('exibirGraficoVendasPorDia')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="grafico-vendas-tipo"
                label="Exibir Gráfico Vendas por Tipo de Operação"
                checked={configuracoes.exibirGraficoVendasPorTipoOperacao}
                onChange={() => handleChange('exibirGraficoVendasPorTipoOperacao')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="grafico-recebiveis"
                label="Exibir Gráfico Recebíveis por Dia"
                checked={configuracoes.exibirGraficoRecebiveis}
                onChange={() => handleChange('exibirGraficoRecebiveis')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="grafico-a-receber-30"
                label="Exibir Gráfico A Receber nos próximos 30 dias"
                checked={configuracoes.exibirGraficoAReceber30Dias}
                onChange={() => handleChange('exibirGraficoAReceber30Dias')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="grafico-vendas-bandeira"
                label="Exibir Gráfico Vendas Por Bandeira"
                checked={configuracoes.exibirGraficoVendasPorBandeira}
                onChange={() => handleChange('exibirGraficoVendasPorBandeira')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="grafico-vendas-adquirente"
                label="Exibir Gráfico Vendas Por Adquirente"
                checked={configuracoes.exibirGraficoVendasPorAdquirente}
                onChange={() => handleChange('exibirGraficoVendasPorAdquirente')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="grafico-taxas-valores-bandeira"
                label="Exibir Gráfico Taxas Valores por Bandeira"
                checked={configuracoes.exibirGraficoTaxasValoresPorBandeira}
                onChange={() => handleChange('exibirGraficoTaxasValoresPorBandeira')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="grafico-taxas-valores-adquirente"
                label="Exibir Gráfico Taxas Valores por Adquirente"
                checked={configuracoes.exibirGraficoTaxasValoresPorAdquirente}
                onChange={() => handleChange('exibirGraficoTaxasValoresPorAdquirente')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="grafico-taxas-percentuais-bandeira"
                label="Exibir Gráfico Taxas Percentuais por Bandeira"
                checked={configuracoes.exibirGraficoTaxasPercentuaisPorBandeira}
                onChange={() => handleChange('exibirGraficoTaxasPercentuaisPorBandeira')}
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="grafico-taxas-percentuais-adquirente"
                label="Exibir Gráfico Taxas Percentuais por Adquirente"
                checked={configuracoes.exibirGraficoTaxasPercentuaisPorAdquirente}
                onChange={() => handleChange('exibirGraficoTaxasPercentuaisPorAdquirente')}
                className="mb-2"
              />
            </Form>
          </div>

          <div className="d-flex justify-content-end">
            <Button variant="success" onClick={handleSalvar}>
              <FaSave className="me-2" />
              Salvar Configurações
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Configuracoes;
