import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsDatabase } from "react-icons/bs";
const LoyaltyCard = ({
  img1,
  img2,
  link,
  headingText,
  sub_title,
  sub_text,
  balance,
  membershipID,
  issue_date,
  expire_date,
  bgColor,
}) => {
  return (
    <div
      className="card-container"
      onClick={() => {
        document.location.href = link;
      }}
    >
      <Image src={img1} alt="images" className="card-img" />
      <div className="card-overlay" style={{ backgroundColor: bgColor }}>
        <div className="d-flex justify-content-between">
          <h4 className="text-white">{headingText}</h4>
          <div className={""}>
            {balance &&
              <>
                <p className="text-white" style={{ fontWeight: "200" }}>Balance</p>
                <div className="d-flex align-items-center" style={{ fontWeight: "600" }}>
                  <BsDatabase strokeWidth={"0.5"}/>{" "}{balance}
                </div>
              </>
            }
          </div>
        </div>
        <div className="d-flex justify-content-between gap-2">
          <div className="d-flex flex-column justify-content-start align-items-start p-3">
            <h5 className="text-white line-clamp-1 mb-2" style={{ fontWeight: "400" }}>{sub_title}</h5>
            <h6 className="text-white text-start line-clamp-2" style={{ fontWeight: "300" }}>{sub_text}</h6>
          </div>
          <Image
            src={img2}
            alt="images"
            className="svg-class bg-white rounded"
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="text-start">
            <h6 className="line-clamp-1 text-white pb-1" style={{ fontWeight: "200" }}>Membership ID</h6>
            <h6 className="line-clamp-1 text-white" style={{ fontWeight: "600" }}>{membershipID}</h6>
          </div>
          <div className="d-flex">
            <div className="mx-2 responsive-text text-start">
              <h6 className="line-clamp-1 text-white pb-1" style={{ fontWeight: "200" }}>Issue Date</h6>
              <h6 className="line-clamp text-white" style={{ fontWeight: "600" }}>{issue_date}</h6>
            </div>
            <div className="text-end">
              <h6 className="line-clamp-1 text-white pb-1" style={{ fontWeight: "200" }}>Expiry Date</h6>
              <h6 className="line-clamp-1 text-white" style={{ fontWeight: "600" }}>{expire_date}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyCard;
