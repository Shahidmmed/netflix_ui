import React, { useEffect, useState } from "react";
import {
  MoviesContainer,
  MoviesTitle,
  MoviesRow,
  MoviesPoster,
} from "./Movies.styles";
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Movies({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <MoviesContainer>
      <MoviesTitle>{title}</MoviesTitle>
      <MoviesRow>
        {movies.map((movie) => (
          <MoviesPoster
            key={movie.id}
            src={
              movie.poster_path
                ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
                : ""
            }
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </MoviesRow>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </MoviesContainer>
  );
}

export default Movies;
