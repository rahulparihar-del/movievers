import React from "react";
import { Routes, Route } from "react-router-dom";

import { MovieList, Search, PageNotFound, MovieDetail } from "../pages/index";

const AllRoutes = () => {
  return (
    <div className="dark:bg-dark">
      <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />}  />
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular"  />} />

        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming"  />} />
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated"  />}  />

        <Route path="/search" element={<Search apiPath="search/movie" />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound title="Page Not Found" />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
