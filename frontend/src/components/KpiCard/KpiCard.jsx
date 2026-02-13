import './KpiCard.css'

function KpiCard({ title, value, percent, trend = 'neutral' }) {
  return (
    <div className={`kpi-card-spark ${trend}`}>
      <div className="kpi-top">
        <span className="kpi-title">{title}</span>

        <div className="kpi-value-row">
          <strong className="kpi-value">{value}</strong>
          <span className="kpi-percent">{percent}</span>
        </div>
      </div>

      <div className="kpi-sparkline">
        <svg viewBox="0 0 100 40" preserveAspectRatio="none">
          {/* Área */}
          <polygon
            points="0,40 0,24 15,22 30,26 45,20 60,21 75,16 100,18 100,40"
          />

          {/* Linha */}
          <polyline
            fill="none"
            strokeWidth="2"
            points="0,24 15,22 30,26 45,20 60,21 75,16 100,18"
          />
        </svg>
      </div>
    </div>
  )
}

export default KpiCard
