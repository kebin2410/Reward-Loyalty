import Navbar from "../../components/navBar/Navbar";
import MemberMain from "../../components/main/staff/members";
import Footer from "../../components/footer/Footer";
import MiniBar from "../../components/navBar/minimalBar";
import {navData} from "../../components/navBar/miniData/staff";
import { StaffMenuInfo } from "../../components/navBar/userMenu/userMenuData"; 
export default function QRcode() {
    return (
        <>
            <Navbar userMenu={StaffMenuInfo}/>
            <MiniBar items={navData}/>
            <MemberMain />
            <Footer />
        </>
    );
}

QRcode.getLayout = function getLayout(page) {
    return <>{page}</>;
};
