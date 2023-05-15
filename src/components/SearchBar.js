import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Find from "../assets/find.svg";

export default function SearchBar() {
  let navigate = useNavigate();
  const [textMovie, setTextMovie] = useState("");
  
  const handleChange = (event) => {  
    setTextMovie(event.target.value);
  };

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-3 mb-4 mr-5 ml-5">
      <div></div>
      <div></div>
      <div>
        <label
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img className="w-5 h-5" src={Find} alt="img-rent" />
          </div>
          <input
            type="search"
            id="default-search"
            onChange={handleChange}
            value={textMovie}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar película..."
            required
          />
          <button
            type="button"
            className="absolute right-2.5 bottom-2.5 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => navigate("/find", { state: {textMovie : textMovie} })}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}
