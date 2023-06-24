import { useNavigate } from "react-router-dom";

function Movie({ movie }) {
  let navigate = useNavigate();
  return (
    <div  className="container-image-find"
          onClick={() => navigate("/movie", { state: movie })}
    >
      <img
        src={movie?.image}
        alt="pic"
        className="h-25 w-72 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg m-auto cursor-pointer"
      />
      <span className="bottom-right-find font-title cursor-pointer">{movie?.name}</span>
    </div>
  );
}

export default Movie;
