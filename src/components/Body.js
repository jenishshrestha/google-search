import Head from "next/head";
import Image from "next/image";
import SearchIcon from "@icon/search.svg";
import MicrophoneIcon from "@icon/microphone.svg";
import { useRouter } from "next/router";
import { useRef } from "react";
import Logo from "@public/logo.png";

export default function Body() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(event) {
    event.preventDefault();
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
    <form className="flex flex-col items-center mt-40">
      <img width="300" height="100" alt="Logo" src={Logo.src} />
      <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <MicrophoneIcon className="h-5" />
      </div>
      <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
        <button onClick={search} className="btn">
          Google Search
        </button>
        <button onClick={randomSearch} className="btn">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
}
