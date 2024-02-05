import { WatchedMovie } from "../index.ts";

function WatchedMoviesList({ watched, onDeleteWatched }): JSX.Element {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie
                    movie={movie}
                    key={movie.imdbID}
                    onDeleteWatched={onDeleteWatched}
                />
            ))}
        </ul>
    );
}

export default WatchedMoviesList;