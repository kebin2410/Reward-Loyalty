import Navbar from "../../components/navBar/Navbar";
import LoginForm from "../../components/login/staff/LoginForm";
import Footer from "../../components/footer/Footer";
import { StaffMenuInfo } from "../../components/navBar/userMenu/userMenuData";
export default function Login() {
  return (
    <>
      <Navbar userMenu={StaffMenuInfo}/>
      <LoginForm />
      <Footer />
    </>
  );
}

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};
