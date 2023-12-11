import React, { useState } from "react";
import Image from "next/image";
import LoyaltyCard from "../../../components/cards/LoyaltyCard";
import { card_data } from "../../../components/cards/cardData";
import Social from "../../../components/social/Social";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { BsDatabase, BsBoxArrowUpRight } from "react-icons/bs";

import sm1 from "/public/images/bg/sm01.jpg";
import sm2 from "/public/images/bg/sm02.jpg";
import sm3 from "/public/images/bg/sm03.jpg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTelegram,
  FaPinterestP,
  FaWhatsapp,
  FaReddit,
  FaGift,
  FaUsers,
  FaRegUserCircle,
} from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import Link from "next/link";
const Transaction = () => {
  const singleCard = card_data[0];
  return (
    <section className="card-section">
      <div className="overlay">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content">
                <div className="center-container">
                  <LoyaltyCard
                    id={singleCard.id}
                    img1={singleCard.img1}
                    img2={singleCard.img2}
                    link={singleCard.link}
                    bgColor={singleCard.bg_color}
                    headingText={singleCard.heading_text}
                    sub_title={singleCard.sub_title}
                    sub_text={singleCard.sub_text}
                    balance={singleCard.balance}
                    membershipID={singleCard.membershipID}
                    issue_date={singleCard.issue_date}
                    expire_date={singleCard.expiry_date}
                  />
                  <Link
                    className="nav-links hover-underline py-3 d-flex"
                    href={"#"}
                    style={{ maxWidth: "448px", width: "100%" }}
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      <BsBoxArrowUpRight strokeWidth="1" size={"20px"} />
                      <div className="px-2">View card on website</div>
                    </div>
                  </Link>
                  <Link
                    href={"/staff/earn"}
                    className="cmn-btn w-100 my-2"
                    style={{ maxWidth: "448px" }}
                  >
                    Add transaction
                  </Link>
                  <div
                    className="d-flex align-items-center justify-content-around match-width border p-3 rounded shadow"
                    style={{
                      color: "var(--head-color)",
                      backgroundColor: "var(--bs-inner-color)",
                      borderColor: "#dfd7d7 !important",
                      padding: "15px !important"
                    }}
                  >
                    <FaRegUserCircle size={25} />
                    <div className="d-flex flex-column px-3 lh-1">
                      <b className="wb-color line-clamp-1">{"Demo Member"}</b>
                      <div className=" line-clamp-1">
                        Joined in November 2023
                      </div>
                    </div>
                    <div className="wb-color line-clamp-1">328-167-685-583</div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center mt-2 w-100"
                    style={{ color: "var(--head-color)", maxWidth: "448px" }}
                  >
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div className="d-flex justify-content-center align-items-center">
                        <div
                          className="rounded-pill d-flex justify-content-center align-items-center mb-1"
                          style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "var(--trans-bg-color)",
                          }}
                        >
                          <BsDatabase
                            color="var(--trans-item-color)"
                            size={15}
                          />
                        </div>
                        <h5
                          className="px-1"
                          style={{ color: "var(--wb-font-button-color)" }}
                        >
                          Purchase
                        </h5>
                      </div>
                      <div
                        className="px-2 rounded"
                        style={{
                          backgroundColor: "var(--trans-bg-color)",
                          color: "var(--trans-item-color)",
                        }}
                      >
                        MYR 123.00
                      </div>
                      <div className="text-secondary">4 days ago</div>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column w-100 border-start border-2 p-4"
                    style={{
                      color: "var(--head-color)",
                      maxWidth: "448px",
                      marginLeft: "25px",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        color: "var(--head-color)",
                        fontSize: "20px",
                      }}
                    >
                      +123 points {"by affandy at branch"}
                    </div>
                    <div className="text-secondary">
                      Points expire 11 months from now
                    </div>
                    <div className="d-flex align-items-center hover-underline fs-6">
                      <GrAttachment />
                      <div className="px-2">Attachment</div>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center mt-2 w-100"
                    style={{ color: "var(--head-color)", maxWidth: "448px" }}
                  >
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div className="d-flex justify-content-center align-items-center">
                        <div
                          className="rounded-pill d-flex justify-content-center align-items-center mb-1"
                          style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "var(--trans-bg-color)",
                          }}
                        >
                          <FaGift color="var(--trans-item-color)" size={15} />
                        </div>
                        <h5
                          className="px-1"
                          style={{ color: "var(--wb-font-button-color)" }}
                        >
                          Reward
                        </h5>
                      </div>
                      <div
                        className="px-2 rounded"
                        style={{
                          backgroundColor: "var(--trans-bg-color)",
                          color: "var(--trans-item-color)",
                        }}
                      >
                        MYR 345.00
                      </div>
                      <div className="text-secondary">5 days ago</div>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column w-100 border-start border-2 p-4"
                    style={{
                      color: "var(--head-color)",
                      maxWidth: "448px",
                      marginLeft: "25px",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        color: "var(--head-color)",
                        fontSize: "20px",
                      }}
                    >
                      -50 points
                    </div>
                    <div className="text-secondary">
                      Points expire 11 months from now
                    </div>
                    <div className="d-flex align-items-center hover-underline fs-6">
                      <GrAttachment />
                      <div className="px-2">Attachment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "300px" }}></div>
    </section>
  );
};

export default Transaction;
