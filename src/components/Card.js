import React, { useState, useEffect } from "react";

const Card = (props) => {
  const image = <img src={props.url} alt="card"></img>

  return(
    <div>
      {image}
    </div>
  )
}

export default Card;