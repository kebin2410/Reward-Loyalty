import Navbar from "../../components/navBar/Navbar";
import StaffMain from "../../components/main/staff/dashboard";
import Footer from "../../components/footer/Footer";
import { StaffMenuInfo } from "../../components/navBar/userMenu/userMenuData";
export default function Login() {
    return (
        <>
            <Navbar userMenu={StaffMenuInfo}/>
            <StaffMain />
            <Footer />
        </>
    );
}

Login.getLayout = function getLayout(page) {
    return <>{page}</>;
};
