import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/scss/main.css" />
        <link
          rel="stylesheet"
          href="/plugins/fontawesome.6.1.1/css/all.css"
        />
        <script src="/plugins/jquery.3.6.0/query-3.6.0.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />

      </body>
      <script src="/js/slider.js"></script>
      <script src="/js/main.js"></script>
      <script src="/js/animation.min.js"></script>
    </Html>

  )
}

