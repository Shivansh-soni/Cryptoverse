import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "./Compstyle.css";
import "../styles/Loader.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
