import React, { useState, useEffect } from "react";
import Card from "./Card";
import uniqid from "uniqid";

const Game = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
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

  useEffect(() => {
    updateBestScore();
  })

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

  function playRound(event) {
    setClickedCards([...clickedCards, event.target.src]);
    updateScore(event.target.src);
    shuffleCards();
  }

  function updateScore(url) {
    if (clickedCards.includes(url)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score + 1);
    }
  }

  function updateBestScore() {
    if (score > bestScore) {
      setBestScore(score);
    }
  }

  return (
    <div className="Game">
      <div>
        <div className="Score">Score: {score}</div>
        <div>Best Score: {bestScore}</div>
      </div>
      <div className="CardGrid">
        {cardUrls.map(cardUrl => {
          return <div onClick={playRound} key={uniqid()}>
                   <Card url={cardUrl} />
                 </div>;
        })}
      </div>
    </div>
  )
  // const deckId = "uqa92yhxjgsh";
}

export default Game;