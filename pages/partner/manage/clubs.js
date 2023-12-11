import Navbar from "../../../components/navBar/Navbar";
import ClubsMain from "../../../components/main/partner/clubs";
import Footer from "../../../components/footer/Footer";
import Minibar from "../../../components/navBar/minimalBar";
import { navData } from "../../../components/navBar/miniData/partner";
import { PartnerMenuInfo } from "../../../components/navBar/userMenu/userMenuData";
export default function Clubs() {
  return (
    <>
      <Navbar userMenu={PartnerMenuInfo} />
      <Minibar items={navData} />
      <ClubsMain />
      <Footer />
    </>
  );
}

Clubs.getLayout = function getLayout(page) {
  return <>{page}</>;
};
