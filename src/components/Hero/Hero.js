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
      console.log("req", request);
      const originals = request.data.results;
      setMovie(originals[Math.floor(Math.random() * originals.length)]);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movie);
  return (
    <HeroContainer background={movie?.backdrop_path}>
      <HeroTitle>{movie?.name}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton>Play</HeroButton>
      <HeroButton>My List</HeroButton>
    </HeroContainer>
  );
}

export default Hero;
