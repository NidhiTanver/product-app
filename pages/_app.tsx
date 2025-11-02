import "../assets/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  // Component → the active page being rendered
  // pageProps → props preloaded for that page (if any)
  return <Component {...pageProps} />;
}
