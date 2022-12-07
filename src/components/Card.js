import React from "react";

const Card = (props) => {
  const { url } = props;

  const image = <img
                  src={url}
                  alt="a card from a deck of cards"
                  className="Card"
                >
                </img>;

  return(image);
}

export default Card;