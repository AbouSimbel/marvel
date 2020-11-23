import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/header/Header";
import "../App.css"


// Comics page :

const Comics = () => {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://marvelapp-backend.herokuapp.com/comics?page=${page}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [page])


  return isLoading ? (
    <div>En cours de chargement</div>
  ) : (
    <>
    <Header/>
    <div className="comics-page">

    {data.data.results.map((item) => {
      console.log(item);
      return(
        <div className="comic-card">
        <div key={item.id}>
        <div className="title">{item.title}</div>
        {item.images[0]?.path ?
        <img src={item.images[0].path+"."+item.images[0].extension} alt=""/> :  <div>No Image</div> }
        <div classeName="comic-description">{item.description}</div>
        <div></div>
        <div></div>
        </div>
        </div>
      )
    })}
        <div>
        <button onClick={() => {
          setPage(page-1)
        }}>Previous</button>
        <button onClick={() => {
          setPage(page+1)
        }}>Next</button>
        </div>
        </div>
    </>
  )
}

export default Comics;
