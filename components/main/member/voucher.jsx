import React, { useState } from "react";
import Image from "next/image";
import Social from "../../../components/social/Social";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { BsDatabase } from "react-icons/bs";

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
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
const CreditCard = () => {
  return (
    <section className="card-section">
      <div className="overlay">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content">
                <div className="center-container">
                  <div className="py-2">
                    <Breadcrumb breadcrumbs={[["Home", "/"]]} />
                  </div>
                  <div
                    className="my-3"
                    style={{
                      width: "100%",
                      maxWidth: "448px",
                    }}
                  >
                    <div
                      className="card"
                      style={{ borderColor: "var(--nav-color)" }}
                    >
                      <div
                        className="card-head"
                        style={{ width: "100%", borderRadius: "20px" }}
                      >
                        <Image
                          src={sm1}
                          className=""
                          style={{ width: "100%", borderRadius: "5px" }}
                        />
                      </div>
                      <div
                        className="card-body"
                        style={{
                          padding: "0 !important",
                          backgroundColor: "var(--nav-color)",
                        }}
                      >
                        <div className="p-3">
                          <h4>{"RM5 Cash Voucher"}</h4>
                          <h5 className="my-2" style={{ fontWeight: "200" }}>
                            Redeem now for RM5 cash rebate!
                          </h5>

                          <span className="text-secondary">
                            You have {"694"} points.
                          </span>
                          <div className="d-flex justify-content-between">
                            <div
                              className="d-flex align-items-center"
                              style={{
                                color: "var(--head-color)",
                                fontSize: "30px",
                              }}
                            >
                              <BsDatabase size={30} color="var(--head-color)" />
                              {500}
                            </div>
                            <Link href={"/member/claim"} className="cmn-btn">
                              claim
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

                  <div
                    className="mt-3"
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
                        </tbody>
                      </table>
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
