import './Dashboard.css'
import KpiCard from '../../components/KpiCard/KpiCard'
import DonutChart from '../../components/DonutChart/DonutChart'

function Dashboard() {
  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <h1>Olá, Gestor</h1>
        <p>Visão geral do SDR de agendamentos via WhatsApp</p>
      </div>

      {/* KPI CARDS */}
      <div className="kpi-grid">
        <KpiCard
          title="Agendamentos criados"
          value="552"
          percent="+5,2%"
          trend="positive"
        />

        <KpiCard
          title="Agendamentos em andamento"
          value="422"
          percent="+4,1%"
          trend="neutral"
        />

        <KpiCard
          title="Agendamentos perdidos"
          value="87"
          percent="-11,2%"
          trend="negative"
        />

        <KpiCard
          title="Agendamentos ganhos"
          value="43"
          percent="+8,7%"
          trend="positive"
        />
      </div>

      {/* GRID INFERIOR — 3 COLUNAS */}
      <div className="dashboard-grid">

        {/* ROSQUINHA (2 COLUNAS) */}
        <div className="card donut-card">
          <h3>Distribuição de status</h3>
          <DonutChart />
        </div>

        {/* RESUMO */}
       <div className="card summary-card">
  <h3>Resumo rápido</h3>
  <p className="card-subtitle">Resumo rápido do cenário atual</p>

  <ul className="summary-list">
    <li className="summary-row">
      <span className="summary-label">Visitas agendadas hoje</span>
      <span className="summary-badge primary">3</span>
    </li>

    <li className="summary-row">
      <span className="summary-label">Reagendamentos</span>
      <span className="summary-badge warning">5</span>
    </li>

    <li className="summary-row">
      <span className="summary-label">Cancelamentos</span>
      <span className="summary-badge danger">2</span>
    </li>
  </ul>
</div>


        {/* ALERTAS / ATENÇÃO */}
        <div className="card alert-card">
          <h3>Pontos de atenção</h3>

          <div className="alert-bars">

  <div className="alert-bar-row">
    <span className="alert-label">Clientes sem resposta</span>
    <div className="alert-bar">
      <div className="alert-bar-fill" style={{ width: '90%' }}>
        <span>9</span>
      </div>
    </div>
  </div>

  <div className="alert-bar-row">
    <span className="alert-label">Visitas não confirmadas</span>
    <div className="alert-bar">
      <div className="alert-bar-fill" style={{ width: '30%' }}>
        <span>3</span>
      </div>
    </div>
  </div>

  <div className="alert-bar-row">
    <span className="alert-label">Vendedores abaixo da meta</span>
    <div className="alert-bar">
      <div className="alert-bar-fill" style={{ width: '20%' }}>
        <span>2</span>
      </div>
    </div>
  </div>

</div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard
