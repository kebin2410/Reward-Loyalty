import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import ThemeContext from "../../common/ThemeChange/ThemeContext";
import LogoLight from "/public/logo/ZEST_Logo_Orange.png";
import LogoDark from "/public/logo/ZEST_Logo_White.png";

const Footer = () => {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <div className="footer-section">
      <div className="container">
        {/* <div className="row cus-mar py-5 justify-content-between wow fadeInUp">
          <div className="col-xl-3 col-lg-3 col-md-4 col-6">
            <div className="footer-box text-center">
              <h5>COMPANY</h5>
              <div className="row">
                <Link href="/home" className="nav-link small">
                  <h6>Home</h6>
                </Link>
                <Link href="/about" className="nav-link small">
                  <h6>About</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-6">
            <div className="footer-box text-center">
              <h5>SUPPORT</h5>
              <div className="row">
                <Link href="/FAQ" className="nav-link small">
                  <h6>FAQ</h6>
                </Link>
                <Link href="/contact" className="nav-link small">
                  <h6>Contact</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-6">
            <div className="footer-box text-center ">
              <h5>LEGAL</h5>
              <div className="row">
                <Link href="/terms-of-use" className="nav-link small">
                  <h6>Terms of Use</h6>
                </Link>
                <Link href="/privacy-policy" className="nav-link small">
                  <h6>Privacy Policy</h6>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        <div className="footer-bottom">
            <Link href={"https://zest.my/"} className="d-flex align-items-center justify-content-center">
              <div className="d-flex align-items-center justify-content-center" style={{ color: "var(--head-color)", fontSize: "0.8rem" }}>
              <h6>Powered by</h6>
              <Image
                className="zest-logo px-2"
                src={dark ? LogoLight : LogoDark}
                alt="logo"
              />
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Footer;
