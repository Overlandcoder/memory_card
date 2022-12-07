import React from "react";

const Card = (props) => {
  const image = <img src={props.url} alt="a card from a deck of cards" className="Card"></img>

  return(
    <div>
      {image}
    </div>
  )
}

export default Card;