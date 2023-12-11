import React, { useCallback, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StyledDropzone from "../../dropzone";
import { FaRegUserCircle, FaUsers, FaQrcode } from "react-icons/fa";

const Edit = () => {
    return (
        <div className="h-100 flex flex-grow-1">
            <section section className="w-100 place-self-center h-100 w-100 mx-auto place-self-center" >
                <div className="h-100">
                    <div className="text-center mt-4 p-2">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                            <div className="container">
                                <div className="row">
                                    <div className="card p-0" style={{ backgroundColor: "var(--nav-color)" }}>
                                        <div className="card-header border-bottom" style={{ borderBottomColor: "var(--head-color)" }}>
                                            <div className="d-flex align-items-center"><FaRegUserCircle color="var(--head-color)" size={"20px"} /><h5>&nbsp;Account Settings</h5></div>
                                        </div>
                                        <div className="card-body">
                                            <div className="d-flex my-2 px-3" style={{}}><h6>Avatar</h6></div>
                                            <div style={{ cursor: "pointer" }}>
                                                <StyledDropzone />
                                            </div>
                                            <div className="d-flex mt-2 px-3" style={{}}><h6>Full name *</h6></div>
                                            <input className="my-2 px-3 custom-input"></input>
                                            <div className="d-flex mt-2 px-3" style={{}}><h6>E-mail address *</h6></div>
                                            <input className="my-2 px-3 custom-input"></input>
                                            <div className="d-flex mt-2 px-3" style={{}}><h6>Phone number *</h6></div>
                                            <input className="my-2 px-3 custom-input"></input>
                                            <div className="d-flex my-2 px-3" style={{}}><h6>Birthday *</h6></div>
                                            <input className="my-2 px-3 custom-input"></input>
                                            <button className="cmn-btn w-100 my-2 px-3">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    );

}

export default Edit; 