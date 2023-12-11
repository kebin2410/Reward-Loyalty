import React, { useCallback, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaRegUserCircle, FaUsers, FaQrcode } from "react-icons/fa";

const Member = () => {
    return (
        <div className="h-100 flex flex-grow-1">
            <section section className="sign-in-up w-100 place-self-center h-100 w-100 mx-auto place-self-center" >
                <div className="h-100">
                    <div className="text-center p-2">
                        <div className="section-header p-3">
                            <h2>Welcome, Demo member 😉</h2>
                            <h5 className="py-3 text-center" style={{ color: "var(--head-color)", fontWeight: "400" }}>Let&apos;s accumulate points for vibrant, practical, stunning, and delicious rewards that add a sprinkle of joy to your day!</h5>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                            <div className="container">
                                <div className="row">
                                    <Link href={"/member/account/edit"} className="my-2 col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{ textAlign: "left" }}>
                                        <div className="card h-100" style={{ marginBottom: "1rem", backgroundColor: "var(--nav-color)" }} >
                                            <div className="card-body py-4">
                                                <div className="rounded d-flex justify-content-center align-items-center mb-2" style={{ width: "40px", height: "40px", backgroundColor: "#7C2D12" }}><FaRegUserCircle color="orange" size={"15px"} /></div>
                                                    <h3 className="card-title">Account Settings</h3>
                                                <h5 className="card-text" style={{ color: "var(--head-color)", fontWeight: "400" }}>Update your account details like e-mail address and password.</h5>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={"/"} className="my-2 col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{ textAlign: "left" }}>
                                        <div className="card h-100" style={{ marginBottom: "1rem", backgroundColor: "var(--nav-color)" }} >
                                            <div className="card-body py-4">
                                                <div className="rounded d-flex justify-content-center align-items-center mb-2" style={{ width: "40px", height: "40px", backgroundColor: "#7C2D12" }}><FaQrcode color="orange" size={"15px"} /></div>
                                                <h3 className="card-title">Loyalty cards</h3>
                                                <h5 className="card-text" style={{ color: "var(--head-color)", fontWeight: "400" }}>View available loyalty cards, including those you are using for savings.</h5>
                                            </div>
                                        </div>
                                    </Link>
                                   <div className="empty-height"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div>
    );
}

export default Member;