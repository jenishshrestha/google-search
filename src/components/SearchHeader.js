import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import User from "./User";
import SearchHeaderOptions from "@/components/SearchHeaderOptions";

// images
import Logo from "@public/logo.png";
import SearchIcon from "@icon/search.svg";
import MicrophoneIcon from "@icon/microphone.svg";
import XIcon from "@icon/xicon.svg";

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(event) {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          width="120"
          alt="logo"
          height="40"
          className="cursor-pointer"
          src={Logo.src}
        />
        <div class="grow">
          <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
            <input
              type="text"
              defaultValue={router.query.term}
              ref={searchInputRef}
              className="w-full focus:outline-none"
            />
            <XIcon
              onClick={() => (searchInputRef.current.value = "")}
              className="h-7 text-gray-500 cursor-pointer sm:mr-3"
            />
            <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
            <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
            <button onClick={search} type="submit" hidden></button>
          </form>
        </div>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}