import React, { useState } from "react";
import { LocaTion, Email, Phone, Time } from "../Common/Icon";
import nav_logo from "../assets/images/svg/logo_ice_blast.svg";
import CommonBtn from "../Common/CommonBtn";

function Nav() {
  const [show, setfirst] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <div className=" ">
        <div className="container">
          <div className=" d-flex flex-wrap gap-1  py_14 px_5 align-items-center justify-content-between">
            <div className=" d-flex   align-items-center gap-2">
              <div
                className="social_box  cursor_pointer   d-flex align-items-center justify-content-center
               "
              >
                <LocaTion />
              </div>
              <p className=" mb-0 fw-normal op-70 text-16 lh-24 text-center text-white">
                Crawley Mill Industrial Estate, Witney, Oxfordshire{" "}
              </p>
            </div>
            <div className=" d-flex  align-items-center gap-2">
              <div
                className="social_box  cursor_pointer  d-flex align-items-center justify-content-center
               "
              >
                <Email />
              </div>
              <p className=" mb-0 fw-normal op-70 text-16 lh-24 text-center text-white">
                book@dryiceblastingpro.co.uk
              </p>
            </div>
            <div className=" d-flex  align-items-center gap-2">
              <div
                className="social_box cursor_pointer   d-flex align-items-center justify-content-center
               "
              >
                <Phone />
              </div>
              <p className=" mb-0 op-70 fw-normal text-16 lh-24 text-center text-white">
                01865123456
              </p>
            </div>
            <div className=" d-flex  align-items-center gap-2">
              <div
                className="social_box cursor_pointer   d-flex align-items-center justify-content-center
               "
              >
                <Time />
              </div>
              <p className=" mb-0 op-70 fw-normal text-16 lh-24 text-center text-white">
                Mon - Fri: 9am to 5pm
              </p>
            </div>
          </div>
          <div className="nav_box d-flex  px_5 justify-content-between   align-items-center">
            <img className=" cursor_pointer" src={nav_logo} alt="nav_logo" />
            <ul
              className={` ${
                show ? "end-0" : "right_100"
              } d-flex gap-4 ff-acumin-bold  mobile-view fw-bold text-16 lh-19 `}
            >
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className=" nav_link color-grey"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className=" nav_link color-grey"
                  href="#about"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className="nav_link color-grey"
                  href="#service"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className=" nav_link color-grey"
                  href="#price"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className=" nav_link color-grey"
                  href="#blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className=" nav_link color-grey"
                  href="#contact"
                >
                  Contact us
                </a>
              </li>
            </ul>
            <CommonBtn text="Call Us" />
            <div
              onClick={() => {
                setfirst(!show);
              }}
              class="menu d-block d-lg-none z_9  "
            >
              <span></span>
              <span class="my-2"></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
