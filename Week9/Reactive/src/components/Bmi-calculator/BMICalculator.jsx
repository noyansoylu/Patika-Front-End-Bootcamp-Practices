import React, { useState } from "react";
import CalculatorInputs from "./CalculatorInputs";
import ResultSection from "./ResultSection";
import "./BMICalculator.css";

const BMICalculator = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [trianglePosition, setTrianglePosition] = useState(0);

  const calculateBMI = (height, weight) => {
    if (!height || !weight) {
      setBMI("");
      setTrianglePosition(0);
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBMI(calculatedBMI);

    let position = 0;
    if (calculatedBMI < 18.5) {
      position = 10;
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
      position = 130;
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      position = 250;
    } else if (calculatedBMI >= 30 && calculatedBMI < 35) {
      position = 370;
    } else {
      position = 490;
    }

    setTrianglePosition(position);
  };

  return (
    <section id="bmi-calculator">
      <div className="container">
        <div className="bmi-section">
          <CalculatorInputs
            height={height}
            setHeight={setHeight}
            weight={weight}
            setWeight={setWeight}
            onCalculate={() => calculateBMI(height, weight)}
          />
          <ResultSection bmi={bmi} trianglePosition={trianglePosition} />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
