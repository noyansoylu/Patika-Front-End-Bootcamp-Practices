import React from "react";

const PlayerName = ({ name, setName }) => {
  const handleChange = (e) => setName(e.target.value);

  return (
    <div className="player-name">
      <label htmlFor="player1-name">Your Name:</label>
      <input
        id="player1-name"
        type="text"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default PlayerName;
