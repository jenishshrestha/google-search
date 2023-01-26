// Modules
import Head from "next/head";

// components
import SearchHeader from "@/components/SearchHeader";
import ImageResults from "@/components/ImageResults";
import SearchResults from "@/components/SearchResults";

// import Response from "../Response";
import { useRouter } from "next/router";

export default function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search web and Images Results */}
      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
}
