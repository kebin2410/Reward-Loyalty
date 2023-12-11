import React, { useState, useEffect, useRef } from "react";
import cookie from "js-cookie";
import { loginUser } from "../utils/authUser";
import Navbar from "../components/navBar/Navbar";
import LoginForm from "../components/login/member/LoginForm";
import Footer from "../components/footer/Footer";
export default function Login() {
  return (
    <>
      <Navbar />
      <LoginForm />
      <Footer />
    </>
  );
}

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};
