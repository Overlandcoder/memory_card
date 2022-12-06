import React, { useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";

const Game = () => {
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  // const deckId = "uqa92yhxjgsh";
  const imageUrls = [
    "https://deckofcardsapi.com/static/img/8D.png",
    "https://deckofcardsapi.com/static/img/4S.png",
    "https://deckofcardsapi.com/static/img/6C.png",
    "https://deckofcardsapi.com/static/img/QH.png",
    "https://deckofcardsapi.com/static/img/5D.png",
    "https://deckofcardsapi.com/static/img/3S.png",
    "https://deckofcardsapi.com/static/img/0D.png",
    "https://deckofcardsapi.com/static/img/2D.png",
    "https://deckofcardsapi.com/static/img/0C.png",
    "https://deckofcardsapi.com/static/img/4D.png",
    "https://deckofcardsapi.com/static/img/5C.png",
    "https://deckofcardsapi.com/static/img/JC.png"
  ];

  return (
    <div className="Game">
      <div>Score: {score}</div>
      <div className="CardGrid">
        {imageUrls.map(url => {
          return <div key={uniqid()}>
                   <Card url={url} />
                  </div>;
        })}
      </div>
    </div>
  )
}

export default Game;