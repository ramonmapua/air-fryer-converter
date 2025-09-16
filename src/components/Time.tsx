interface TimeProps {
    time: number
    setTime: React.Dispatch<React.SetStateAction<number>>
}

function Time ({ time, setTime }: TimeProps) {
    const timeHandler = (event: any) => {
        setTime(Number(event.target.value))
    }

    function addTime() {
        setTime((currentTime: number) => 
        currentTime + 1)
    }

    function subTime() {
        setTime((currentTime: number) => 
        (currentTime <= 0 ? 0 : currentTime - 1))
    }
    return (
        <div className="time-field">
            <button type="button" onClick={subTime}>-</button>
            <input type="number" min="0" className="time" value={time} onChange={timeHandler}></input>
            <button type="button" onClick={addTime}>+</button>
        </div>
    );
}

export default Time