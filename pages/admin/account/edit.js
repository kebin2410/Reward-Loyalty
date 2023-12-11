/**
 * This code is written in JavaScript.
 * 
 * Summary: 
 * This code exports a functional component named "Edit" which renders a page for editing staff information. 
 * It imports various components like Navbar, EditMain, Footer, and MiniBar from their respective locations. 
 * The "Edit" component returns a JSX fragment containing the imported components, which are rendered on the page. 
 * Additionally, it defines a "getLayout" function that returns the provided page as it is.
 */

import Navbar from "../../../components/navBar/Navbar";
import EditMain from "../../../components/main/admin/edit";
import Footer from "../../../components/footer/Footer";
import { AdminMenuInfo } from "../../../components/navBar/userMenu/userMenuData";

export default function Edit() {
    return (
        <>
            <Navbar userMenu={AdminMenuInfo}/>
            <EditMain />
            <Footer />
        </>
    );
}

Edit.getLayout = function getLayout(page) {
    return <>{page}</>;
};