import Footer from "../components/Footer";
import "../styles/globals.css";
import { createClient, Provider } from "urql";

const client = createClient({
  url: "https://api.ckdr.co.in/graphql",
});

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Provider value={client}>
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
