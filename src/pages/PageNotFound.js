import React from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const PageNotFound = ({title}) => {
  const pageTitle = useTitle(title)
  return (
    <main>
      <section className="flex items-center h-full p-16 dark:bg-dark dark:text-white">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
            But don’t worry, you can explore a fantastic collection of movies waiting for you on our homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 font-semibold rounded bg-blue-800  text-white dark:bg-blue-800 dark:text-gray-50"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
