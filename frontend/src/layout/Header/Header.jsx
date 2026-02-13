import { Moon, LogOut } from 'lucide-react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <h2>Dashboard</h2>

      <div className="header-actions">
        <button className="header-btn">
          <Moon size={16} />
          <span>Tema</span>
        </button>

        <div className="user">
          <span className="avatar">AM</span>
          <div>
            <strong>Administrador</strong>
            <small>Master</small>
          </div>
        </div>

        <LogOut size={18} />
      </div>
    </header>
  )
}

export default Header
