import Navbar from "../../components/navBar/Navbar";
import AdminDashboard from "../../components/main/admin/dashboard";
import { AdminMenuInfo } from "../../components/navBar/userMenu/userMenuData";
import { navData } from "../../components/navBar/miniData/admin";
import MinimalBar from "../../components/navBar/minimalBar";
import Footer from "../../components/footer/Footer";
export default function Dashboard() {
    return (
        <>
            <Navbar userMenu={AdminMenuInfo}/>
            <MinimalBar items={navData}/>
            <AdminDashboard />
            <Footer />
        </>
    );
}

Dashboard.getLayout = function getLayout(page) {
    return <>{page}</>;
};
