import './ChartBar.css';

const ChartBar = ({ value, maxValue, label }) => {
  const fillHeight = maxValue ?
    Math.round((value / maxValue) * 100) + '%' :
    '0%';

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: fillHeight}}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

export default ChartBar;
