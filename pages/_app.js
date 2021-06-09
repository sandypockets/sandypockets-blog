// import '../styles/globals.css'
import Layout from "../components/Layout";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Blog" description="My Personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
}