import React from "react";

const Dice = ({ face }) => {
  return (
    <div className="dice">
      <img src={`/assets/dice${face}.png`} alt={`Dice ${face}`} />
    </div>
  );
};

export default Dice;
