import React, { useState, useEffect } from "react";

const Card = () => {
  const [imgSrc, setImgSrc] = useState("");
  let cardUrl;
  let cardImage;

  async function getCardUrl() {
    const deckResponse =  await fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    const deckData = await deckResponse.json();
    const deckId = await deckData.deck_id;
    const cardResponse = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    const cardData = await cardResponse.json();
    cardUrl = await cardData.cards[0].image;
    cardImage = <img src={imgSrc} alt="card"></img>;
  }

  useEffect(() => {
    getCardUrl()
    .then(url => setImgSrc(`https://www.deckofcardsapi.com/api/deck/${url}/draw/?count=1`))
  }, []);

  return(
    <div>
      {getCardUrl()}
      <div>{cardImage}</div>
    </div>
  )
}

export default Card;