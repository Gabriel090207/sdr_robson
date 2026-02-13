import "./Relatorios.css";
import {
  FiCalendar,
  FiDownload,
  FiBarChart2,
  FiTrendingUp
} from "react-icons/fi";

function Relatorios() {
  return (
    <div className="page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Relatórios</h1>
          <p>Análise de desempenho e histórico de agendamentos</p>
        </div>

        <button className="export-button">
          <FiDownload size={16} />
          Exportar
        </button>
      </div>

      {/* Filtros */}
      <div className="report-filters">
        <div className="filter-item">
          <FiCalendar size={16} />
          <input type="date" />
        </div>

        <div className="filter-item">
          <FiCalendar size={16} />
          <input type="date" />
        </div>
      </div>

      {/* Resumo */}
      <div className="report-summary">
        <div className="summary-card">
          <FiBarChart2 size={20} />
          <div>
            <strong>124</strong>
            <span>Visitas realizadas</span>
          </div>
        </div>

        <div className="summary-card">
          <FiTrendingUp size={20} />
          <div>
            <strong>68%</strong>
            <span>Taxa de conversão</span>
          </div>
        </div>

        <div className="summary-card">
          <FiBarChart2 size={20} />
          <div>
            <strong>23</strong>
            <span>Cancelamentos</span>
          </div>
        </div>

        <div className="summary-card">
          <FiBarChart2 size={20} />
          <div>
            <strong>9%</strong>
            <span>Não comparecimento</span>
          </div>
        </div>
      </div>

      {/* Tabela */}
      <div className="report-table">
        <div className="table-header">
          <span>Vendedor</span>
          <span>Visitas</span>
          <span>Conversão</span>
          <span>Cancelamentos</span>
        </div>

        <div className="table-row">
          <span>Ana Martins</span>
          <span>42</span>
          <span>72%</span>
          <span>5</span>
        </div>

        <div className="table-row">
          <span>Carlos Souza</span>
          <span>38</span>
          <span>65%</span>
          <span>7</span>
        </div>

        <div className="table-row">
          <span>João Pereira</span>
          <span>18</span>
          <span>48%</span>
          <span>6</span>
        </div>
      </div>
    </div>
  );
}

export default Relatorios;
