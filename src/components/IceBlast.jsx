import React from "react";
import ice_blast_top from "../assets/images/webp/Ice-blast-top-layer.webp";
import ComnHeading from "../Common/ComnHeading";
import right_side_ice_blast from "../assets/images/webp/ice_blast_right_side.webp";
import left_side_ice_blast from "../assets/images/webp/ice_blast_left_side.webp";
import ice_blast_bottom from "../assets/images/webp/blast-bottom-layer.webp";

function IceBlast() {
  return (
    <>
      <div className="  bg_color_ice_blast position-relative">
        <div className=" w-100">
          <img className=" w-100" src={ice_blast_top} alt="ice_blast_top" />
        </div>
        <div className=" container">
          <div className=" text-center pt-4 pt-md-0">
            <ComnHeading
              text="Understanding Dry Ice Blasting"
              color="text-white"
            />
          </div>
          <div className="row pt_47">
            <div className="col-lg-6 col-12">
              <h4 className="  mb-0 ff-acumin-bold fw-bold text-24 lh-36 text-white">
                What is Dry Ice Blasting?
              </h4>
              <p className=" max_w_ice_blast_para  mb-0  ff-acumin-reg fw-normal text-18 lh-27  text-white op-90 mt-2">
                Dry ice blasting is an innovative cleaning technology that uses
                solid CO2 (carbon dioxide) pellets. These pellets are propelled
                at high speeds to clean surfaces. Unlike traditional cleaning
                methods, this process does not involve water or abrasive
                materials, making it incredibly safe and effective for delicate
                areas like engine bays, undercarriages, and even car interiors.
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <div className=" right_side_ice_blast_pos">
                <img
                  className=" right_ice_blast w-100"
                  src={right_side_ice_blast}
                  alt="right_side_ice_blast"
                />
              </div>
            </div>
          </div>
          <div className="row  d-flex  flex-column-reverse flex-lg-row pt_blast_work pb_47">
            <div className="col-lg-6 col-12">
              <div className="  left_side_ice_blast_pos">
                <img
                  className=" left_ice_blast w-100"
                  src={left_side_ice_blast}
                  alt="right_side_ice_blast"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <h4 className="  mb-0 ff-acumin-bold fw-bold text-24 lh-36 text-white">
                How Does Dry Ice Blasting Work?
              </h4>
              <p className=" max_w_ice_blast_para  mb-0  ff-acumin-reg fw-normal text-18 lh-27  text-white op-90 mt-2">
                The process begins with the dry ice pellets being accelerated in
                a jet of compressed air, similar to sandblasting but with a
                crucial difference. Upon contact with the surface, the dry ice
                pellets undergo sublimation - they turn directly from solid to
                gas without becoming liquid. This reaction creates a
                micro-explosion on the surface, lifting dirt and contaminants
                away.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-100">
          <img className=" w-100" src={ice_blast_bottom} alt="ice_blast_top" />
        </div>
      </div>
    </>
  );
}

export default IceBlast;
