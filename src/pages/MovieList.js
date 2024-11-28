import React from "react";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

const MovieList = ({ apiPath, title }) => {
  const { data: movies, hasMore, loadMore } = useFetch(apiPath);

  // eslint-disable-next-line
  const pageTitle = useTitle(title);

  

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap gap-6 other:justify-evenly">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-blue-800  dark:bg-blue-800 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default MovieList;
