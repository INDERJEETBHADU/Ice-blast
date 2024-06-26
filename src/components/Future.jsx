import React from "react";
import ComnHeading from "../Common/ComnHeading";
import checkmark from "../assets/images/svg/check-mark.svg";
import future_car_wash from "../assets/images/webp/car_future_clean.webp";
import CommonBtn from "../Common/CommonBtn";
import play_btn from "../assets/images/svg/play_btn.svg";

function Future() {
  return (
    <>
      <div className="" id="about">
        <div className=" cleaning_bg_future mt_40">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <ComnHeading
                  max_w="max_w_351"
                  color=" color-darkblue"
                  text="The Future of Car Cleaning"
                />
                <div className=" pt-1">
                  <p className=" mb-0    ff-acumin-reg fw-normal text-16 lh-24 color-darkblue op-70 max_w_558 mt-2">
                    No need to be overwhelmed by the thought of harsh chemicals
                    and abrasive cleaning methods. Our dry ice blasting leaves
                    your car spotless, reaching where no cloth can.
                  </p>
                </div>
                <div className=" d-flex   align-items-start gap-3 mt-sm-4 mt-2">
                  <img src={checkmark} alt="checkmark" />
                  <div className="">
                    <h6 className=" mb-0 ff-acumin-bold fw-bold  text-16 lh-24">
                      Gentle Yet Powerful
                    </h6>
                    <p className=" mb-0 mt-sm-1   ff-acumin-reg fw-normal text-16 lh-24 color-darkblue op-70 max_w_518 ">
                      Our dry ice method lifts dirt effortlessly without the
                      need for harsh chemicals or abrasive techniques.
                    </p>
                  </div>
                </div>
                <div className=" d-flex   align-items-start gap-3 mt-sm-3 mt-2">
                  <img src={checkmark} alt="checkmark" />
                  <div className="">
                    <h6 className=" mb-0 ff-acumin-bold fw-bold  text-16 lh-24">
                      Precision Cleaning
                    </h6>
                    <p className=" mb-0 mt-sm-1   ff-acumin-reg fw-normal text-16 lh-24 color-darkblue op-70 max_w_518 ">
                      See how accurately we target the grunge zones, ensuring
                      every inch of your car's undercarriage and engine is
                      meticulously cleaned.
                    </p>
                  </div>
                </div>
                <div className=" d-flex   align-items-start gap-3 mt-sm-3 mt-2">
                  <img src={checkmark} alt="checkmark" />
                  <div className="">
                    <h6 className=" mb-0 ff-acumin-bold fw-bold  text-16 lh-24">
                      Safe for AlI Vehicles
                    </h6>
                    <p className=" mb-0 mt-sm-1   ff-acumin-reg fw-normal text-16 lh-24 color-darkblue op-70 max_w_518 ">
                      Perfect for all car types, from family hatchbacks to
                      classic cars and high-performance vehicles.
                    </p>
                  </div>
                </div>
                <div className=" d-flex   align-items-start gap-3 mt-sm-3 mt-2">
                  <img src={checkmark} alt="checkmark" />
                  <div className="">
                    <h6 className=" mb-0 ff-acumin-bold fw-bold  text-16 lh-24">
                      Eco-Friendly Approach
                    </h6>
                    <p className=" mb-0 mt-sm-1  ff-acumin-reg fw-normal text-16 lh-24 color-darkblue op-70 max_w_518 ">
                      Notice the absence of water or chemical runoff, showcasing
                      our commitment to an environmentally responsible cleaning
                      process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 col-12">
                <div className=" position-relative">
                  <img
                    className=" w-100 future_car_wash br_24"
                    src={future_car_wash}
                    alt="future_car_wash"
                  />
                  <div className="play_box_icon d-flex align-items-center justify-content-center play_btn_pos   cursor_pointer position-absolute">
                    <img src={play_btn} alt="play_btn" />
                  </div>
                </div>
              </div>
            </div>
            <h6 className=" mb-0 mt_40  ff-acumin-bold fw-bold text-16 lh-24 text-center color-darkblue">
              Like What You See? Get an Instant Quote
            </h6>
            <div className=" d-flex justify-content-center mt-3 pt-1">
              <CommonBtn text="Get Instant Quote" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Future;
