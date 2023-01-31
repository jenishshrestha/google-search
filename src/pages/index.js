import Head from "next/head";
import Header from "@/components/Header";
import Body from "@/components/Body";

const Home = () => {
  return (
    <>
      <Head>
        <title>Google</title>
        <meta
          name="description"
          content="Google clone with Next.js and Google API"
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
