import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const RegisterForm = () => {
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
                <h2 className="title">Become a member</h2>
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
                  <Link href={"/otp"} className="cmn-btn" style={{ width: "100%" }}>
                    Create an account
                  </Link>
                </div>
                <div className="py-2">
                  <span style={{ color: "var(--head-color)" }}>Don&apos;t have an account yet? <Link href={"/register"}>Create a free account</Link></span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 bg-sign d-flex flex-column justify-content-center">
            <div className="m-auto p-5" style={{ maxWidth: "600px" }}>
              <h2 className="py-2 text-white">Start earning.</h2>
              <h5 className="py-3 text-white" style={{ fontWeight: "400" }}>
                Earn points, redeem rewards, and enjoy exclusive deals with our loyalty app. Sign up now for unparalleled benefits!
              </h5>
            </div>
          </div>
        </div>
        <div className="empty-height"></div>
      </section>
    </div >
  );
};

export default RegisterForm;
