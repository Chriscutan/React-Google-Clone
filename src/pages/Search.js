import React, { useEffect, useState } from "react";
import SearchHeader from "../components/SearchHeader";
import { useParams } from "react-router-dom";
import { GOOGLE_SEARCH_API_KEY, SEARCH_ENGINE_ID } from "../keys";
import SearchResult from "../components/SearchResult";

function Search() {
  const { term } = useParams();

  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const resultsData = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${term}`
      );

      const data = await resultsData.json();

      setResults(data.items);
      setSearchInfo(data.searchInformation);
    };

    fetchData();
  }, [term]);

  return (
    <div className="w-screen bg-white">
      <SearchHeader />

      <div className="max-w-7xl ml-60 mt-5">
        <p className="text-sm text-black">
          About {searchInfo?.formattedTotalResults} results&nbsp;
          <span>{searchInfo?.formattedSearchTime}&nbsp; in seconds</span>
        </p>
      </div>

      <div className="max-w-3xl ml-60 mt-5">
        {results.map((result) => (
          <SearchResult
            key={result.cacheId}
            resultPageTitle={result.title}
            resultPageLink={result.formattedUrl}
            resultTitle={result.title}
            resultPara={result.snippet}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
