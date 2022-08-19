import { useState } from "react";
import "./App.css";
import Movies from "./components/Movies/Movies";
import Hero from "./components/Hero/Hero";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Hero fetchUrl={requests.fetchNetflixOriginals} />
      <Movies
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      ></Movies>
    </div>
  );
}

export default App;
