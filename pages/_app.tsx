import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AddressProvider } from "../hooks/useAddress";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AddressProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </AddressProvider>
  );
}

export default MyApp;
