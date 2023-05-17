import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  const handleClick = (e) => {
    e.preventDefault();
    setThemeName(oldThemeName => 
      e.target.className === "on" ? "day" : "night"
    )
  }  

  // //TOGGLE APPROACH
  // const handleClick = () => {
  //   setThemeName(oldThemeName => 
  //     oldThemeName === "day" ? "night" : "day"
  //   ) //Preferred, callback is async?
  //   // isn't above a callback def, 
  //   // not the actual invocation of the callback? Or does react invoke for you?
  // }  

  return (
    <div className={`light-switch ${themeName}`}>
    {/* // <div className={`light-switch day`}> */}
      <div className="on" onClick={handleClick}>DAY</div>
      <div className="off" onClick={handleClick}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;