import ReactSlider from "react-slider";
import './Thermometer.css';
import {useClimateContext} from "../../context/ClimateContext"


function Thermometer() {
const {temperature, setTemperature} = useClimateContext()

  function FUBAR(val) {
    console.log(temperature)
    setTemperature(oldTemp => val);
  }

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {`${temperature}`}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={val => FUBAR(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
      {console.log(temperature)}
    </section>
  );
}

export default Thermometer;