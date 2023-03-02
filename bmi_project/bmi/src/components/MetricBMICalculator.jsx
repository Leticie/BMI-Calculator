import "./MetricBMICalculator.css"

export const MetricBMICalculator = ({weight, setWeight, heightCentimeters, setHeightCentimeters, calculateBmi, handleChangeBmi, bmi, determineBmiZone, handleChangeBmiZone}) => {

    const handleChangeWeight = (event) => setWeight(event.target.value);
    const handleChangeHeightCentimeters = (event) => setHeightCentimeters(event.target.value);
    
    const handleClick = (event) => {
        event.preventDefault()

        calculateBmi(weight, heightCentimeters, handleChangeBmi)
        determineBmiZone(bmi, handleChangeBmiZone)
        setWeight('')
        setHeightCentimeters('')
    }

    return (
        <div>
            <form>
                <h3>Weight</h3>
                    <input className="input" type="number" value={weight} onChange={handleChangeWeight}></input> kg
                <h3>Height</h3>
                    <input className="input" type="number" value={heightCentimeters} onChange={handleChangeHeightCentimeters}></input> cm
                <div>
                    <button className={"button button1"} onClick={handleClick}>submit</button>
                </div>  
            </form>    
        </div>
    )

}