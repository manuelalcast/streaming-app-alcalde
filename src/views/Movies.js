import Movie from "./../components/Movie";
//import movies from "./../data/movies.json";
import React, { useState , useEffect } from "react";
import SearchBar from "../components/SearchBar";

export const Movies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + '/movies')
      .then((res) => res.json())
      .then((res) => setMovies(res)).catch(rejected => {
        console.log(rejected);
    });
  }, []);

  return (
    <div>
      <SearchBar />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
        </div>
    </div>
  );

};
