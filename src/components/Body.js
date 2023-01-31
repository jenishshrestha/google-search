import { useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

// images
import SearchIcon from "@icon/search.svg";
import MicrophoneIcon from "@icon/microphone.svg";
import XIcon from "@icon/xicon.svg";
import Logo from "@public/logo.png";

export default function Body() {
  // state
  const [showX, setShowX] = useState(0);

  const router = useRouter();
  const searchInputRef = useRef(null);

  const handleChange = () => {
    const term = searchInputRef.current.value;
    if (!term.trim()) {
      setShowX(0);
    } else {
      setShowX(1);
    }
  };

  const resetChange = () => {
    searchInputRef.current.value = "";
    setShowX(0);
  };

  function search(event) {
    event.preventDefault();
    // console.log(searchInputRef);
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  }

  async function randomSearch(event) {
    event.preventDefault();
    const randomTerm = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    ).then((response) => response.json());
    if (!randomTerm) return;
    router.push(`/search?term=${randomTerm}&searchType=`);
  }

  return (
    <form className="flex flex-col items-center justify-center py-10 grow">
      <Image width="300" height="100" alt="Logo" src={Logo.src} />
      <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none"
          onChange={handleChange}
        />
        {showX ? (
          <XIcon
            onClick={resetChange}
            className="h-5 pr-4 text-gray-500 border-r-2 border-gray-300 cursor-pointer sm:mr-3"
          />
        ) : (
          ""
        )}
        <MicrophoneIcon className="hidden h-5 mr-3 text-blue-500 sm:inline-flex" />
      </div>
      <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
        <button onClick={search} className="px-4 bg-gray-100 btn h-9">
          Google Search
        </button>
        <button onClick={randomSearch} className="px-4 bg-gray-100 btn h-9">
          I&apos;m Feeling Lucky
        </button>
      </div>
      <div className="text-sm mt-7">
        This website is created for learning purposes.
      </div>
    </form>
  );
}
