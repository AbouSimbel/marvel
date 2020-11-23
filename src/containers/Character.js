import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import { useParams, useLocation } from "react-router-dom";
import Axios from "axios";
import scratch from "../assets/img/scratch.png"

const Character = () => {

const { id } = useParams("");
const [data, setData] = useState();
const [isLoading, setIsLoading] = useState(true);

const location = useLocation();

console.log(location);


useEffect(() => {
  const fetchData = async () => {
    const response = await Axios.get(`https://marvelapp-backend.herokuapp.com/character/${id}`);
    setData(response.data)
    setIsLoading(false);
  }
  fetchData()
}, [id])

console.log(data);


  return isLoading ? (
    <div>Page en cours de chargement</div>
    ) : (
    <>
    <Header/>
    <div className="character-page">

    <div className="character">
    <div>{location.state.item.name}</div>
    <img className="char-pic" src={location.state.item.thumbnail.path+"."+location.state.item.thumbnail.extension} alt=""/>
    </div>

    {data.data.results.map((item) => {
      return(
        <div className="char-comics" key={item.id}>
          <div>{item.title}</div>
          {item.images[0] ?
          <img src={item.images[0].path+"."+item.images[0].extension} alt=""/>
          :
          <div>No Image</div>
        }
        </div>
      )
    })}
    </div>
    </>

  )
}

export default Character;