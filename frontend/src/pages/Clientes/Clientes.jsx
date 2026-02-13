import "./Clientes.css";
import {
  FiUsers,
  FiMessageSquare,
  FiPhoneOff,
  FiCheckCircle
} from "react-icons/fi";

function Clientes() {
  return (
    <div className="page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Clientes</h1>
          <p>Base de clientes e status de contato</p>
        </div>
      </div>

      {/* Resumo */}
      <div className="clients-summary">
        <div className="summary-card">
          <FiUsers size={20} />
          <div>
            <strong>124</strong>
            <span>Total de clientes</span>
          </div>
        </div>

        <div className="summary-card">
          <FiMessageSquare size={20} />
          <div>
            <strong>38</strong>
            <span>Sem resposta</span>
          </div>
        </div>

        <div className="summary-card">
          <FiPhoneOff size={20} />
          <div>
            <strong>6</strong>
            <span>Sem WhatsApp</span>
          </div>
        </div>

        <div className="summary-card">
          <FiCheckCircle size={20} />
          <div>
            <strong>80</strong>
            <span>Ativos</span>
          </div>
        </div>
      </div>

      {/* Lista */}
      <div className="clients-list">
        <div className="clients-header">
          <span>Cliente</span>
          <span>Status</span>
          <span>Último contato</span>
        </div>

        <div className="client-row">
          <span>João da Silva</span>
          <span className="status pending">Sem resposta</span>
          <span>há 3 dias</span>
        </div>

        <div className="client-row">
          <span>Empresa XPTO</span>
          <span className="status blocked">Sem WhatsApp</span>
          <span>-</span>
        </div>

        <div className="client-row">
          <span>Maria Oliveira</span>
          <span className="status active">Ativo</span>
          <span>ontem</span>
        </div>
      </div>
    </div>
  );
}

export default Clientes;
