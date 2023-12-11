import Navbar from "../../components/navBar/Navbar";
import MemberMain from "../../components/main/member/dashboard";
import Footer from "../../components/footer/Footer";
import { MemberMenuInfo } from "../../components/navBar/userMenu/userMenuData";
export default function Login() {
    return (
        <>
            <Navbar userMenu={MemberMenuInfo}/>
            <MemberMain />
            <Footer />
        </>
    );
}

Login.getLayout = function getLayout(page) {
    return <>{page}</>;
};
