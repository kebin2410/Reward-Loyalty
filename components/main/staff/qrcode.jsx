import React, { useCallback, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle, FaUsers, FaQrcode } from "react-icons/fa";

const QR = () => {
    return (
        <div className="h-100 flex flex-grow-1">
            <section section className="w-100 place-self-center h-100 w-100 mx-auto place-self-center" >
                <div className="h-100">
                    <div className="text-center mt-4 p-2">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                            <div className="container">
                                <div className="row">
                                    <div className="card p-0" style={{ backgroundColor: "var(--bs-inner-color)" }}>
                                        <div className="card-body">
                                            <Link href={"#"} className="cmn-btn w-100 my-2 px-3"><div className="d-flex align-items-center justify-content-center"><FaQrcode />&nbsp;&nbsp; Scan QR Code</div></Link>
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

export default QR; 