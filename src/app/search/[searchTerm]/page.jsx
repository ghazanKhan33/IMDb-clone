import Results from "@/components/Results";
import React from "react";

const SearchPage = async ({ params }) => {
  const searchTerm = params.searchTerm;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${searchTerm}&include_adult=false`
  );
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const data = await response.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
