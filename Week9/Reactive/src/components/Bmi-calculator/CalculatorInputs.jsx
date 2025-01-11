import React from "react";

const CalculatorInputs = ({
  height,
  setHeight,
  weight,
  setWeight,
  onCalculate,
}) => {
  return (
    <div className="calculator">
      <h2>BMI Calculator</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quidem
        iste quam eligendi laboriosam nostrum voluptatem consectetur dignissimos
        possimus deserunt distinctio quia tempore sit quae cumque itaque atque
        esse quisquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam
        excepturi aut, amet nemo quidem hic. Repellat repudiandae aliquid
        voluptatem vel, excepturi omnis at fuga repellendus vitae dolores,
        voluptatibus assumenda!
      </p>
      <div className="input-section">
        <div className="d-flex">
          <input
            type="number"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
              onCalculate();
            }}
            placeholder="Your Height"
          />
          <span className="my-auto">cm</span>
        </div>
        <div className="d-flex">
          <input
            type="number"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              onCalculate();
            }}
            placeholder="Your Weight"
          />
          <span className="my-auto">kg</span>
        </div>
      </div>
    </div>
  );
};

export default CalculatorInputs;
