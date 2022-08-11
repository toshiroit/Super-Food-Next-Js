/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const getInitialProps = async (ctx) => {
    const initialProps = await getInitialProps(ctx);
    return { ...initialProps };
  };
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/scss/main.css" />
        <link rel="stylesheet" href="/plugins/fontawesome.6.1.1/css/all.css" />
        <link rel="shortcut icon" href="/images/logo1.jpg" />

        <script src="/plugins/lordicon/xdjxvujz.js"></script>
        <script src="/plugins/jquery.3.6.0/query-3.6.0.min.js"></script>
      </Head>
      <body className="bodyWebUser">
        <Main />
        <NextScript />
      </body>
      <script src="/js/slider.js"></script>
      <script src="/js/main.js"></script>
      <script src="/js/animation.min.js"></script>
      <script src="/js/menu.min.js"></script>
    </Html>
  );
}
