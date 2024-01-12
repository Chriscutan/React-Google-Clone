import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      <HomeHeader />

      <div className="flex flex-col items-center space-y-5 max-w-7xl -mt-60 mx-auto p-5">
        <img
          src="https://imgs.search.brave.com/FMfGvu3D3SfmvdBW4jdzaVHaQ6eY5PgmeMj8m6wF4lg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2hzLWZzL2h1YmZz/L1NjcmVlbiUyMFNo/b3QlMjAyMDE5LTA1/LTI4JTIwYXQlMjAy/LjQzLjIzJTIwUE0u/cG5nP3dpZHRoPTU5/OCZuYW1lPVNjcmVl/biUyMFNob3QlMjAy/MDE5LTA1LTI4JTIw/YXQlMjAyLjQzLjIz/JTIwUE0ucG5n"
          alt="logo"
          height={30}
          width={300}
          className="!h-30 !w-60 lg:!h-30 lg:!w-600"
        />
        <form className="flex flex-col space-y-5 items-center">
          <div
            className="flex flex-1 items-center justify-between space-x-2 border border-gray-200 rounded-full 
            p-3 w-full lg:w-[600px] hover:bg-gray-400/10 hover:border-none "
          >
            <CiSearch className="h-4 w-4 text-black" />

            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              className="bg-transparent flex-1 outline-none text-black"
            />

            <div className="flex items-center space-x-3">
              <FaMicrophone className="h-5 w-5 text-black" />

              <FaCamera className="h-5 w-5 text-black" />
            </div>
          </div>

          <div className="flex items-center space-x-3 mt-5">
            <input
              type="submit"
              value="Google Search"
              onClick={() => navigate(`/${searchTerm}`)}
              className="text-white text-sm py-2 px-4 rounded-md hover:border hover:border-white"
            />
            <button className="text-white text-sm py-2 px-4 rounded-md hover:border hover:border-white">
              <a href={"https://doodles.google/"}>I'm Feeling Lucky</a>
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
