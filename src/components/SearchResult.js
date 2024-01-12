import React from "react";
import { IoMdMore } from "react-icons/io";

function SearchResult({
  resultPageTitle,
  resultPageLink,
  resultTitle,
  resultPara,
}) {
  return (
    <div className="flex flex-col space-y-2 mb-5">
      <div className="flex items-center space-x-5 max-w-xs">
        <div className="text-black font-light flex-1">
          <p className="font-normal">{resultPageTitle}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm">{resultPageLink}</p>
            <IoMdMore color="white" size="20" />
          </div>
        </div>
      </div>

      <div>
        <a
          href={resultPageLink}
          className="text-xl font-semibold text-blue-700 hover:underline"
        >
          {resultTitle}
        </a>

        <p className="text-sm text-black">{resultPara}</p>
      </div>
    </div>
  );
}

export default SearchResult;
