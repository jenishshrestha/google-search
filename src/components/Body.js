import { useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

// images
import SearchIcon from "@icon/search.svg";
import MicrophoneIcon from "@icon/microphone.svg";
import XIcon from "@icon/xicon.svg";
import Logo from "@public/logo.png";

export default function Body() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(event) {
    event.preventDefault();
    console.log(searchInputRef);
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
        />
        <XIcon
          onClick={() => (searchInputRef.current.value = "")}
          className="h-5 text-gray-500 cursor-pointer sm:mr-3"
        />
        <MicrophoneIcon className="h-5 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      </div>
      <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
        <button onClick={search} className="btn h-9 px-4 bg-gray-100">
          Google Search
        </button>
        <button onClick={randomSearch} className="btn h-9 px-4 bg-gray-100">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
}
