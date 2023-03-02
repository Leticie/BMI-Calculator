import { useState } from "react";
import { AppDecription } from "./components/AppDescription";
import { MeasurementInfo } from "./components/MeasurementInfo";
import { SelectedBMICalculator } from "./components/SelectedBMICalculator";
import { ResultsDisplay } from "./components/Display";
import { determineBmiZone } from "./helpers/BmiHelpers";
import { IMPERIAL, METRIC } from "./constants/constants";
import "./App.css";


const App = () => {
  const [newMeasurement, setNewMeasurement] = useState(METRIC);
  const [weight, setWeight] = useState("");
  const [heightCentimeters, setHeightCentimeters] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiZone, setBmiZone] = useState("");


  const handleChangeWeight = (value) => setWeight(value);
  const handleChangeHeightCentimeters = (value) => setHeightCentimeters(value);
  const handleChangeBmi = (value) => setBmi(value);
  const handleChangeBmiZone = (value) => setBmiZone(value);

  return (
    <div className="main">
      <h1>BMI CALCULATOR</h1>
      <AppDecription />
      <MeasurementInfo measurement={newMeasurement} />
    <div className="switch-buttons">
      <button onClick={() => setNewMeasurement(METRIC)}>Metric</button>
      <button onClick={() => setNewMeasurement(IMPERIAL)}>Imperial</button>
    </div>  
    <div className="calculator">
      <SelectedBMICalculator
        newMeasurement={newMeasurement}
        handleChangeWeight={handleChangeWeight}
        handleChangeHeightCentimeters={handleChangeHeightCentimeters}
        weight={weight}
        heightCentimeters={heightCentimeters}
        handleChangeBmi={handleChangeBmi}
        bmi={bmi}
        determineBmiZone={determineBmiZone}
        handleChangeBmiZone={handleChangeBmiZone}
      />
    </div>
      <ResultsDisplay bmi={bmi} bmiZone={bmiZone} />
    </div>
  );
};

export default App;
