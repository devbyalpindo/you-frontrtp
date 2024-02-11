import { useState, useEffect } from "react";
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/Footer/footer";
import { store } from "../components/redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('566855558929284') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 250);

    return () => {
      setLoading(true);
    };
  }, [pageProps]);

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
