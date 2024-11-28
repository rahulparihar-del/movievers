import React from 'react';
import useFetch from '../hooks/useFetch';
import {useSearchParams} from "react-router-dom";
import MovieCard from '../components/MovieCard';
import { useTitle } from '../hooks/useTitle';

const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, searchQuery);

  const pageTitle = useTitle(`Search Result for ${searchQuery}`);

  return (
    <main>
      <section className='py-7' >
        <p className='text-3xl text-gray-700 dark:text-white'>
          {movies.length === 0 ? `No results found for "${searchQuery}"` : `Search results for "${searchQuery}"`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Search;
