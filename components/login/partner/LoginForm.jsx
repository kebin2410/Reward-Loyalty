import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const LoginForm = () => {
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) return (
    <div className="h-100 flex flex-grow-1">
      <section section className="sign-in-up w-100 place-self-center h-100 mx-auto place-self-center" >
        <div className="row h-100">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 p-5 d-flex flex-column justify-content-center">
            <div className="m-auto" style={{ maxWidth: "600px" }}>
              <div className="section-header">
                <h4 className="title">Sign in to access your account</h4>
              </div>
              <form action="/">
                <div className="row">
                  <div className="col-12 pb-1">
                    <div className="single-input">
                      <span htmlFor="phone">Enter Your Phone Number *</span>
                    </div>
                    <PhoneInput
                      name="phone"
                      value={value}
                      onChange={setValue}
                      id="phone"
                      className="rounded rounded-full bg-gray-100 text-gray-700 shadow-sm border-green"
                    />
                  </div>

                </div>
                <div className="btn-area">
                  <button className="cmn-btn" style={{ width: "100%" }}>
                    Login
                  </button>
                </div>
                <div className="py-2">
                  <span style={{ color: "var(--head-color)" }}>Don&apos;t have an account yet? <Link href={"/register"}>Create a free account</Link></span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 bg-sign d-flex flex-column justify-content-center">
            <div className="m-auto p-5" style={{ maxWidth: "600px" }}>
              <h2 className="py-2 text-white">Partner Portal</h2>
              <h5 className="py-3 text-white" style={{ fontWeight: "400" }}>
                This is your go-to platform for loyalty programs, rewards, and staff management. Our interface, built for ease and growth, lets you create customized programs, update rewards, and track performance.
              </h5>
              <h5 className="text-white" style={{ fontWeight: "400" }}>
                Dive in and enhance customer relations and brand loyalty today.
              </h5>
            </div>
          </div>
        </div>
        <div className="empty-height"></div>
      </section>
    </div >
  );
};

export default LoginForm;
