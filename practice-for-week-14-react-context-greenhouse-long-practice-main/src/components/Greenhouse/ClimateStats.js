import './ClimateStats.css';
import { useClimateContext } from '../../context/ClimateContext';

function ClimateStats() {
  const { humidity, temperature } = useClimateContext();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {`${temperature}`}°F
      </div>
      <div className="humidity">
        Humidity {`${humidity}`}%
      </div>
    </div>
  )
}

export default ClimateStats;