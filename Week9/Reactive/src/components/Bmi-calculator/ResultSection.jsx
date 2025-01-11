import React from "react";

const ResultSection = ({ bmi, trianglePosition }) => {
  return (
    <div className="result">
      <h2>{bmi ? `Your BMI is ${bmi}` : "Your BMI"}</h2>
      <div className="bmi-scale">
        <img
          src="/assets/bmi-index.jpg"
          className="img-fluid"
          alt="BMI Scale"
        />
        <div
          className="triangle"
          style={{ left: `${trianglePosition}px` }}
        ></div>
      </div>
    </div>
  );
};

export default ResultSection;
