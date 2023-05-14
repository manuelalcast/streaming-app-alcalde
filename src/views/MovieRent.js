import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import rentIcon from "../assets/rent-icon.svg";
import Back from "../assets/back.svg";
import Plus from "../assets/plus.svg";
import Less from "../assets/less.svg";
import React, { useState } from "react";
import useCounterDays from "../hooks/useCounterDays";
import Confetti from '../components/Confetti';

export const MovieRent = () => {
  let navigate = useNavigate();
  const location = useLocation();
  var movie = location.state;

  const [statusRentMovie, setStatusRentMovie] = useState(false);
  const { days, plusDays, lessDays }  = useCounterDays();

  return (
    <div className="center-image">
      <div className="rounded-md bg-card-movie shadow-lg m-4 card-movie-rent center-image">
        <div className=" ">
          <img
            src={movie.banner}
            alt="pic"
            className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg center-image"
          />
        </div>
        <div className="flex-col text-gray-300">
          <p className="pt-4 text-2xl font-bold">
            {movie.name} ({movie.year})
          </p>
          <hr className="hr-text" data-content="" />
          <div className="px-4 my-2">
            <span className="font-bold">
              {movie.time} |{" "}
              <span>
                {movie.rating}/10&nbsp;<span className="text-orange">★</span>{" "}
              </span>
            </span>
            <span className="font-bold"></span>
            <p className="px-4 my-4 text-sm text-justify">{movie.resume}</p>
          </div>
          <div className="text-xs m-10-percent">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div>
                <span class="font-bold text-base">Días de alquiler:</span>
                <br />
                <span class="text-base">{days} días</span>
              </div>
              <div>
                <button
                  type="button"
                  class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
                  onClick={lessDays}
                >
                  <img class="w-4 h-4" src={Less} alt="img-rent" />
                </button>
                <button
                  type="button"
                  class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
                  onClick={plusDays}
                >
                  <img class="w-4 h-4" src={Plus} alt="img-rent" />
                </button>
              </div>
              <div>
                * No se puede alquilar más de 5 días la pelicula seleccionada
              </div>
            </div>
          </div>
          <div className="text-xs">
            <button
              type="button"
              class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
              onClick={() => setStatusRentMovie(true)}
            >
              <img class="w-4 h-4 mr-2 -ml-1" src={rentIcon} alt="img-rent" />
              ALQUILAR
            </button>
            <button
              type="button"
              class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
              onClick={() => navigate("/")}
            >
              <img class="w-4 h-4 mr-2 -ml-1" src={Back} alt="img-rent" />
              VOLVER
            </button>
          </div>
        </div>
      </div>
      {statusRentMovie &&  <Confetti />}
        {/*
      ) : null}*/}
    </div>
  );
};
