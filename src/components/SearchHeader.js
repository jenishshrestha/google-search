import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import User from "./User";
import SearchHeaderOptions from "@/components/SearchHeaderOptions";

// images
import Logo from "@public/logo.jpg";
import SearchIcon from "@icon/search.svg";
import MicrophoneIcon from "@icon/microphone.svg";
import XIcon from "@icon/xicon.svg";

export default function SearchHeader() {
  const [showX, setShowX] = useState(0);
  const router = useRouter();
  const searchInputRef = useRef(null);

  useEffect(() => {
    handleChange();
    console.log("loaded");
  }, []);

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
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        <Image
          onClick={() => router.push("/")}
          width="120"
          alt="logo"
          height="40"
          className="cursor-pointer"
          src={Logo.src}
        />
        <div className="grow">
          <form className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg">
            <input
              type="text"
              defaultValue={router.query.term}
              ref={searchInputRef}
              className="w-full focus:outline-none"
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
            <MicrophoneIcon className="hidden h-6 pl-4 mr-3 text-blue-500 sm:inline-flex" />
            <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
            <button onClick={search} type="submit" hidden></button>
          </form>
        </div>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
