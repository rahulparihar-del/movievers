import {useCallback, useEffect, useState} from "react";

const useFetch = (apiPath, searchQuery = "") => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [hasMore, setHasMore] = useState(true); // Check if more pages are available
  const [loading, setLoading] = useState(false);

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`;
  // const url2 = `http://private-anon-ccb4cc208e-fanarttv.apiary-mock.com/v3/movies/latest?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`;
  // console.log(data)


  // Fetches data for a specific page from the API 
  const fetchData = useCallback(async (page) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}&page=${page}`);
      const result = await response.json();

      if (result.results) {
        setData((prevData) => [...prevData, ...result.results]); // Append new data
        setHasMore(page < result.total_pages); // Update hasMore based on total_pages
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }finally {
      setLoading(false); // Set loading to false after fetching
    }
  }, [url]);

  // Reset state when apiPath or searchQuery changes
  useEffect(() => {
    setData([]); // Clear existing data
    setCurrentPage(1); // Reset to the first page
    setHasMore(true); // Reset hasMore
  }, [apiPath, searchQuery]);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Increment the page number
  };

  return { data, hasMore, loadMore, loading };
};

export default useFetch;


/*

How It All Works Together

1. Initially, the currentPage is 1, so the first page of data is fetched and added to data.
2.When the user wants more data:
    - loadMore increments currentPage.
    - This triggers the useEffect, which calls fetchData for the new page.
3.The new data is appended to the existing data.
4.hasMore is updated based on the total_pages value from the API response.
5.The user can continue to load more data until hasMore is false.

*/