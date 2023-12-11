import Navbar from "../components/navBar/Navbar";
import OtpForm from "../components/otp/OtpForm";
import Footer from "../components/footer/Footer";
export default function Otp() {
  return (
    <>
      <Navbar />
      <OtpForm />
      <Footer />
    </>
  );
}

Otp.getLayout = function getLayout(page) {
  return <>{page}</>;
};
