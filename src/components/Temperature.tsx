interface TemperatureProps {
    temperature: number
    setTemperature: React.Dispatch<React.SetStateAction<number>>
    unit: string
    setUnit: React.Dispatch<React.SetStateAction<string>>
}

function Temperature ({ temperature, setTemperature, unit, setUnit }: TemperatureProps) {
    const tempHandler = (event: any) => {
        setTemperature(Number(event.target.value))
    }
    function addTemp() {
        setTemperature((currentTemp: number) => 
        currentTemp + 1)
    }
    function subTemp() {
        setTemperature((currentTemp: number) => 
        currentTemp - 1)
    }
    function changeUnit() {
        setUnit((currentUnit: string) =>
        currentUnit === "Celcius" ? "Fahrenheit" : "Celcius")
    }
    return (
        <div className="temperature-field">
          <button type="button" onClick={subTemp}>-</button>
          <input type="number" min="0" className="temperature" value={temperature} onChange={tempHandler}></input>
          <button type="button" onClick={addTemp}>+</button>
          <button type="button" className="change-unit" onClick={() => changeUnit()}>{unit}</button>
        </div>
    );
}

export default Temperature