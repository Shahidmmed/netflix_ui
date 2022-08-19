import { useState } from "react";
import "./App.css";
import Movies from "./components/Movies/Movies";
import Hero from "./components/Hero/Hero";
import requests from "./requests";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero fetchUrl={requests.fetchNetflixOriginals} />
      <Movies
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      ></Movies>
      <Movies title="Trending Now" fetchUrl={requests.fetchTrending}></Movies>
      <Movies title="Top Rated" fetchUrl={requests.fetchTopRated}></Movies>
      <Movies
        title="Exciting Movies"
        fetchUrl={requests.fetchActionMovies}
      ></Movies>
      <Movies title="Comedies" fetchUrl={requests.fetchComedyMovies}></Movies>
      <Movies
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      ></Movies>
      <Movies
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      ></Movies>
      <Movies
        title="Documentaries"
        fetchUrl={requests.fetchDocumantaries}
      ></Movies>
    </div>
  );
}

export default App;
