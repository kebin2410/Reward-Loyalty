import Footer from "./footer/Footer";
import NavBar from "./navBar/Navbar";
import Preloader from "./preloader/Preloader";
import { MemberMenuInfo } from "../components/navBar/userMenu/userMenuData";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar userMenu={MemberMenuInfo} />
      <div className="w-100 d-flex flex-column">{children}</div>
      <Footer />
      <Preloader />
    </>
  );
};

export default Layout;
