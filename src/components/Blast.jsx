import React from "react";
import blast_upper_layer from "../assets/images/webp/blast-top-layer.webp";
import ComnHeading from "../Common/ComnHeading";
import CommonBtn from "../Common/CommonBtn";
import blast_bottom_layer from "../assets/images/webp/blast-bottom.webp";

function Blast() {
  return (
    <>
      <div className="">
        <img
          className=" w-100"
          src={blast_upper_layer}
          alt="blast_upper_layer"
        />
        <div className=" container">
          <div className=" d-flex justify-content-center">
            <div className="">
              <ComnHeading text="Blast The Grime and Bring Back The Prime" />
              <p className=" mb-0 ff-acumin-reg fw-normal text-16 lh-24  max_w_para_966 op-70 color-darkblue mt-3 text-center">
                Rest easy knowing that our approach is tailored to protect and
                enhance your vehicle. We don’t clean; we care. Every treatment is
                a promise that your vehicle will not only look its best but also
                receive the care it needs for a longer, healthier life on the
                road.
              </p>
              <h5 className=" mb-0 ff-acumin-bold fw-bold text-16 lh-19 color-darkblue text-center mt-3">
                Ready For a Transformation? Get an Instant Quote
              </h5>
              <div className=" d-flex  justify-content-center mt-4 pt-3">
                <CommonBtn text="Get Instant Quote" />
              </div>
            </div>
          </div>
        </div>
        <img
          className=" w-100"
          src={blast_bottom_layer}
          alt="blast_upper_layer"
        />
      </div>
    </>
  );
}

export default Blast;
