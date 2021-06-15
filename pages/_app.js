import Layout from "../components/layout/Layout";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {

  const [darkMode, setDarkMode] = useState(true);
  const [backgroundColour, setBackgroundColour] = useState("bg-black");
  const [textColour, setTextColour] = useState("text-gray-200");
  const [secondaryTextColour, setSecondaryTextColour] = useState("text-gray-100");

  useEffect(
    () => {
      if (darkMode) {
        setBackgroundColour("bg-black");
        setTextColour("text-gray-200")
        setSecondaryTextColour("text-gray-100")
      } else {
        setBackgroundColour("bg-white");
        setTextColour("text-black");
        setSecondaryTextColour("text-gray-900")
      }
    }, [darkMode]
  )

  return (
    <Layout
      pageTitle="SANDYPOCKETS"
      description="Developer Blog"
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      backgroundColour={backgroundColour}
      textColour={textColour}
      secondaryTextColour={secondaryTextColour}
    >
      <Component
        secondaryTextColour={secondaryTextColour}
        {...pageProps} />
    </Layout>
  );
}