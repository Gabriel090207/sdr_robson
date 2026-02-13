import {
  FiHome,
  FiCalendar,
  FiAlertCircle,
  FiUsers,
  FiBarChart2,
  FiSettings
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">SDR</h2>

      <nav className="menu">
        <NavLink to="/" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <span className="menu-icon">
            <FiHome />
          </span>
          <span className="menu-label">Dashboard</span>
        </NavLink>

        <NavLink to="/agendamentos" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <span className="menu-icon">
            <FiCalendar />
          </span>
          <span className="menu-label">Agendamentos</span>
        </NavLink>

        <NavLink to="/pendencias" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <span className="menu-icon">
            <FiAlertCircle />
          </span>
          <span className="menu-label">Pendências</span>
        </NavLink>

        <NavLink to="/clientes" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <span className="menu-icon">
            <FiUsers />
          </span>
          <span className="menu-label">Clientes</span>
        </NavLink>

        <NavLink to="/vendedores" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <span className="menu-icon">
            <FiUsers />
          </span>
          <span className="menu-label">Vendedores</span>
        </NavLink>

        <NavLink to="/relatorios" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <span className="menu-icon">
            <FiBarChart2 />
          </span>
          <span className="menu-label">Relatórios</span>
        </NavLink>

        <NavLink to="/configuracoes" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <span className="menu-icon">
            <FiSettings />
          </span>
          <span className="menu-label">Configurações</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
