import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const dataPointsMax = Math.max(...dataPoints.map(data => data.value));

  return (
    <div className="chart">
      {dataPoints.map(data =>
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={dataPointsMax}
          label={data.label} />
      )}
    </div>
  );
}

export default Chart;
