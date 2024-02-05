import { Movie } from "../index.ts";

function MovieList({ movies, onSelectMovie }): JSX.Element {
    return (
        <ul className="list list-movies">
            {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
            ))}
        </ul>
    );
}

export default MovieList;