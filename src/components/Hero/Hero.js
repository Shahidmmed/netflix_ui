import React, { useEffect, useState } from "react";
import {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroTitle,
} from "./Hero.styles";

import axios from "../../axios";

function Hero({ fetchUrl }) {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const originals = request.data.results;
      setMovie(originals[Math.floor(Math.random() * originals.length)]);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <HeroContainer background={movie?.backdrop_path}>
      <div className="heroContent">
        <HeroTitle>
          {movie?.name || movie?.title || movie?.original_title}
        </HeroTitle>
        <HeroDescription>{truncate(movie?.overview, 150)}</HeroDescription>
        <HeroButton>Play</HeroButton>
        <HeroButton>My List</HeroButton>
      </div>
      <div className="fadeBottom"></div>
    </HeroContainer>
  );
}

export default Hero;
