import { useEffect } from "react"
import useStorage from "./hooks/useStorage"
import Temperature from "./components/Temperature"
import Time from "./components/Time"
import Convert from "./components/Convert"
import Theme from "./components/Theme"
import './App.css'

function App() {
  const [unit, setUnit] = useStorage("UNIT", "Celcius")
  const [temperature, setTemperature] = useStorage("TEMPERATURE", 0)
  const [time, setTime] = useStorage("TIME", 0)
  const [finalTemp, setFinalTemp] = useStorage("FINALTEMP", 0)
  const [finalTime, setFinalTime] = useStorage("FINALTIME", 0)
  const [theme, setTheme] = useStorage("THEME", false)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme ? "light" : "dark");
  }, [theme]);

  return (
    <>
      <div className="converter">
        <Temperature temperature={temperature} setTemperature={setTemperature} unit={unit} setUnit={setUnit} />
        <Time time={time} setTime={setTime} />
        <div className="convert-theme">
          <Convert finalTemp={finalTemp} setFinalTemp={setFinalTemp} finalTime={finalTime} 
          setFinalTime={setFinalTime} unit={unit} temperature={temperature} time={time} />
          <Theme theme={theme} setTheme={setTheme} /> 
        </div>
        <div className="output">
          <p>{finalTemp}° {unit}</p> <p>{finalTime} minutes</p>
        </div>
      </div>
    </>
  )
}

export default App