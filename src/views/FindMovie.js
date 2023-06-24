import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieListFind from "./../components/MovieListFind";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";

export const FindMovie = () => {
  const location = useLocation();
  var objFindMovie = location.state.textMovie;

  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(objFindMovie, 5000);

  useEffect(() => {
    setIsSearching(true);
    searchCharacters(debouncedSearchTerm).then((resultsFind) => {
    setIsSearching(false);
    setResults(resultsFind);
    });
  }, [debouncedSearchTerm]);

  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-1 gap-3 mb-4 mr-5 ml-5 mt-6">
        {isSearching && (
          <Loading />
        )}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 mt-6">
          {results?.map((movie) => (
            <MovieListFind key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

function searchCharacters(search) {
  return fetch(process.env.REACT_APP_BASE_URL + '/movies?name='+search
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then((r) => r.json())
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
