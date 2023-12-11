import { useCallback, useContext, useState } from "react";
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
    FaUpload,
    FaRegUserCircle,
  } from "react-icons/fa";

const Partner = () => {
    return (
        <div className="h-100 flex flex-grow-1 mt-3">
            <div className="container">
                <div className="card" style={{ backgroundColor: "var(--bs-inner-color)" }}>
                    <div className="card-body">
                        <div className="d-flex align-items-center" style={{ color: "var(--head-color)" }}>
                            <FaUsers size={"24px"} color="var(--head-color)" /><h4 className="px-2">Members</h4><p className="px-3">{"1 result"}</p>
                        </div>
                    </div>
                    <div className="container my-3">
                        <div className="d-flex gap-2">
                            <div className="h-100 col">
                                <input className="custom-input" style={{ padding: "10px", margin: "0", height: "38px" }} placeholder={"🔍Search"} />
                            </div>
                            <div className="col-8 d-flex justify-content-center gap-1">
                                <div className="h-100 col-8">
                                    <button className="h-100 custom-btn1"><h7 className="line-clamp-1">+ Add new item</h7></button>
                                </div>
                                <div className="h-100 col-4">
                                    <button className="h-100 custom-btn2">
                                        <h7 className="line-clamp-1 d-flex align-items-center justify-content-center">
                                            <FaUpload />&nbsp;Export
                                        </h7>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Partner;