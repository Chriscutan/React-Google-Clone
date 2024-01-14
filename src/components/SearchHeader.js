import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function SearchHeader() {
  const { term } = useParams();

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState(term);

  return (
    <header className="flex flex-col items-start space-y-5 w-full py-2 px-4 md:py-5 md:px-28 border-b border-gray-500 bg-white sticky top-0">
      {/* Top Div */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-5 w-full">
          <img
            src="https://imgs.search.brave.com/FMfGvu3D3SfmvdBW4jdzaVHaQ6eY5PgmeMj8m6wF4lg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2hzLWZzL2h1YmZz/L1NjcmVlbiUyMFNo/b3QlMjAyMDE5LTA1/LTI4JTIwYXQlMjAy/LjQzLjIzJTIwUE0u/cG5nP3dpZHRoPTU5/OCZuYW1lPVNjcmVl/biUyMFNob3QlMjAy/MDE5LTA1LTI4JTIw/YXQlMjAyLjQzLjIz/JTIwUE0ucG5n"
            alt="logo"
            height={30}
            width={100}
            className="!h-30 !w-30 lg:!h-30 lg:!w-600"
          />

          <form className="w-full lg:max-w-3xl rounded-full border border-grey-500 flex items-center justify-between p-3">
            <div className="flex items-center space-x-2 w-full lg:max-w-3xl">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
                className="outline-none flex-1 bg-transparent mr-3 px-3 text-black border-r-2 border-gray-400"
              />
            </div>

            <div className="flex items-center space-x-5">
              <button type="submit" onClick={() => navigate(`/${searchTerm}`)}>
                <CiSearch className="h-5 w-5 text-black cursor-pointer" />
              </button>
              <FaMicrophone className="hidden lg:block lg:h-5 lg:w-5 text-black" />

              <FaCamera className="hidden lg:block lg:h-5 lg:w-5 text-black" />
            </div>
          </form>
        </div>

        <div className="lg:flex items-center space-x-3 hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Div */}
      <div className="hidden lg:flex lg:ml-24 lg:w-full lg:px-10">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-5 max-w-3xl">
            <a href="#" className="flex items-center space-x-1">
              <CiSearch className="h-4 w-4 text-black" />
              <p className="text-black text-xs">All</p>
            </a>

            <a href="#" className="flex items-center space-x-1">
              <FaRegNewspaper className="h-4 w-4 text-black" />
              <p className="text-black text-xs">News</p>
            </a>

            <a href="#" className="flex items-center space-x-1">
              <MdInsertPhoto className="h-4 w-4 text-black" />
              <p className="text-black text-xs">Images</p>
            </a>

            <a href="#" className="flex items-center space-x-1">
              <FaVideo className="h-4 w-4 text-black" />
              <p className="text-black text-xs">Videos</p>
            </a>

            <a href="#" className="flex items-center space-x-1">
              <IoIosPricetag className="h-4 w-4 text-black" />
              <p className="text-black text-xs">Shopping</p>
            </a>

            <a href="#" className="flex items-center space-x-1">
              <IoMdMore className="h-4 w-4 text-black" />
              <p className="text-black text-xs">More</p>
            </a>
          </div>

          <p className="text-black text-xs">Tools</p>
        </div>

        <div className="flex items-center justify-end flex-1">
          <p className="text-black text-xs">SafeSearch</p>
          <IoIosArrowDown className="h-4 w-4 text-black" />
        </div>
      </div>
    </header>
  );
}

export default SearchHeader;
