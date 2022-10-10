import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // Allows for eslint to ignore NextJS page configuration
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
