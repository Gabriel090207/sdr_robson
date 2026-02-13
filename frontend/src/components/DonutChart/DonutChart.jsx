import './DonutChart.css'

function DonutChart() {
  const data = [
    { label: 'Ganhos', value: 43, color: '#16a34a' },
    { label: 'Em andamento', value: 422, color: '#2563eb' },
    { label: 'Perdidos', value: 87, color: '#dc2626' }
  ]

  const total = data.reduce((sum, item) => sum + item.value, 0)
  let cumulativePercent = 0

  const getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent)
    const y = Math.sin(2 * Math.PI * percent)
    return [x, y]
  }

  return (
    <div className="donut-wrapper">

      {/* TEXTO À ESQUERDA */}
      <div className="donut-info">
        {data.map((item, index) => (
          <div key={index} className="donut-row">
            <span
              className="dot"
              style={{ backgroundColor: item.color }}
            />
            <strong>{item.value}</strong>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>

      {/* ROSQUINHA CENTRAL */}
      <div className="donut-center">
        <svg viewBox="-1 -1 2 2" className="donut">
          {data.map((slice, index) => {
            const [startX, startY] = getCoordinatesForPercent(cumulativePercent)
            const slicePercent = slice.value / total
            cumulativePercent += slicePercent
            const [endX, endY] = getCoordinatesForPercent(cumulativePercent)

            const largeArcFlag = slicePercent > 0.5 ? 1 : 0

            const pathData = `
              M ${startX} ${startY}
              A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}
              L 0 0
            `

            return (
              <path
                key={index}
                d={pathData}
                fill={slice.color}
              />
            )
          })}

          {/* Furo */}
          <circle cx="0" cy="0" r="0.6" fill="#ffffff" />
        </svg>
      </div>

    </div>
  )
}

export default DonutChart
