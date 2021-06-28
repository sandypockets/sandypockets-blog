import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import SectionSeparator from "../utility/SectionSeparator";

export default function Layout({ children, pageTitle, description, backgroundColour, textColour, secondaryTextColour, darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description} />
        <title>{pageTitle}</title>
      </Head>
      <div className="h-screen">
        <main className={backgroundColour + " " + textColour + " w-full flex justify-center"}>
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="content mx-7 sm:mx-16">{children}</div>
        </main>
        {/*<SectionSeparator className='w-3/5 m-auto mt-6 sm:mt-24' />*/}
        <Footer backgroundColour={backgroundColour} textColour={textColour} secondaryTextColour={secondaryTextColour} />
      </div>
    </>
  );
}