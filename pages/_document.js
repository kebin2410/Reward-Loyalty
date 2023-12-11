import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="256x256" href="/images/favicon256X256.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/images/favicon128X128.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/images/favicon64X64.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/favicon48X48.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
