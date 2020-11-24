import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "../components/charCard/CharCard";
import Header from "../components/header/Header";
import "../App.css"
import previous from "../assets/img/previous-page.png";
import loading from "../assets/img/loading.gif"

// Renommer en page Characters.
//La page doit afficher la liste des personnages (100 par page) par ordre alphabetique. Fiches avec photo, nom et description.
//en cliquant sur la fiche on doit aller vers une page qui regroupe les comics liés au personnage.


const Home = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  console.log(page);

useEffect(() => {
  const fetchData = async () => {
    try {
      //https://marvelapp-backend.herokuapp.com
      const response = await axios.get(`https://marvelapp-backend.herokuapp.com/characters?page=${page}`);
      setData(response.data)
      setIsLoading(false);
    } catch (error) {
        console.log((error.message));
    }
  };

  fetchData();
}, [page]);

  return isLoading ? (
    <div className="loading">
      <img src={loading} alt=""/>
      <span>LOADING</span>
    </div>
  ) : (
    <div>
    <Header/>
    <div className="home-page">
      <div>
        <div className="previous-page" onClick={() => {
          setPage(page-1)
          }}>
          <img src={previous} alt=""/>
        </div>
    </div>

    <div className="card-container">
    {data.data.results.map((item) => {
      return(
        <CharCard item={item} data={data}/>
        )
      }
      )}
    </div>

        <div>
          <div className="next-page" onClick={() => {
            setPage(page+1)
            }}><img src={previous} alt=""/>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home;