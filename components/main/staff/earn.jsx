import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoyaltyCard from "../../../components/cards/LoyaltyCard";
import { card_data } from "../../../components/cards/cardData";
import { BsDatabase, BsBoxArrowUpRight } from "react-icons/bs";
import StyledDropzone from "../../../components/dropzone/dropzone2";
import { FaRegUserCircle, FaUsers, FaQrcode } from "react-icons/fa";

const Earn = () => {
    const [disabled, setDisabled] = useState(false);
    const singleCard = card_data[0];
    return (
        <section className="card-section">
            <div className="overlay">
                <div className="container wow fadeInUp">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content">
                                <div className="center-container">
                                    <div className="mt-3"></div>
                                    <div
                                        className="d-flex flex-column match-width my-2"
                                        style={{}}
                                    >
                                        <h6>Purchase amount {disabled ? "" : "*"}</h6>
                                        <input
                                            type="number"
                                            className="my-1 px-3 custom-input"
                                            disabled={disabled}
                                        ></input>
                                    </div>
                                    {/* <IconInput /> */}
                                    <div className="form-check form-switch match-width">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckDefault"
                                            onClick={() => setDisabled(!disabled)}
                                        />
                                        <label
                                            className="px-1 form-check-label wb-color"
                                            htmlFor="flexSwitchCheckDefault"
                                        >
                                            Enter points only
                                        </label>
                                    </div>
                                    <div
                                        className="d-flex flex-column match-width my-2"
                                        style={{}}
                                    >
                                        <h6>Points {!disabled ? "" : "*"}</h6>
                                        <input
                                            type="number"
                                            className="my-1 px-3 custom-input"
                                            disabled={!disabled}
                                        ></input>
                                    </div>
                                    <div className="match-width" style={{ cursor: "pointer" }}>
                                        <StyledDropzone />
                                    </div>
                                    <input
                                        className="my-3 px-3 custom-input match-width"
                                        placeholder="Optional note..."
                                    ></input>
                                    <button
                                        className="cmn-btn mb-3 w-100"
                                        style={{ maxWidth: "448px" }}
                                    >
                                        Add points to balance
                                    </button>
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
                                    <LoyaltyCard
                                        id={singleCard.id}
                                        img1={singleCard.img1}
                                        img2={singleCard.img2}
                                        link={"#"}
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

export default Earn;
