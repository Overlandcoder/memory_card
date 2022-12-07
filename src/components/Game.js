import React, { useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";

const Game = () => {
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [cardUrls, setCardUrls] = useState([
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
  ]);

  function shuffleCards() {
    let array = [...cardUrls];
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    setCardUrls(array);
  }

  return (
    <div className="Game">
      <div>Score: {score}</div>
      <div className="CardGrid">
        {cardUrls.map(cardUrl => {
          return <div onClick={shuffleCards} key={uniqid()}>
                   <Card url={cardUrl} />
                 </div>;
        })}
      </div>
    </div>
  )
  // const deckId = "uqa92yhxjgsh";
}

export default Game;