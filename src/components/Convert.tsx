interface ConvertProps {
    finalTemp: number
    setFinalTemp: React.Dispatch<React.SetStateAction<number>>
    finalTime: number
    setFinalTime: React.Dispatch<React.SetStateAction<number>>
    unit: string
    temperature: number
    time: number
}

function Convert ({ setFinalTemp, setFinalTime, unit, temperature, time }: ConvertProps) {
    function convertTemp(unit: string, temperature: number, time: number) {
        if (unit === "Celcius") {
        setFinalTemp(temperature - 15)
        } else {
        setFinalTemp(temperature - 25)
        }
        setFinalTime(Math.round(time * 0.8))
    }
    return (
        <button type="button" className="convert-button" onClick={() => convertTemp(unit, temperature, time)}>Convert</button>
    )
}

export default Convert