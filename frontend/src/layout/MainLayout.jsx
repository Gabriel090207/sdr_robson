import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import './MainLayout.css'

function MainLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-area">
        <Header />
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout
