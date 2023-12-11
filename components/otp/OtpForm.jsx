import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import OtpInput from './OtpInput';

const OtpForm = () => {
    const [mounted, setMounted] = useState(false);
    const [value, setValue] = useState("");
    const [otp, setOtp] = useState('');
    useEffect(() => {
        setMounted(true);
    }, []);

    if (mounted) return (
        <div className="h-100 flex flex-grow-1">
            <section className="sign-in-up  w-100 place-self-center h-100 w-100 mx-auto place-self-center" >
                <div className="row h-100">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 p-5 d-flex flex-column justify-content-center">
                        <div className="m-auto" style={{ maxWidth: "500px" }}>
                            <div className="section-header">
                                <h4 className="title">Input OTP code</h4>
                            </div>
                            <form action="/">
                                <div className="row">
                                    <div className="col-12 pb-1">
                                        <div className="single-input">
                                            <label style={{ color: "var(--head-color)" }}>Key-in OTP here</label>
                                            <div className="mobile-otp d-flex align-items-center">
                                                <div className="input d-flex flex-row justify-content-center gap-1">
                                                    {/* <input
                                                        className="text-center form-control"
                                                        type="text"
                                                        placeholder=""
                                                        maxLength="1"
                                                        required
                                                        onKeyPress={(event) => {
                                                            if (!/[0-9]/.test(event.key)) {
                                                                event.preventDefault();
                                                            }
                                                        }}
                                                    />
                                                    <input
                                                        className="text-center form-control"
                                                        type="text"
                                                        placeholder=""
                                                        maxLength="1"
                                                        required
                                                        onKeyPress={(event) => {
                                                            if (!/[0-9]/.test(event.key)) {
                                                                event.preventDefault();
                                                            }
                                                        }}
                                                    />
                                                    <input
                                                        className="text-center form-control"
                                                        type="text"
                                                        placeholder=""
                                                        maxLength="1"
                                                        required
                                                        onKeyPress={(event) => {
                                                            if (!/[0-9]/.test(event.key)) {
                                                                event.preventDefault();
                                                            }
                                                        }}
                                                    />
                                                    <input
                                                        className="text-center form-control"
                                                        type="text"
                                                        placeholder=""
                                                        maxLength="1"
                                                        required
                                                        onKeyPress={(event) => {
                                                            if (!/[0-9]/.test(event.key)) {
                                                                event.preventDefault();
                                                            }
                                                        }}
                                                    />
                                                    <input
                                                        className="text-center form-control"
                                                        type="text"
                                                        placeholder=""
                                                        maxLength="1"
                                                        required
                                                        onKeyPress={(event) => {
                                                            if (!/[0-9]/.test(event.key)) {
                                                                event.preventDefault();
                                                            }
                                                        }}
                                                    />
                                                    <input
                                                        className="text-center form-control"
                                                        type="text"
                                                        placeholder=""
                                                        maxLength="1"
                                                        required
                                                        onKeyPress={(event) => {
                                                            if (!/[0-9]/.test(event.key)) {
                                                                event.preventDefault();
                                                            }
                                                        }} 
                                                    />*/}
                                                    <OtpInput />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="d-flex justify-content-between">
                                                <Link href="#">Resend Code</Link>
                                                <Link href="#">Back</Link>
                                            </div>
                                            <button className="cmn-btn w-100">Submit OTP</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 bg-sign d-flex flex-column justify-content-center">
                        <div className="m-auto p-5" style={{ maxWidth: "600px" }}>
                            <h2 className="py-2 text-white">Verify Your Phone Number</h2>
                            <h5 className="py-3 text-white" style={{ fontWeight: "400" }}>
                                A 6 digit One Time Password (OTP) has been sent to your
                                given phone number which will expire in 15 minutes, after
                                which you will need to resend the code.
                            </h5>
                        </div>
                    </div>
                </div >
                <div className="empty-height"></div>
            </section >
        </div >
    );
};

export default OtpForm;