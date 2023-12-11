import React, { useCallback, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaRegUserCircle,
  FaUsers,
  FaQrcode,
  FaUserFriends,
  FaNetworkWired,
  FaHouseUser,
} from "react-icons/fa";

const Admin = () => {
  return (
    <div className="h-100 flex flex-grow-1">
      <section
        section
        className="sign-in-up w-100 place-self-center h-100 w-100 mx-auto place-self-center"
      >
        <div className="h-100">
          <div className="text-center p-2">
            <div className="section-header p-3">
              <h2>Welcome, Administrator 🤠</h2>
              <h5
                className="py-3 text-center"
                style={{ color: "var(--head-color)", fontWeight: "400" }}
              >
                Here you can adjust your account settings, and manage
                administrators, networks and partners.
              </h5>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12">
              <div className="container">
                <div className="row">
                  <Link
                    href={"/admin/account/edit"}
                    className="my-2 col-xl-3 col-lg-3 col-md-12 col-sm-12"
                    style={{ textAlign: "left" }}
                  >
                    <div
                      className="card h-100"
                      style={{
                        marginBottom: "1rem",
                        backgroundColor: "var(--nav-color)",
                      }}
                    >
                      <div className="card-body py-4">
                        <div
                          className="rounded d-flex justify-content-center align-items-center mb-2"
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#7C2D12",
                          }}
                        >
                          <FaUserFriends color="orange" size={"15px"} />
                        </div>
                        <h3 className="card-title">Administrators</h3>
                        <h5
                          className="card-text"
                          style={{
                            color: "var(--head-color)",
                            fontWeight: "400",
                          }}
                        >
                          Administrators and managers manage partners for one or
                          more networks.
                        </h5>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href={"/admin/qrcode"}
                    className="my-2 col-xl-3 col-lg-3 col-md-12 col-sm-12"
                    style={{ textAlign: "left" }}
                  >
                    <div
                      className="card h-100"
                      style={{
                        marginBottom: "1rem",
                        backgroundColor: "var(--nav-color)",
                      }}
                    >
                      <div className="card-body py-4">
                        <div
                          className="rounded d-flex justify-content-center align-items-center mb-2"
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#7C2D12",
                          }}
                        >
                          <FaNetworkWired color="orange" size={"15px"} />
                        </div>
                        <h3 className="card-title">Networks</h3>
                        <h5
                          className="card-text"
                          style={{
                            color: "var(--head-color)",
                            fontWeight: "400",
                          }}
                        >
                          Networks are a way to group managers and partners,
                          they are not visible on the website.
                        </h5>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href={"/staff/members"}
                    className="my-2 col-xl-3 col-lg-3 col-md-12 col-sm-12"
                    style={{ textAlign: "left" }}
                  >
                    <div
                      className="card h-100"
                      style={{
                        marginBottom: "1rem",
                        backgroundColor: "var(--nav-color)",
                      }}
                    >
                      <div className="card-body py-4">
                        <div
                          className="rounded d-flex justify-content-center align-items-center mb-2"
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#7C2D12",
                          }}
                        >
                          <FaHouseUser color="orange" size={"15px"} />
                        </div>
                        <h3 className="card-title">Partners</h3>
                        <h5
                          className="card-text"
                          style={{
                            color: "var(--head-color)",
                            fontWeight: "400",
                          }}
                        >
                          Partners create and manage loyalty cards for their
                          customers.
                        </h5>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href={"/staff/members"}
                    className="my-2 col-xl-3 col-lg-3 col-md-12 col-sm-12"
                    style={{ textAlign: "left" }}
                  >
                    <div
                      className="card h-100"
                      style={{
                        marginBottom: "1rem",
                        backgroundColor: "var(--nav-color)",
                      }}
                    >
                      <div className="card-body py-4">
                        <div
                          className="rounded d-flex justify-content-center align-items-center mb-2"
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#7C2D12",
                          }}
                        >
                          <FaUsers color="orange" size={"15px"} />
                        </div>
                        <h3 className="card-title">Members</h3>
                        <h5
                          className="card-text"
                          style={{
                            color: "var(--head-color)",
                            fontWeight: "400",
                          }}
                        >
                          View all members who have signed up to save for
                          rewards.
                        </h5>
                      </div>
                    </div>
                  </Link>
                  <div className="empty-height"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="empty-height"></div>
      </section>
    </div>
  );
};

export default Admin;
