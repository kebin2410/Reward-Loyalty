import { useEffect, useState, useContext, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import DarkModeSwitch from "../../common/ThemeChange/Switch";
import Menu from "./userMenu/userMenu";
import LangSwitch from "../../common/LanguageChange/Switch";
import ThemeContext from "../../common/ThemeChange/ThemeContext";
import { FaBars, FaHome } from "react-icons/fa";

const Navbar = (props) => {
  const userMenu = props.userMenu;
  const [auth, setAuth] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const { dark, toggle } = useContext(ThemeContext);
  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  return (
    <header
      className={`header-section register login ${
        windowHeight > 50 && "header-fixed animated fadeInDown"
      }`}
    >
      <div className="container">
        <div className="row d-flex header-area">
          <nav className="navbar d-flex justify-content-between  navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" href="/">
              {!dark ? (
                <i className="text-white">
                  <FaHome />
                </i>
              ) : (
                <i className="text-black">
                  <FaHome />
                </i>
              )}
            </Link>
            <div className="d-flex align-items-center justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/login">Log In</Link>
                </li>
              </ul>
              <div className="right-area header-action d-flex align-items-center mx-3">
                <Link href="/register" className="cmn-btn btn-register">
                  Register
                </Link>
              </div>
              {auth && (
                <>
                  <div className="d-flex">
                    <Menu menuData={userMenu} />
                    <div className="vr py-2 mx-2 wb-color"></div>
                  </div>
                </>
              )}
              <DarkModeSwitch />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
