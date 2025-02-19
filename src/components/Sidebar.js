import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  FaChartBar,
  FaExclamationTriangle,
  FaShoppingCart,
  FaMoneyBill,
  FaCreditCard,
  FaReceipt,
  FaSync,
  FaDatabase,
  FaFileAlt,
  FaAngleDown,
  FaAngleUp,
  FaBuilding,
  FaMoneyBillWave,
  FaUniversity,
  FaBars,
  FaTimes,
  FaTools,
  FaUsersCog,
  FaLanguage,
  FaHistory,
  FaCog
} from 'react-icons/fa';
import { BsFileText } from 'react-icons/bs';
import logo from "../assets/logocardtrack.png";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [vendasOpen, setVendasOpen] = useState(false);
  const [recebiveisOpen, setRecebiveisOpen] = useState(false);
  const [antecipacoesOpen, setAntecipacoesOpen] = useState(false);
  const [despesasOpen, setDespesasOpen] = useState(false);
  const [conciliacaoOpen, setConciliacaoOpen] = useState(false);
  const [cadastrosOpen, setCadastrosOpen] = useState(false);
  const [gerenciarExtratosOpen, setGerenciarExtratosOpen] = useState(false);
  const [relatoriosOpen, setRelatoriosOpen] = useState(false);
  const [administracaoOpen, setAdministracaoOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const currentPath = path.split('/')[1] || 'dashboard';
    setActiveItem(currentPath);
  }, [location]);

  const menuItems = [
    { id: 'dashboard', icon: <FaChartBar />, text: 'Dashboard', path: '/dashboard' },
    { id: 'inconsistencias', icon: <FaExclamationTriangle />, text: 'Inconsistências', path: '/inconsistencias' },
    {
      id: 'vendas',
      icon: <FaShoppingCart />,
      text: 'Vendas',
      submenu: true,
      submenuItems: [
        { id: 'vendas-por-dia', text: 'Vendas Por Dia', path: '/vendas-por-dia' },
        { id: 'vendas-por-transacao', text: 'Vendas Por Transação', path: '/vendas-por-transacao' }
      ]
    },
    {
      id: 'recebiveis',
      icon: <FaMoneyBill />,
      text: 'Recebíveis',
      submenu: true,
      submenuItems: [
        { id: 'recebiveis-por-dia', text: 'Recebíveis Por Dia', path: '/recebiveis-por-dia' },
        { id: 'recebiveis-por-transacao', text: 'Recebíveis Por Transação', path: '/recebiveis-por-transacao' }
      ]
    },
    {
      id: 'antecipacoes',
      icon: <FaCreditCard />,
      text: 'Antecipações',
      submenu: true,
      submenuItems: [
        { id: 'antecipacoes-transacao', text: 'Antecipações Por Transação', path: '/antecipacoes-por-transacao' },
        { id: 'antecipacoes-por-dia', text: 'Antecipações Por Dia', path: '/antecipacoes-por-dia' },
        { id: 'antecipacoes-simular', text: 'Antecipações Simular', path: '/antecipacoes-simular' }
      ]
    },
    {
      id: 'despesas',
      icon: <FaReceipt />,
      text: 'Despesas',
      submenu: true,
      submenuItems: [
        { id: 'despesas-cancelamentos', text: 'Despesas Cancelamentos', path: '/despesas-cancelamentos' },
        { id: 'despesas-tef-pos', text: 'Despesas TEF-POS', path: '/despesas-tef-pos' },
        { id: 'despesas-financeiras', text: 'Despesas Financeiras', path: '/despesas-financeiras' }
      ]
    },
    {
      id: 'conciliacao',
      icon: <FaSync />,
      text: 'Conciliação',
      submenu: true,
      submenuItems: [
        { id: 'conciliacao-vendas-resumo', text: 'Conciliação Vendas Resumo', path: '/conciliacao-vendas-resumo' },
        { id: 'conciliacao-vendas-detalhes', text: 'Conciliação Vendas Detalhes', path: '/conciliacao-vendas-detalhes' },
        { id: 'conciliacao-vendas-pendentes', text: 'Conciliação Vendas Pendentes', path: '/conciliacao-vendas-pendentes' },
        { id: 'conciliacao-taxas', text: 'Conciliação Taxas', path: '/conciliacao-taxas' },
        { id: 'conciliacao-bancaria', text: 'Conciliação Bancária', path: '/conciliacao-bancaria' }
      ]
    },
    {
      id: 'cadastros',
      icon: <FaDatabase />,
      text: 'Cadastros',
      submenu: true,
      submenuItems: [
        { id: 'cadastros-estabelecimento', icon: <FaBuilding />, text: 'Estabelecimento', path: '/cadastros-estabelecimento' },
        { id: 'cadastros-est-adquirente', icon: <FaBuilding />, text: 'Est. Adquirente', path: '/cadastros-est-adquirente' },
        { id: 'cadastros-taxas-bandeiras', icon: <FaMoneyBillWave />, text: 'Taxas Bandeiras', path: '/cadastros-taxas-bandeiras' },
        { id: 'cadastros-despesas', icon: <FaReceipt />, text: 'Despesas', path: '/cadastros-despesas' },
        { id: 'cadastros-dados-bancarios', icon: <FaUniversity />, text: 'Dados Bancários', path: '/cadastros-dados-bancarios' },
        { 
          id: 'cadastros-gerenciar-extratos', 
          text: 'Gerenciar Extratos', 
          path: '/cadastros-gerenciar-extratos',
          submenu: true,
          submenuItems: [
            { id: 'gerenciar-extratos', text: 'Gerenciar Extratos', path: '/cadastros-gerenciar-extratos' },
            { id: 'excecao-extratos', text: 'Exceção de Extratos', path: '/cadastros-gerenciar-extratos/excecao' }
          ]
        }
      ]
    },

    { id: 'documentos', icon: <FaFileAlt />, text: 'Documentos', path: '/documentos' },
    

    {
      id: 'relatorios',
      icon: <BsFileText />,
      text: 'Relatórios',
      submenu: true,
      submenuItems: [
        { id: 'relatorios-vendas', text: 'Vendas', path: '/relatorios/vendas' },
        { id: 'relatorios-recebiveis', text: 'Recebíveis', path: '/relatorios/recebiveis' },
        { id: 'relatorios-taxas', text: 'Taxas', path: '/relatorios/taxas' },
        { id: 'relatorios-conciliacao', text: 'Conciliação de Vendas', path: '/relatorios/conciliacao' },
        { id: 'relatorios-resumo', text: 'Resumo Operacional', path: '/relatorios/resumo' },
        { id: 'relatorios-conta-corrente', text: 'Conta Corrente por Bandeira', path: '/relatorios/conta-corrente' }
      ]
    },
   
   
    {
      id: 'administracao',
      icon: <FaTools />,
      text: 'Administração',
      submenu: true,
      submenuItems: [
        { id: 'autorizacoes', icon: <FaUsersCog />, text: 'Autorizações', path: '/administracao/autorizacoes' },
        { id: 'usuarios', icon: <FaUsersCog />, text: 'Usuários', path: '/administracao/usuarios' },
        { id: 'linguagens', icon: <FaLanguage />, text: 'Linguagens', path: '/administracao/linguagens' },
        { id: 'logs-auditoria', icon: <FaHistory />, text: 'Logs de Auditoria', path: '/administracao/logs-auditoria' },
        { id: 'configuracoes', icon: <FaCog />, text: 'Configurações', path: '/administracao/configuracoes' }
      ]
    },
  ];

  const handleMenuClick = (item) => {
    if (item.submenu) {
      if (item.id === 'vendas') {
        setVendasOpen(!vendasOpen);
      } else if (item.id === 'recebiveis') {
        setRecebiveisOpen(!recebiveisOpen);
      } else if (item.id === 'antecipacoes') {
        setAntecipacoesOpen(!antecipacoesOpen);
      } else if (item.id === 'despesas') {
        setDespesasOpen(!despesasOpen);
      } else if (item.id === 'conciliacao') {
        setConciliacaoOpen(!conciliacaoOpen);
      } else if (item.id === 'cadastros') {
        setCadastrosOpen(!cadastrosOpen);
      } else if (item.id === 'cadastros-gerenciar-extratos') {
        setGerenciarExtratosOpen(!gerenciarExtratosOpen);
      } else if (item.id === 'relatorios') {
        setRelatoriosOpen(!relatoriosOpen);
      } else if (item.id === 'administracao') {
        setAdministracaoOpen(!administracaoOpen);
      }
    } else {
      navigate(item.path);
      setActiveItem(item.id);
    }
  };

  return (
    <div 
    className={`sidebar bg-dark text-light ${menuOpen ? 'open' : ''}`}
    style={{
      width: menuOpen ? '250px' : '70px',
      minHeight: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      transition: 'width 0.3s ease',
      zIndex: 1000,
      overflowX: 'hidden',
      overflowY: 'auto',  // Permite rolar quando submenus forem abertos
      maxHeight: '100vh'  // Mantém a altura fixa na tela
    }}
  >
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          {menuOpen && <img src={logo} alt="Logo" style={{ height: '40px' }} />}
          <button
            className="btn btn-link text-light p-0"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ border: 'none', background: 'none' }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className="nav flex-column">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item mb-2">
              <button
                className={`nav-link btn btn-link text-light d-flex align-items-center ${
                  activeItem === item.id ? 'active bg-primary bg-opacity-25' : ''
                }`}
                onClick={() => handleMenuClick(item)}
                style={{
                  border: 'none',
                  background: 'none',
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 16px',
                  borderRadius: '4px'
                }}
              >
                <span className="me-2">{item.icon}</span>
                {menuOpen && (
                  <>
                    <span style={{ flex: 1 }}>{item.text}</span>
                    {item.submenu && (
                      <span className="ms-auto">
                        {item.id === 'vendas' && vendasOpen ? <FaAngleUp /> : null}
                        {item.id === 'vendas' && !vendasOpen ? <FaAngleDown /> : null}
                        {item.id === 'recebiveis' && recebiveisOpen ? <FaAngleUp /> : null}
                        {item.id === 'recebiveis' && !recebiveisOpen ? <FaAngleDown /> : null}
                        {item.id === 'antecipacoes' && antecipacoesOpen ? <FaAngleUp /> : null}
                        {item.id === 'antecipacoes' && !antecipacoesOpen ? <FaAngleDown /> : null}
                        {item.id === 'despesas' && despesasOpen ? <FaAngleUp /> : null}
                        {item.id === 'despesas' && !despesasOpen ? <FaAngleDown /> : null}
                        {item.id === 'conciliacao' && conciliacaoOpen ? <FaAngleUp /> : null}
                        {item.id === 'conciliacao' && !conciliacaoOpen ? <FaAngleDown /> : null}
                        {item.id === 'cadastros' && cadastrosOpen ? <FaAngleUp /> : null}
                        {item.id === 'cadastros' && !cadastrosOpen ? <FaAngleDown /> : null}
                        {item.id === 'relatorios' && relatoriosOpen ? <FaAngleUp /> : null}
                        {item.id === 'relatorios' && !relatoriosOpen ? <FaAngleDown /> : null}
                        {item.id === 'administracao' && administracaoOpen ? <FaAngleUp /> : null}
                        {item.id === 'administracao' && !administracaoOpen ? <FaAngleDown /> : null}
                      </span>
                    )}
                  </>
                )}
              </button>
              {item.submenu && (
                <div
                  className={`ms-3 ${
                    (item.id === 'vendas' && vendasOpen) ||
                    (item.id === 'recebiveis' && recebiveisOpen) ||
                    (item.id === 'antecipacoes' && antecipacoesOpen) ||
                    (item.id === 'despesas' && despesasOpen) ||
                    (item.id === 'conciliacao' && conciliacaoOpen) ||
                    (item.id === 'cadastros' && cadastrosOpen) ||
                    (item.id === 'relatorios' && relatoriosOpen) ||
                    (item.id === 'administracao' && administracaoOpen)
                      ? 'show'
                      : 'collapse'
                  }`}
                >
                  <ul className="nav flex-column">
                    {item.submenuItems.map((subItem) => (
                      <li key={subItem.id} className="nav-item mb-2">
                        {subItem.submenu ? (
                          <button
                            className={`nav-link btn btn-link text-light d-flex align-items-center ${
                              activeItem === subItem.id ? 'active' : ''
                            }`}
                            onClick={() => handleMenuClick(subItem)}
                            style={{
                              border: 'none',
                              background: 'none',
                              width: '100%',
                              textAlign: 'left',
                              padding: '8px 16px',
                              borderRadius: '4px'
                            }}
                          >
                            <span className="me-2">{subItem.icon}</span>
                            <span style={{ flex: 1 }}>{subItem.text}</span>
                            <span>
                              {gerenciarExtratosOpen ? (
                                <FaAngleUp />
                              ) : (
                                <FaAngleDown />
                              )}
                            </span>
                          </button>
                        ) : (
                          <Link
                            to={subItem.path}
                            className={`nav-link text-light ${
                              activeItem === subItem.id ? 'active' : ''
                            }`}
                            onClick={() => setActiveItem(subItem.id)}
                          >
                            {subItem.icon && <span className="icon me-2">{subItem.icon}</span>}
                            {subItem.text}
                          </Link>
                        )}
                        {subItem.submenu && gerenciarExtratosOpen && (
                          <ul className="nav flex-column ms-4 mt-2">
                            {subItem.submenuItems.map((subSubItem) => (
                              <li key={subSubItem.id} className="nav-item mb-2">
                                <Link
                                  to={subSubItem.path}
                                  className={`nav-link text-light ${
                                    activeItem === subSubItem.id ? 'active' : ''
                                  }`}
                                  onClick={() => setActiveItem(subSubItem.id)}
                                >
                                  {subSubItem.icon && <span className="icon me-2">{subSubItem.icon}</span>}
                                  {subSubItem.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          <li className="nav-item" style={{ marginTop: 'auto' }}>
            <Link to="/" className="nav-link">
              <i className="bi bi-box-arrow-left"></i> Sair
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
