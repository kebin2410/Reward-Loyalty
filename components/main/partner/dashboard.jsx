import React, { useCallback, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaRegUserCircle, FaUsers, FaQrcode, FaGift, FaFilter  } from "react-icons/fa";
import { HiOutlineFilter } from "react-icons/hi";
import { TiShoppingBag } from "react-icons/ti";
import { TbDeviceAnalytics } from "react-icons/tb";

const Partner = () => {
    return (
        <div className="h-100 flex flex-grow-1">
            <section section className="sign-in-up w-100 place-self-center h-100 w-100 mx-auto place-self-center" >
                <div className="h-100">
                    <div className="text-center p-2">
                        <div className="section-header p-3">
                            <h2>Welcome, Partner 😎</h2>
                            <h5 className="py-3 text-center" style={{ color: "var(--head-color)", fontWeight: "400" }}>Here you can manage loyalty cards, staff members and rewards.</h5>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                            <div className="container">
                                <div className="row">
                                    <Link href={"/member/edit"} className="my-2 col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{ textAlign: "left" }}>
                                        <div className="card h-100" style={{ marginBottom: "1rem", backgroundColor: "var(--nav-color)" }} >
                                            <div className="card-body py-4">
                                                <div className="rounded d-flex justify-content-center align-items-center mb-2" style={{ width: "40px", height: "40px", backgroundColor: "#7C2D12" }}><HiOutlineFilter color="orange" size={"15px"} /></div>
                                                    <h3 className="card-title">Clubs</h3>
                                                <h5 className="card-text" style={{ color: "var(--head-color)", fontWeight: "400" }}>Clubs are a way to group cards and staff, they are not visible on the website.</h5>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={"/"} className="my-2 col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{ textAlign: "left" }}>
                                        <div className="card h-100" style={{ marginBottom: "1rem", backgroundColor: "var(--nav-color)" }} >
                                            <div className="card-body py-4">
                                                <div className="rounded d-flex justify-content-center align-items-center mb-2" style={{ width: "40px", height: "40px", backgroundColor: "#7C2D12" }}><FaQrcode color="orange" size={"15px"} /></div>
                                                <h3 className="card-title">Loyalty cards</h3>
                                                <h5 className="card-text" style={{ color: "var(--head-color)", fontWeight: "400" }}>With Loyalty cards, members can earn points for rewards.</h5>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={"/member/edit"} className="my-2 col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{ textAlign: "left" }}>
                                        <div className="card h-100" style={{ marginBottom: "1rem", backgroundColor: "var(--nav-color)" }} >
                                            <div className="card-body py-4">
                                                <div className="rounded d-flex justify-content-center align-items-center mb-2" style={{ width: "40px", height: "40px", backgroundColor: "#7C2D12" }}><FaGift color="orange" size={"15px"} /></div>
                                                    <h3 className="card-title">Rewards</h3>
                                                <h5 className="card-text" style={{ color: "var(--head-color)", fontWeight: "400" }}>Manage loyalty card rewards for members.</h5>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={"/"} className="my-2 col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{ textAlign: "left" }}>
                                        <div className="card h-100" style={{ marginBottom: "1rem", backgroundColor: "var(--nav-color)" }} >
                                            <div className="card-body py-4">
                                                <div className="rounded d-flex justify-content-center align-items-center mb-2" style={{ width: "40px", height: "40px", backgroundColor: "#7C2D12" }}><TiShoppingBag color="orange" size={"15px"} /></div>
                                                <h3 className="card-title">Staff</h3>
                                                <h5 className="card-text" style={{ color: "var(--head-color)", fontWeight: "400" }}>Staff members can hand out points and rewards. They log in at the /staff URL. </h5>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={"/member/edit"} className="my-2 col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{ textAlign: "left" }}>
                                        <div className="card h-100" style={{ marginBottom: "1rem", backgroundColor: "var(--nav-color)" }} >
                                            <div className="card-body py-4">
                                                <div className="rounded d-flex justify-content-center align-items-center mb-2" style={{ width: "40px", height: "40px", backgroundColor: "#7C2D12" }}><FaUsers color="orange" size={"15px"} /></div>
                                                    <h3 className="card-title">Members</h3>
                                                <h5 className="card-text" style={{ color: "var(--head-color)", fontWeight: "400" }}>View the members/customers who use your loyalty cards.</h5>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={"/"} className="my-2 col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{ textAlign: "left" }}>
                                        <div className="card h-100" style={{ marginBottom: "1rem", backgroundColor: "var(--nav-color)" }} >
                                            <div className="card-body py-4">
                                                <div className="rounded d-flex justify-content-center align-items-center mb-2" style={{ width: "40px", height: "40px", backgroundColor: "#7C2D12" }}><TbDeviceAnalytics color="orange" size={"15px"} /></div>
                                                <h3 className="card-title">Analytics</h3>
                                                <h5 className="card-text" style={{ color: "var(--head-color)", fontWeight: "400" }}>Measure your loyalty campaign engagement.</h5>
                                            </div>
                                        </div>
                                    </Link>
                                   <div className="empty-height"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Partner;