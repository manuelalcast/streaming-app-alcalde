import TabDetailMovie from "../components/TabDetailMovie";
import Back from "../assets/back.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import rentIcon from "../assets/rent-icon.svg";
import { useState, useEffect } from "react";

function DetailMovie() {
  let navigate = useNavigate();

  const location = useLocation();
  var objMovie = location.state;

  const [validateMovieStatus, setValidateMovieStatus] = useState(false);

  useEffect(() => {
    function fetchValidateMovie() {
      fetch(
        process.env.REACT_APP_OPERADOR_URL + "/rentals/movies/" + objMovie.id
      )
        .then((res) => res.json())
        .then((res) => {
          var objResponse = res;

          if (objResponse.data === 1) {
            setValidateMovieStatus(false);
          } else {
            setValidateMovieStatus(true);
          }
        })
        .catch((rejected) => {
          console.log(rejected);
        });
    }
    /* al usar el Backend se hara una validacion de disponibilidad del estado de la pelicula elegida, si la pelicula puede ser alquilada */
    fetchValidateMovie();
  }, []);

  let arrayGender = objMovie.genders,
    arrayGenderTexto = [];

  if (arrayGender.length > 0) {
    for (let i = 0; i < arrayGender.length; i++) {
      const elementGender = arrayGender[i];
      arrayGenderTexto.push(elementGender.name);
    }
  }

  return (
    <div className="parent-detail-movie md:h-full">
      <div className="pl-5 pr-5 div1-detail-movie text-center">
        <img
          src={objMovie.banner}
          alt={objMovie.name}
          className="h-full m-auto"
        />
      </div>
      <div className="ml-6 mt-10 div2-detail-movie">
        <h1 className="text-6xl font-title text-white text-left-i">
          {objMovie.name}
        </h1>
        <h1 className="mt-3 text-2xl font-title text-gray text-left-i">
          {objMovie.year} | {objMovie.time} | {objMovie.clasification}
        </h1>
      </div>
      <div className="div3-detail-movie mt-10 text-right mr-6">
        <h1 className="text-5xl font-title text-white">
          {objMovie.rating} <span className="text-orange">★</span>{" "}
        </h1>
        {validateMovieStatus ? (
          <button
            type="button"
            className="mt-2 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
            onClick={() => navigate("/rent", location)}
          >
            <img className="w-4 h-4 mr-2 -ml-1" src={rentIcon} alt="img-rent" />
            ALQUILAR
          </button>
        ) : null}
         <button
            type="button"
            className="mt-2 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
            onClick={() => navigate("/")}
          >
            <img className="w-4 h-4 mr-2 -ml-1" src={Back} alt="img-rent" />
            REGRESAR
          </button>
      </div>
      <div className="ml-6 mr-6 div4-detail-movie text-left-i">
        <h1 className="text-1xl font-title text-white text-justify mb-3">
          {objMovie.resume}
        </h1>
        <span className="text-1xl font-title text-gray text-justify">
          Director:
        </span>{" "}
        <span className="text-1xl font-title text-white text-justify">
          {objMovie.director}
        </span>
        <br />
        <span className="text-1xl font-title text-gray text-justify">
          Género:
        </span>{" "}
        <span className="text-1xl font-title text-white text-justify">
          {arrayGenderTexto.toString()}
        </span>
      </div>
      <div className="div5-detail-movie ml-6 mr-6">
        <TabDetailMovie />
      </div>
    </div>
  );
}

export default DetailMovie;
