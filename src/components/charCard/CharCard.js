import React from "react";
import { Link } from "react-router-dom";
import "./charCard.css"

//Each card contain picture, name and description of the character.

const CharCard = ({ item }) => {



  return(
    <div className="char-card-container">
    <Link to={{
      pathname: `/character/${item.id}`,
      state: {
        item,
      },
    }}>
    <div>
          <div className="char-card">
            <div className="name" key={item.id}>{item.name}</div>
            <img src={item.thumbnail.path+"."+item.thumbnail.extension} alt=""/>
            <div className="description">{item.description}</div>
          </div>
    </div>
  </Link>
    </div>
  )
}

export default CharCard;