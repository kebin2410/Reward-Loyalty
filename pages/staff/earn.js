import Navbar from "../../components/navBar/Navbar";
import EarnMain from "../../components/main/staff/earn";
import Footer from "../../components/footer/Footer";
import MiniBar from "../../components/navBar/minimalBar";
import {navData} from "../../components/navBar/miniData/staff";
import { StaffMenuInfo } from "../../components/navBar/userMenu/userMenuData";

export default function Earn() {
    return (
        <>
            <Navbar userMenu={StaffMenuInfo}/>
            <MiniBar items={navData}/>
            <EarnMain />
            <Footer />
        </>
    );
}

Earn.getLayout = function getLayout(page) {
    return <>{page}</>;
};
