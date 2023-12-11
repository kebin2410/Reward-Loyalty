import Navbar from "../components/navBar/Navbar";
import RegisterForm from "../components/Register/RegisterForm";
import Footer from "../components/footer/Footer";
export default function Register() {
  return (
    <>
      <Navbar />
      <RegisterForm />
      <Footer />
    </>
  );
}

Register.getLayout = function getLayout(page) {
  return <>{page}</>;
};
