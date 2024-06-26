import React from "react";
import team_meet from "../assets/images/webp/Team_person.webp";
import ComnHeading from "../Common/ComnHeading";
import team_bg_layer from "../assets/images/svg/team_bg_ellipse.svg";
import team_btm_layer from "../assets/images/webp/team_btm_layer.webp";

function Team() {
  return (
    <>
      <div className="  pt-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex justify-content-lg-center">
              <div className=" position-relative">
                <img
                  className=" position-relative z-2 w-100 team_img_height_width"
                  src={team_meet}
                  alt="team_meet"
                />
                <img
                  className=" d-none d-xl-block position-absolute  team_img_pos"
                  src={team_bg_layer}
                  alt="team_bg_layer"
                />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 col-12 d-flex align-items-center">
              <div className="">
                <ComnHeading color="color-darkblue" text="Meet The Team" />
                <p className=" mb-0  ff-acumin-bold fw-bold text-18 lh-21 color-darkblue mt-2">
                  Oxfordshire's Dry Ice Car Cleaning Specialists
                </p>
                <p className=" mb-0 ff-acumin-reg fw-normal text-16 lh-24 color-darkblue op-70 mt-3">
                  We’re shaking up the car cleaning scene with Dry Ice Blasting.
                  From our buzzing unit in Oxfordshire, we're not just a team -
                  we’re a Crew of car enthusiasts, expert restorers, and skilled
                  mechanics united by our love for cars. We treat every car like
                  it’s our own, driven by a philosophy that doing the right
                  thing for your ride is the only way to go. When you hand over
                  your keys to us, you're entrusting your pride and joy to
                  fellow car lovers who understand that every car deserves
                  precision care and a touch of cool.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-1">
          <img
            className=" w-100  mt-3"
            src={team_btm_layer}
            alt="team_btm_layer"
          />
        </div>
      </div>
    </>
  );
}

export default Team;
