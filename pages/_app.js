// import '../styles/globals.css'
import Layout from "../components/layout/Layout";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Sandypockets Blog" description="Developer Blog">
      <Component {...pageProps} />
    </Layout>
  );
}