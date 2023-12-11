import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useEffect, useState, useContext } from "react";
import Layout from "../components/layout";
import { LanguageProvider } from "../common/LanguageChange/LanguageContext";
import "../styles/globals.scss";
import { ThemeProvider } from "../common/ThemeChange/ThemeContext";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  if (Component.getLayout) {
    return Component.getLayout(
      <ThemeProvider>
        <LanguageProvider>
          <Head>
            <title>Reward Loyalty</title>
            <meta name="description" content="powered by zest app" />
          </Head>
          <Component {...pageProps} />
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Head>
          <title>Reward Loyalty</title>
          <meta name="description" content="powered by zest app" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
