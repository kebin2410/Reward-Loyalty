import React, { useState } from "react";
import Image from "next/image";
import LoyaltyCard from "../../components/cards/LoyaltyCard";
import { card_data } from "../../components/cards/cardData";
import Social from "../../components/social/Social";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { BsDatabase } from "react-icons/bs";

import sm1 from "../../public/images/bg/sm01.jpg";
import sm2 from "../../public/images/bg/sm02.jpg";
import sm3 from "../../public/images/bg/sm03.jpg";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaTelegram,
  FaPinterestP,
  FaWhatsapp,
  FaReddit,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
const CreditCard = () => {
  const singleCard = card_data[3];
  return (
    <section className="card-section">
      <div className="overlay">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content">
                <div className="center-container">
                  <div className="py-2">
                    <Breadcrumb
                      breadcrumbs={[
                        ["Home", "/"],
                        [singleCard.heading_text, "/"],
                      ]}
                    />
                  </div>
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
                  <div
                    className="social-link d-flex flex-wrap justify-content-around align-items-center"
                    style={{ maxWidth: "448px", width: "100%" }}
                  >
                    {/* Socials links here */}
                    <Social
                      items={[
                        [FaFacebookF, "/"],
                        [BsTwitterX, "/"],
                        [FaLinkedinIn, "/"],
                        [FaPinterestP, "/"],
                        [FaReddit, "/"],
                        [FaWhatsapp, "/"],
                        [FaTelegram, "/"],
                        [CiMail, "/"],
                      ]}
                    />
                  </div>
                  <ul
                    className="nav nav-pills mt-4 d-flex justify-content-around border-bottom mx-5 "
                    style={{ width: "100%", maxWidth: "448px" }}
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active bg-transparent"
                        style={{ color: "var(--head-color)" }}
                        id="tab1-tab"
                        data-bs-toggle="pill"
                        href="#tab1"
                      >
                        Rewards
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link bg-transparent"
                        style={{ color: "var(--head-color)" }}
                        id="tab2-tab"
                        data-bs-toggle="pill"
                        href="#tab2"
                      >
                        History
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link bg-transparent"
                        style={{ color: "var(--head-color)" }}
                        id="tab3-tab"
                        data-bs-toggle="pill"
                        href="#tab3"
                      >
                        Rules
                      </a>
                    </li>
                  </ul>

                  <div
                    className="tab-content mt-3"
                    style={{ width: "100%", maxWidth: "448px" }}
                  >
                    <div className="tab-pane fade show active" id="tab1">
                      <table className="reward-table">
                        <tbody>
                          <tr>
                            <td>
                              <Image
                                src={sm1}
                                alt="images"
                                className="reward-table-image bg-white rounded"
                              />
                            </td>
                            <td className="td-padding">Free Cooking Class</td>
                            <td>
                              <div
                                className="d-flex align-items-center"
                                style={{ fontWeight: "500" }}
                              >
                                <BsDatabase />
                                {"3000"}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Image
                                src={sm2}
                                alt="images"
                                className="reward-table-image bg-white rounded"
                              />
                            </td>
                            <td>Second Pizza for Free</td>
                            <td>
                              <div
                                className="d-flex align-items-center"
                                style={{ fontWeight: "500" }}
                              >
                                <BsDatabase />
                                {"2000"}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Image
                                src={sm3}
                                alt="images"
                                className="reward-table-image bg-white rounded"
                              />
                            </td>
                            <td>Dinner for Two</td>
                            <td className="text-center">
                              <div
                                className="d-flex align-items-center"
                                style={{ fontWeight: "500" }}
                              >
                                <BsDatabase />
                                {"1000"}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane fade" id="tab2">
                      <div className="d-flex justify-content-center align-items-center">
                        <Link href="/login">
                          <p>Log in</p>
                        </Link>
                        <h6>&nbsp;&nbsp;to see your history.</h6>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade d-flex flex-column justify-content-center"
                      id="tab3"
                    >
                      <ul className="px-5" style={{ listStyle: "disc" }}>
                        <h5 className="">Rules and conditions</h5>
                        <li
                          className="py-2"
                          style={{
                            color: "var(--head-color)",
                            fontWeight: "400",
                          }}
                        >
                          Points expire after 10 months.
                        </li>
                        <li
                          className="py-2"
                          style={{
                            color: "var(--head-color)",
                            fontWeight: "400",
                          }}
                        >
                          You receive 20 points at your first purchase.
                        </li>
                        <li
                          className="py-2"
                          style={{
                            color: "var(--head-color)",
                            fontWeight: "400",
                          }}
                        >
                          For each 1 USD spent, you receive 50 points.
                        </li>
                        <li
                          className="py-2"
                          style={{
                            color: "var(--head-color)",
                            fontWeight: "400",
                          }}
                        >
                          Each purchase earns a minimum of 50 points and a
                          maximum of 100,000 points.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCard;
