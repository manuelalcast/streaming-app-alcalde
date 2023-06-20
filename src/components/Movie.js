import { useNavigate } from "react-router-dom";
import MovieSvg from "../assets/movie.svg";

function Movie({ movie }) {
  let navigate = useNavigate();

  let arrayGender = movie.genders, arrayGenderTexto = [];

  if (arrayGender.length > 0){
    for (let i = 0; i < arrayGender.length; i++) {
      const elementGender = arrayGender[i];
      arrayGenderTexto.push(elementGender.name);
    }
  }

  return (
    <div className="rounded-md bg-card-movie shadow-lg m-4">
      <div className="md:flex px-4 leading-none max-w-4xl">
        <div className="flex-none">
          <img
            src={movie.banner}
            alt="pic"
            className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg m-auto"
          />
        </div>
        <div className="flex-col text-gray-300">
          <p className="pt-4 text-2xl font-bold">
            {movie.name} ({movie.year})
          </p>
          <hr className="hr-text" data-content="" />
          <div className="text-md flex justify-between px-4 my-2">
            <span className="font-bold">
              {movie.time} | {arrayGenderTexto.toString()}
            </span>
            <span className="font-bold"></span>
          </div>
          <p className="px-4 my-4 text-sm text-justify">
            {movie.resume}
          </p>
          <p className="flex text-md px-4 my-2">
            Rating: {movie.rating}/10
            <span className="font-bold px-2">|</span>
            Clasificación: {movie.clasification}
          </p>
          <div className="text-xs">
          <button
              type="button"
              className="mt-5 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
              onClick={() => navigate("/movie", { state: movie })}
            >
              <img className="w-4 h-4 mr-2 -ml-1" src={MovieSvg} alt="img-rent" />
              VER DETALLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
