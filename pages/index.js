import LoyaltyCard from "../components/cards/LoyaltyCard";
import { card_data } from "../components/home/homeData";
export default function Home() {
  return (
    <section className="card-section">
      <div className="overlay">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content">
                <div className="center-container">
                  {card_data.map((singleCard, index) => (
                    <LoyaltyCard
                      key={index}
                      id={singleCard.id}
                      img1={singleCard.img1}
                      img2={singleCard.img2}
                      link={singleCard.link}
                      bgColor={singleCard.bg_color}
                      headingText={singleCard.heading_text}
                      sub_title={singleCard.sub_title}
                      sub_text={singleCard.sub_text}
                      membershipID={singleCard.membershipID}
                      issue_date={singleCard.issue_date}
                      expire_date={singleCard.expiry_date}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "500px" }}></div>
    </section>
  );
};
