import Header from "../common/Components/Header/Header";
import Footer from "../common/Components/Footer/Footer";
import "../../styles/Loader.io.css";
import "../../styles/main.scss"
import { store, wrapper } from "../common/redux/store/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (

    <Provider store={store}>
      <div id="body" className="wrapper">
        <div className="desktop supership">
          {/* Check Router Checkout -> disable Header and Footer */}
          {router.asPath === "/checkout" ? (
            <Component {...pageProps} />
          ) : (
            <>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </>
          )}
        </div>
      </div>
    </Provider>
  );
};
export default wrapper.withRedux(MyApp);
