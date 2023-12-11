import React, { useCallback, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from 'react';
import { FaRegUserCircle, FaUsers, FaQrcode, FaSearch, FaUpload } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import RM5 from "/public/images/bg/RM5.png";
import { PiCaretUpDown as UpDownIcon } from "react-icons/pi";

const Members = () => {
    return (
        <div className="h-100 flex flex-grow-1 mt-3">
            <div className="container">
                <div className="card" style={{ backgroundColor: "var(--nav-color)" }}>
                    <div className="card-body" style={{ padding: "0" }}>
                        <div className="d-flex align-items-center p-2" style={{ color: "var(--head-color)" }}>
                            <FaUsers size={"24px"} color="var(--head-color)" /><h4 className="px-2">Members</h4><p className="px-3">{"1 result"}</p>
                        </div>
                        <div className="container my-1">
                            <input className="custom-input" style={{ padding: "10px", margin: "0", height: "38px" }} placeholder={"🔍Search"} />
                        </div>
                        <table className="member-table w-100 my-4">
                            <thead className="p-auto">
                                <tr className="">
                                    <th className="responsive-avatar">AVATAR</th>
                                    <th className="">NAME<UpDownIcon /></th>
                                    <th className="">E-MAIL ADDRESS<UpDownIcon /></th>
                                    <th className="">LOYALTY CARD </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="responsive-avatar">
                                        <Image src={RM5} alt="images"
                                            className="w-50 rounded" />
                                    </td>
                                    <td>Demo Member</td>
                                    <td className="">
                                        {"mem***@a******.com"}
                                    </td>
                                    <td className="">
                                        <Link href={"/staff/transaction"} className="hover-underline line-clamp-1">The Canai Guys</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </div >
    );
}
export default Members; 