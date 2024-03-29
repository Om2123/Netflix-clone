import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "../../api_data/axios"
import requests from "../../api_data/request"
import Rows from "./Rows";
import Footer from "./Footer";
import Banner from "./Banner";


const Hero = () => {
  

    const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      
      setMovie(request.data.results);
    }

    fetchData();
  }, []);
  const randomIndex = Math.floor(Math.random() * movie.length);


  return (
    <div>
      <Nav/>
      <Banner movie={movie[randomIndex]}/>
    <div  className="rowBack">

      <Rows title="Netflix Originals" isLargeRow="true" fetchUrl={requests.fetchNetflixOriginals} />
       <Rows title="Trending Now"  fetchUrl={requests.fetchTrending} />  
       <Rows title=" Action Movies" fetchUrl={requests.fetchActionMovies} />
       <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
       <Rows title="Horror Movies" isLargeRow="true" fetchUrl={requests.fetchHorrorMovies} />
       <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
       <Rows title="Upcoming Movies" fetchUrl={requests.fetchUpcoming} />
       <Rows title="Romance Movies" isLargeRow="true" fetchUrl={requests.fetchRomanceMovies} />
       <Rows title="Popular Movies" fetchUrl={requests.fetchPopular} />

    </div>
      <Footer/>
    </div>
  );
};

export default Hero;
