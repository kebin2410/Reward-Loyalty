import Navbar from "../../components/navBar/Navbar";
import QrcodeMain from "../../components/main/staff/qrcode";
import Footer from "../../components/footer/Footer";
import MiniBar from "../../components/navBar/minimalBar";
import {navData} from "../../components/navBar/miniData/staff"; 
import { StaffMenuInfo } from "../../components/navBar/userMenu/userMenuData";
export default function QRcode() {
    return (
        <>
            <Navbar userMenu={StaffMenuInfo}/>
            <MiniBar items={navData}/>
            <QrcodeMain />
            <Footer />
        </>
    );
}

QRcode.getLayout = function getLayout(page) {
    return <>{page}</>;
};
