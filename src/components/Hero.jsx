import React from "react";
import Nav from "./Nav";
import CommonBtn from "../Common/CommonBtn";
import { Tick } from "../Common/Icon";

function Hero() {
  return (
    <>
      <div className=" hero_bg_img" id="home">
        <Nav />
        <div className="container">
          <div className=" pt_87">
            <h3 className=" mb-0 ff-tilt mx-auto  fw-bold text-96 lh-115 text-center text-white heading_hero_max_w">
              Automotive Dry Ice Cleaning
            </h3>
            <p className=" mb-0  ff-acumin-reg  fw-normal text-white text-20 lh-30 text-center mt-3">
              Discover the ultimate clean for your machine.{" "}
              <span className=" d-sm-block">
                No chemicals, no abrasives and no drama.
              </span>
            </p>
            <div className=" mt-sm-4 mt-2 pt-3  d-flex align-items-center justify-content-center">
              <CommonBtn text="Get Instant Quote" />
            </div>
          </div>
          <div className=" pt-3 pb_287 ">
            <div className=" d-flex justify-content-center">
              <div className="no_chemcial_box py_23  mt-sm-4 mt-3">
                <div className=" d-flex flex-wrap align-items-center justify-content-center gap_28">
                  <div className=" d-flex align-items-center gap-3">
                    <div className="chemical_small_box d-flex align-items-center justify-content-center">
                      <Tick />
                    </div>
                    <p className=" mb-0 ff-acumin-bold fw-bold text-16 lh-24  text-white">
                      Non-Abrasive
                    </p>
                  </div>
                  <div className=" d-flex align-items-center gap-3">
                    <div className="chemical_small_box d-flex align-items-center justify-content-center">
                      <Tick />
                    </div>
                    <p className=" mb-0 ff-acumin-bold fw-bold text-16 lh-24  text-white">
                      No Chemicals
                    </p>
                  </div>
                  <div className=" d-flex align-items-center gap-3">
                    <div className="chemical_small_box d-flex align-items-center justify-content-center">
                      <Tick />
                    </div>
                    <p className=" mb-0 ff-acumin-bold fw-bold text-16 lh-24  text-white">
                      No Mess
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
