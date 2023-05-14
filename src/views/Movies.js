import Movie from './../components/Movie'
import movies from './../data/movies.json'

export const Movies = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            {movies.map((movie) => (
            <Movie movie={movie} />
            ))}
        </div>
    );
  }