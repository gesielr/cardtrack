import React, { useState } from "react";
import VendasPorTransacao from "./VendasPorTransacao";
import VendasPorDia from "./VendasPorDia";
import Sidebar from '../components/Sidebar';

const Vendas = () => {
  const [activeScreen, setActiveScreen] = useState("none");

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '250px', padding: '20px', transition: 'margin-left 0.3s ease' }}>
        <h2>Vendas</h2>
        <div className="d-flex">
          <aside className="bg-light" style={{ width: "250px", padding: "15px" }}>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="/dashboard" className="text-decoration-none text-dark">
                  Voltar 
                </a>
              </li>
              <li className="mb-3">
                <div>
                  <button
                    type="button"
                    className="btn btn-link text-decoration-none text-dark"
                    onClick={(e) => {
                      e.preventDefault();
                      const submenu = document.getElementById("submenu-vendas");
                      if (submenu) submenu.classList.toggle("d-none");
                    }}
                  >
                    Vendas
                  </button>

                  <ul id="submenu-vendas" className="list-unstyled d-none">
                    <li className="mb-2">
                      <button
                        type="button"
                        className="btn btn-link text-decoration-none text-dark"
                        onClick={() => setActiveScreen("transacao")}
                      >
                        Por Transação
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="btn btn-link text-decoration-none text-dark"
                        onClick={() => setActiveScreen("dia")}
                      >
                        Por Dia
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </aside>
          <main className="flex-grow-1 p-4">
            {activeScreen === "transacao" && <VendasPorTransacao />}
            {activeScreen === "dia" && <VendasPorDia />}
            {activeScreen === "none" && (
              <div className="text-muted text-center">
                <h5>Selecione uma opção de vendas para exibir os dados</h5>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Vendas;
