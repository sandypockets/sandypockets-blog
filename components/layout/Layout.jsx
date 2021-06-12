import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description} />
        <title>{pageTitle}</title>
      </Head>
      <div className="min-h-screen">
        <main className="w-full min-h-5/6 flex justify-center bg-black text-white">
          <Nav />
          <div className="content pt-32 mx-7 sm:mx-16">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}