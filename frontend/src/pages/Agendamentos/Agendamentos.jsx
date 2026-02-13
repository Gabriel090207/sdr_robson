import "./Agendamentos.css";
import {
  FiFilter,
  FiCalendar,
  FiUser,
  FiClock
} from "react-icons/fi";

function Agendamentos() {
  return (
    <div className="agendamentos-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Agendamentos</h1>
          <p>Gestão de visitas, confirmações e reagendamentos</p>
        </div>

       
      </div>

      {/* Filtros */}
      <div className="filters">
        <div className="filter-item">
          <FiUser size={16} />
          <select>
            <option>Todos os vendedores</option>
          </select>
        </div>

        <div className="filter-item">
          <FiCalendar size={16} />
          <input type="date" />
        </div>

        <div className="filter-item">
          <FiClock size={16} />
          <select>
            <option>Todos os status</option>
          </select>
        </div>
      </div>

      {/* Tabela */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Vendedor</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>João da Silva</td>
              <td>Ana Martins</td>
              <td>30/01/2026</td>
              <td>14:00</td>
              <td>
                <span className="status confirmed">Confirmado</span>
              </td>
            </tr>

            <tr>
              <td>Empresa XYZ</td>
              <td>Carlos Souza</td>
              <td>31/01/2026</td>
              <td>10:30</td>
              <td>
                <span className="status pending">Pendente</span>
              </td>
            </tr>

            <tr>
              <td>Maria Oliveira</td>
              <td>Ana Martins</td>
              <td>01/02/2026</td>
              <td>16:00</td>
              <td>
                <span className="status canceled">Cancelado</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Agendamentos;
