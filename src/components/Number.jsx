import React, { useState } from "react";
import ComnHeading from "../Common/ComnHeading";
import Accordion from "./Accordion";
import Helper from "../Common/Helper";
import CommonBtn from "../Common/CommonBtn";

function Number() {
  return (
    <>
      <div className="" id="price">
        <div className="container">
          <div className=" text-center">
            <ComnHeading color="text-black" text="Let's Talk Numbers" />
            <div className=" pt-1">
              <p className=" mb-0  ff-acumin-reg  fw-normal text-16 lh-24 color-darkblue op-70 max_w_759 mx-auto mt-2">
                We're all about transparency, but we also know that each car
                tells a different story. The cost can vary based on how much
                grime we're up against. More dirt might mean more ice and more
                time to get that perfect finish. But don't sweat it – we'll
                always give you a straight price, customised to your car's
                needs.
              </p>
            </div>
          </div>
          <Helper />
          <div className=" pt-3 d-flex justify-content-center">
            <div className="Quote_box br_14 mt-4">
              <h3 className=" mb-0  ff-tilt fw-bold text-32 lh-44 color-darkblue text-center">
                Get an Instant Quote Today
              </h3>
              <div className=" d-flex justify-content-center">
                <p className=" mb-0 ff-acumin-reg fw-normal text-16 lh-24 max_w_para_770 text-center  color-darkblue op-70  mt-3">
                  Regular dry ice cleaning prevents costly rust and wear. Avoid
                  potentially thousands of pounds worth of bodywork repairs when
                  just for a fraction of that you can keep your car in prime
                  condition all year round! What are you waiting for?
                </p>
              </div>
              <div className=" pt-4 mt-3  d-flex justify-content-center">
                <CommonBtn text="Get Instant Quote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Number;
