import Head from "next/head";
import Header from "@/components/Header";
import Body from "@/components/Body";

const Home = () => {
  return (
    <>
      <Head>
        <title>Implementation of Google Programmable Search Engine</title>
        <meta
          name="description"
          content="Google Programmable Search Engine Implementation in Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex flex-col h-screen">
        <Header />
        <Body />
      </div>
    </>
  );
};

export default Home;
