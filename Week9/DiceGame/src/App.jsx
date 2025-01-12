import React, { useState } from "react";
import PlayerName from "./PlayerName";
import Dice from "./Dice";
import "./App.css";

const App = () => {
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player1Dice, setPlayer1Dice] = useState(1);
  const [player2Dice, setPlayer2Dice] = useState(1);
  const [result, setResult] = useState("");
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    let rollInterval = setInterval(() => {
      setPlayer1Dice(Math.ceil(Math.random() * 6));
      setPlayer2Dice(Math.ceil(Math.random() * 6));
    }, 300);

    setTimeout(() => {
      clearInterval(rollInterval);
      const p1 = Math.ceil(Math.random() * 6);
      const p2 = Math.ceil(Math.random() * 6);
      setPlayer1Dice(p1);
      setPlayer2Dice(p2);

      if (p1 > p2) setResult(`${player1Name} Wins!`);
      else if (p1 < p2) setResult("Player 2 Wins!");
      else setResult("Draw!");

      setIsRolling(false);
    }, 2000);
  };

  return (
    <div className="app">
      <PlayerName name={player1Name} setName={setPlayer1Name} />
      <div className="game-result">{result}</div>
      <div className="dice-container">
        <div>
          <div className="player-name">{player1Name}</div>
          <Dice face={player1Dice} />
        </div>
        <div>
          <div className="player-name">Player 2</div>
          <Dice face={player2Dice} />
        </div>
      </div>
      <button onClick={rollDice} disabled={isRolling}>
        {isRolling ? "Rolling" : "Roll Now"}
      </button>
    </div>
  );
};

export default App;
