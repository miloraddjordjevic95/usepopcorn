import { useState } from "react";
import { useMovies } from "./hooks/useMovies.ts";
import { useLocalStorageState } from "./hooks/useLocalStorageState.ts";
import { Box, Main, NavBar } from "./layouts";
import {
    ErrorMessage,
    Loader,
    MovieDetails,
    MovieList,
    NumResults,
    Search,
    WatchedMoviesList,
    WatchedSummary,
} from "./components";

function App(): JSX.Element {
    const [query, setQuery] = useState<string>("");
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const { movies, isLoading, error } = useMovies(query);

    const [watched, setWatched] = useLocalStorageState([], "watched");

    function handleSelectMovie(id: number): void {
        setSelectedId((selectedId) => (id === selectedId ? null : id));
    }

    function handleCloseMovie(): void {
        setSelectedId(null);
    }

    function handleAddWatched(movie): void {
        setWatched((watched) => [...watched, movie]);
    }

    function handleDeleteWatched(id: number): void {
        setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
    }

    return (
        <>
            <NavBar>
                <Search query={query} setQuery={setQuery} />
                <NumResults movies={movies} />
            </NavBar>

            <Main>
                <Box>
                    {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
                    {isLoading && <Loader />}
                    {!isLoading && !error && (
                        <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
                    )}
                    {error && <ErrorMessage message={error} />}
                </Box>

                <Box>
                    {selectedId ? (
                        <MovieDetails
                            selectedId={selectedId}
                            onCloseMovie={handleCloseMovie}
                            onAddWatched={handleAddWatched}
                            watched={watched}
                        />
                    ) : (
                        <>
                            <WatchedSummary watched={watched} />
                            <WatchedMoviesList
                                watched={watched}
                                onDeleteWatched={handleDeleteWatched}
                            />
                        </>
                    )}
                </Box>
            </Main>
        </>
    );
}

export default App;