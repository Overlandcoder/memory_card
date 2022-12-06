import React, { useState } from "react";

const Game = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="Game">
      <div>Score: {score}</div>
    </div>
  )
}

export default Game;