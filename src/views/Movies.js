import Movie from './../components/Movie'
import movies from './../data/movies.json'

export const Movies = () => {
    return (
        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            {movies.map((movie) => (
            <Movie movie={movie} />
            ))}
        </div>
    );
  }