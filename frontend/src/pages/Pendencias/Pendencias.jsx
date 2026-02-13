import "./Pendencias.css";
import {
  FiMessageCircle,
  FiPhoneOff,
  FiRepeat,
  FiCopy
} from "react-icons/fi";

function Pendencias() {
  return (
    <div className="page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Pendências</h1>
          <p>Clientes e agendamentos que precisam de atenção</p>
        </div>
      </div>

      {/* Resumo */}
      <div className="pending-summary">
        <div className="summary-card">
          <FiMessageCircle size={20} />
          <div>
            <strong>9</strong>
            <span>Sem resposta</span>
          </div>
        </div>

        <div className="summary-card">
          <FiPhoneOff size={20} />
          <div>
            <strong>3</strong>
            <span>Sem WhatsApp</span>
          </div>
        </div>

        <div className="summary-card">
          <FiRepeat size={20} />
          <div>
            <strong>5</strong>
            <span>Reagendamentos</span>
          </div>
        </div>

        <div className="summary-card">
          <FiCopy size={20} />
          <div>
            <strong>2</strong>
            <span>Duplicados</span>
          </div>
        </div>
      </div>

      {/* Lista 1 */}
      <div className="pending-section">
        <h3>Clientes sem resposta</h3>

        <div className="pending-list">
          <div className="pending-item">
            <span>João da Silva</span>
            <small>Último contato: há 3 dias</small>
          </div>

          <div className="pending-item">
            <span>Empresa XPTO</span>
            <small>Último contato: há 5 dias</small>
          </div>
        </div>
      </div>

      {/* Lista 2 */}
      <div className="pending-section">
        <h3>Reagendamentos pendentes</h3>

        <div className="pending-list">
          <div className="pending-item">
            <span>Maria Oliveira</span>
            <small>Visita cancelada em 29/01</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pendencias;
