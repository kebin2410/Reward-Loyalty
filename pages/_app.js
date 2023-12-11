import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { parseCookies, destroyCookie } from "nookies";
import { useEffect, useState, useContext } from "react";
import Layout from "../components/layout";
import baseUrl from "../utils/baseUrl";
import { redirectUser } from "../utils/authUser";
import { LanguageProvider } from "../common/LanguageChange/LanguageContext";
import { ThemeProvider } from "../common/ThemeChange/ThemeContext";
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        <ThemeProvider>
          <LanguageProvider>
            <Head>
              <title>Reward Loyalty</title>
              <meta name="description" content="powered by zest app" />
            </Head>
            <Component {...pageProps} />
          </LanguageProvider>
        </ThemeProvider>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

App.getInitialProps = async ({ component, ctx }) => {
  const { token } = parseCookies(ctx);
  let pageProps = {};

  const memberProtectedRoutes =
    ctx.pathname === "/cards/Membership" ||
    ctx.pathname === "/cards/LoyaltyCard" ||
    ctx.pathname === "/cards/FilmClub" ||
    ctx.pathname === "/cards/StyleCard" ||
    ctx.pathname === "/member/claim" ||
    ctx.pathname === "/member" ||
    ctx.pathname === "/member/account/edit" ||
    ctx.pathname === "/member/voucher";
  const staffProtectedRoutes =
    ctx.pathname === "/staff/earn" ||
    ctx.pathname === "/staff/members" ||
    ctx.pathname === "/staff/qrcode" ||
    ctx.pathname === "/staff" ||
    ctx.pathname === "/staff/account/edit" ||
    ctx.pathname === "/staff/transaction";
  const partnerProtectedRoutes =
    ctx.pathname === "/partner" ||
    ctx.pathname === "/partner/account/edit" ||
    ctx.pathname === "/partner/manage/clubs";
  const adminProtectedRoutes =
    ctx.pathname === "/admin" ||
    ctx.pathname === "/admin/manage/clubs" ||
    ctx.pathname === "/admin/account/edit";

  if (!token) {
    console.log(ctx.pathname);

    memberProtectedRoutes && redirectUser(ctx, "/");
    staffProtectedRoutes && redirectUser(ctx, "/staff/login");
    partnerProtectedRoutes && redirectUser(ctx, "/partner/login");
    adminProtectedRoutes && redirectUser(ctx, "/admin/login");
    //this means if there are protected routes in pathname, then move user to /login page since no token
  } else {
    //if TOKEN EXISTS
    if (Component.getInitialProps) {
      //Component is the active page here
      //if an active page is requesting getInitialProps, then
      pageProps = await Component.getInitialProps(ctx);
      //since we're doing this when token is there, we'll only get the user and userFollowStats on protected routes since we're awaiting pageProps when token exists. pageProps.user = user (i.e. pageProps consists of user)
    }

    try {
      const res = await axios.get(`${baseUrl}/api/auth`, {
        headers: { Authorization: token },
      }); //this receives an object with user and userFollowStats
      const { user, userFollowStats } = res.data;

      if (user) !memberProtectedRoutes && redirectUser(ctx, "/"); //this means that if the user is not in a protected route, say he's in /login or /signup, then we'll redirect him to home page since user is already logged in

      pageProps.user = user;
      //we'll automatically receive these props in the protected routes. look at like 41 for more info
      //If we WEREN't spreading them, we would have to pass them like <Component user = {pageProps.user}></Component>
      //it's basically like  a global state where we have the user and userFollowStats and we can use them in any protected <Component> inside of <Layout></Layout>
      pageProps.userFollowStats = userFollowStats;
    } catch (error) {
      destroyCookie(ctx, "token"); //destroy the cookie in case of error
      redirectUser(ctx, "/login");
    }
  }
  return { pageProps };
  //this pageProps will automatically get addded to the props of this class, i.e. MyApp
};
export default App;
