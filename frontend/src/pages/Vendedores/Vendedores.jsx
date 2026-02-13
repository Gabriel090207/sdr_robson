import "./Vendedores.css";
import {
  FiUser,
  FiUserCheck,
  FiUserX,
  FiTarget
} from "react-icons/fi";

function Vendedores() {
  return (
    <div className="page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Vendedores</h1>
          <p>Gestão da equipe comercial e metas semanais</p>
        </div>
      </div>

      {/* Resumo */}
      <div className="sellers-summary">
        <div className="summary-card">
          <FiUser size={20} />
          <div>
            <strong>12</strong>
            <span>Total</span>
          </div>
        </div>

        <div className="summary-card">
          <FiUserCheck size={20} />
          <div>
            <strong>9</strong>
            <span>Ativos</span>
          </div>
        </div>

        <div className="summary-card">
          <FiUserX size={20} />
          <div>
            <strong>3</strong>
            <span>Inativos</span>
          </div>
        </div>

        <div className="summary-card">
          <FiTarget size={20} />
          <div>
            <strong>75%</strong>
            <span>Média de meta</span>
          </div>
        </div>
      </div>

      {/* Lista */}
      <div className="sellers-list">
        <div className="sellers-header">
          <span>Vendedor</span>
          <span>Status</span>
          <span>Meta semanal</span>
        </div>

        <div className="seller-row">
          <span>Ana Martins</span>
          <span className="status active">Ativo</span>
          <span>12 / 15</span>
        </div>

        <div className="seller-row">
          <span>Carlos Souza</span>
          <span className="status active">Ativo</span>
          <span>8 / 15</span>
        </div>

        <div className="seller-row">
          <span>João Pereira</span>
          <span className="status inactive">Inativo</span>
          <span>-</span>
        </div>
      </div>
    </div>
  );
}

export default Vendedores;
